// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useWeeiiRecord } from '../../src/react/useWeeiiRecord.js';
import { initStore, _resetStore } from '../../src/store.js';

beforeEach(() => {
  _resetStore();
  initStore();
});

describe('useWeeiiRecord', () => {
  it('returns undefined when record does not exist', () => {
    const { result } = renderHook(() => useWeeiiRecord<{ id: number; nombre: string }>('usuario', 99));
    expect(result.current).toBeUndefined();
  });

  it('returns the record after it is upserted into the store', () => {
    const store = initStore();
    store.upsert('usuario', { id: 1, version: 1, eliminado: false, nombre: 'Ana' });
    const { result } = renderHook(() =>
      useWeeiiRecord<{ id: number; nombre: string }>('usuario', 1),
    );
    expect(result.current?.nombre).toBe('Ana');
  });

  it('re-renders when the record changes', async () => {
    const store = initStore();
    store.upsert('usuario', { id: 2, version: 1, eliminado: false, nombre: 'Original' });
    const { result } = renderHook(() =>
      useWeeiiRecord<{ id: number; nombre: string }>('usuario', 2),
    );
    expect(result.current?.nombre).toBe('Original');

    await act(async () => {
      store.upsert('usuario', { id: 2, version: 2, eliminado: false, nombre: 'Updated' });
    });
    expect(result.current?.nombre).toBe('Updated');
  });
});
