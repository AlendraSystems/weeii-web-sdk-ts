// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';

// ─── Build a minimal transport event emitter mock ────────────────────────────

type EventCallback = () => void;

function makeMockTransport() {
  const listeners: Record<string, EventCallback[]> = {};
  return {
    connect: vi.fn(),
    on: vi.fn((event: string, cb: EventCallback) => {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(cb);
      // Return an unsubscribe function
      return () => {
        listeners[event] = listeners[event].filter((fn) => fn !== cb);
      };
    }),
    emit: (event: string) => {
      listeners[event]?.forEach((fn) => fn());
    },
  };
}

const mockTransport = makeMockTransport();

vi.mock('../../src/transport.js', () => ({
  initTransport:   vi.fn(),
  getTransport:    () => mockTransport,
  _resetTransport: vi.fn(),
}));

import { useWeeiiConnection } from '../../src/react/useWeeiiConnection.js';

// ─────────────────────────────────────────────────────────────────────────────

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useWeeiiConnection', () => {
  it('starts in connecting state', () => {
    const { result } = renderHook(() => useWeeiiConnection());
    expect(result.current.status).toBe('connecting');
    expect(result.current.connected).toBe(false);
    expect(result.current.reconnecting).toBe(false);
  });

  it('transitions to connected when transport emits connected', async () => {
    const { result } = renderHook(() => useWeeiiConnection());
    await act(async () => {
      mockTransport.emit('connected');
    });
    expect(result.current.status).toBe('connected');
    expect(result.current.connected).toBe(true);
  });

  it('transitions to disconnected when transport emits disconnected', async () => {
    const { result } = renderHook(() => useWeeiiConnection());
    await act(async () => { mockTransport.emit('connected'); });
    await act(async () => { mockTransport.emit('disconnected'); });
    expect(result.current.status).toBe('disconnected');
    expect(result.current.connected).toBe(false);
  });

  it('transitions to reconnecting when transport emits reconnecting', async () => {
    const { result } = renderHook(() => useWeeiiConnection());
    await act(async () => { mockTransport.emit('reconnecting'); });
    expect(result.current.status).toBe('reconnecting');
    expect(result.current.reconnecting).toBe(true);
    expect(result.current.connected).toBe(false);
  });
});
