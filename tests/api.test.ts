import { describe, it, expect, beforeEach, vi } from 'vitest';

// ─── Mock transport and store before importing the module under test ──────────

const { mockRequest, mockFire, mockClassifyData } = vi.hoisted(() => ({
  mockRequest:      vi.fn(),
  mockFire:         vi.fn(),
  mockClassifyData: vi.fn(),
}));

const mockProtocol = { codes: { success: 'OK', interim: 'NEUTRO' }, fields: {} };

vi.mock('../src/transport.js', () => ({
  initTransport:   vi.fn(),
  getTransport:    () => ({ request: mockRequest, fire: mockFire, protocol: mockProtocol }),
  _resetTransport: vi.fn(),
}));

vi.mock('@silasdevs/core/store', async (importOriginal) => {
  const real = await importOriginal<typeof import('@silasdevs/core/store')>();
  return { ...real, classifyData: mockClassifyData };
});

vi.mock('../src/store.js', () => ({
  initStore:  vi.fn(),
  getStore:   vi.fn(() => ({})),
  _resetStore: vi.fn(),
}));

// ─── Import after mocks are set up ───────────────────────────────────────────

import { request, fire } from '../src/api.js';

// ─────────────────────────────────────────────────────────────────────────────

beforeEach(() => {
  vi.clearAllMocks();
  mockClassifyData.mockReturnValue({ tables: {}, summary: {} });
});

describe('request()', () => {
  it('resolves with message and attaches changes', async () => {
    const fakeMsg = {
      channel:     'usuario',
      messageId:   1,
      code:        'OK',
      description: 'OK',
      error:       null,
      data:        { usuario: [{ id: 1, version: 1 }] },
      raw:         {},
    };
    mockRequest.mockResolvedValueOnce(fakeMsg);
    const result = await request('usuario', { id: 1 });
    expect(result.data).toEqual(fakeMsg.data);
    expect(result).toHaveProperty('changes');
    expect(mockClassifyData).toHaveBeenCalledOnce();
  });

  it('calls transport with the correct channel, data, and options', async () => {
    mockRequest.mockResolvedValueOnce({ data: {}, code: 'OK', description: '', messageId: 2, channel: 'test', error: null, raw: {} });
    await request('mi_canal', { foo: 'bar' });
    expect(mockRequest).toHaveBeenCalledWith(
      { channel: 'mi_canal', data: { foo: 'bar' } },
      { flattenOutgoing: true },
    );
  });

  it('attaches isInterim: false on resolved message', async () => {
    mockRequest.mockResolvedValueOnce({ data: {}, code: 'OK', description: '', messageId: 3, channel: 'test', error: null, raw: {} });
    const result = await request('test');
    expect(result.isInterim).toBe(false);
  });

  it('classifies error payload before rejecting', async () => {
    const fakeError = {
      code:     'ERROR',
      error:    null,
      data:     { usuario: [] },
      response: {},
    };
    mockRequest.mockRejectedValueOnce(fakeError);
    await expect(request('usuario')).rejects.toBeDefined();
    expect(mockClassifyData).toHaveBeenCalledOnce();
  });

  it('rejects cleanly when transport error has no data', async () => {
    mockRequest.mockRejectedValueOnce(new Error('Network error'));
    await expect(request('usuario')).rejects.toThrow('Network error');
    // classifyData should not have been called with undefined
    expect(mockClassifyData).not.toHaveBeenCalled();
  });
});

describe('fire()', () => {
  it('calls transport.fire with the correct channel, data, and options', () => {
    mockFire.mockReturnValueOnce(() => {});
    fire('mi_canal', { foo: 'bar' }, () => {});
    expect(mockFire).toHaveBeenCalledWith(
      { channel: 'mi_canal', data: { foo: 'bar' } },
      expect.any(Function),
      { flattenOutgoing: true },
    );
  });

  it('calls callback with isInterim: true for NEUTRO responses and classifies data', () => {
    const neutroMsg = { channel: 'test', messageId: 1, code: 'NEUTRO', description: 'Procesando...', error: null, data: { foo: 1 }, raw: {} };
    let innerCallback: ((m: typeof neutroMsg) => boolean | void) | undefined;
    mockFire.mockImplementationOnce((_msg: unknown, cb: typeof innerCallback) => {
      innerCallback = cb;
      return () => {};
    });

    const received: { isInterim: boolean }[] = [];
    fire('test', {}, (msg) => { received.push({ isInterim: msg.isInterim }); });

    // Simulate NEUTRO — inner wrapper should return false automatically
    const result = innerCallback?.(neutroMsg);
    expect(result).toBe(false);
    expect(received).toHaveLength(1);
    expect(received[0].isInterim).toBe(true);
    expect(mockClassifyData).toHaveBeenCalledOnce();
  });

  it('calls callback with isInterim: false for final OK responses', () => {
    const okMsg = { channel: 'test', messageId: 1, code: 'OK', description: 'OK', error: null, data: {}, raw: {} };
    mockFire.mockImplementationOnce((_msg: unknown, cb: (m: typeof okMsg) => boolean | void) => {
      cb(okMsg);
      return () => {};
    });

    const received: { isInterim: boolean }[] = [];
    fire('test', {}, (msg) => { received.push({ isInterim: msg.isInterim }); });

    expect(received[0].isInterim).toBe(false);
  });

  it('returns the unsubscribe function from transport.fire', () => {
    const unsub = vi.fn();
    mockFire.mockReturnValueOnce(unsub);
    const result = fire('test', {}, () => {});
    expect(result).toBe(unsub);
  });
});
