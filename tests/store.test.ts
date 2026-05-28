import { describe, it, expect, beforeEach } from 'vitest';
import { initStore, getStore, _resetStore } from '../src/store.js';

beforeEach(() => {
  _resetStore();
});

describe('initStore', () => {
  it('returns a store instance', () => {
    const store = initStore();
    expect(store).toBeDefined();
    expect(typeof store.get).toBe('function');
    expect(typeof store.all).toBe('function');
    expect(typeof store.upsert).toBe('function');
  });

  it('is idempotent — returns the same instance on repeated calls', () => {
    const a = initStore();
    const b = initStore();
    expect(a).toBe(b);
  });
});

describe('getStore', () => {
  it('throws if called before initStore', () => {
    expect(() => getStore()).toThrow('[weeii/sdk] Store not initialized');
  });

  it('returns the store after initStore', () => {
    initStore();
    expect(() => getStore()).not.toThrow();
    expect(getStore()).toBeDefined();
  });
});

describe('store operations', () => {
  it('upserts and retrieves a record', () => {
    initStore();
    const store = getStore();
    store.upsert('usuario', { id: 1, version: 1, activo: true, nombre: 'Test' });
    const record = store.get<{ id: number; nombre: string }>('usuario', 1);
    expect(record?.nombre).toBe('Test');
  });

  it('returns undefined for missing records', () => {
    initStore();
    expect(getStore().get('usuario', 999)).toBeUndefined();
  });

  it('clears a table', () => {
    initStore();
    const store = getStore();
    store.upsert('usuario', { id: 1, version: 1, activo: false });
    store.clear('usuario');
    expect(store.get('usuario', 1)).toBeUndefined();
  });
});
