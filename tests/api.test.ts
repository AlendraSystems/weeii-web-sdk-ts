import { describe, it, expect, beforeEach, vi } from 'vitest';

// ─── Mock transport and store before importing the module under test ──────────

const { mockRequest, mockClassifyData } = vi.hoisted(() => ({
  mockRequest:      vi.fn(),
  mockClassifyData: vi.fn(),
}));

vi.mock('../src/transport.js', () => ({
  initTransport:  vi.fn(),
  getTransport:   () => ({ request: mockRequest }),
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

import { request } from '../src/api.js';

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

  it('calls transport with the correct channel and data', async () => {
    mockRequest.mockResolvedValueOnce({ data: {}, code: 'OK', description: '', messageId: 2, channel: 'test', error: null, raw: {} });
    await request('mi_canal', { foo: 'bar' });
    expect(mockRequest).toHaveBeenCalledWith({ channel: 'mi_canal', data: { foo: 'bar' } });
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
