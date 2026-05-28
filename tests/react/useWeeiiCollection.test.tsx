// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useWeeiiCollection } from '../../src/react/useWeeiiCollection.js';
import { initStore, _resetStore } from '../../src/store.js';

beforeEach(() => {
  _resetStore();
  initStore();
});

describe('useWeeiiCollection', () => {
  it('returns empty items and zero count for an empty table', () => {
    const { result } = renderHook(() => useWeeiiCollection('usuario'));
    expect(result.current.items).toHaveLength(0);
    expect(result.current.count).toBe(0);
  });

  it('reflects records that are already in the store at render time', () => {
    const store = initStore();
    store.upsert('usuario', { id: 1, version: 1, activo: true, nombre: 'Ana' });
    store.upsert('usuario', { id: 2, version: 1, activo: true, nombre: 'Bob' });
    const { result } = renderHook(() => useWeeiiCollection('usuario'));
    expect(result.current.count).toBe(2);
  });

  it('re-renders when a new record is inserted', async () => {
    const store = initStore();
    const { result } = renderHook(() => useWeeiiCollection('usuario'));
    expect(result.current.count).toBe(0);

    await act(async () => {
      store.upsert('usuario', { id: 3, version: 1, activo: true, nombre: 'Carlos' });
    });
    expect(result.current.count).toBe(1);
  });

  it('re-renders when a record is removed', async () => {
    const store = initStore();
    store.upsert('usuario', { id: 4, version: 1, activo: true });
    const { result } = renderHook(() => useWeeiiCollection('usuario'));
    expect(result.current.count).toBe(1);

    await act(async () => {
      store.remove('usuario', 4);
    });
    expect(result.current.count).toBe(0);
  });
});
