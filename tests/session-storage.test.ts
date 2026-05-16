import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  saveSessionToken,
  loadSessionToken,
  savePushToken,
  loadPushToken,
  clearSession,
  clearAll,
} from '../src/session-storage.js';

// ─── localStorage mock ────────────────────────────────────────────────────────

const store: Record<string, string> = {};
const mockStorage: Storage = {
  getItem:    (k) => store[k] ?? null,
  setItem:    (k, v) => { store[k] = v; },
  removeItem: (k) => { delete store[k]; },
  clear:      () => { for (const k in store) delete store[k]; },
  get length() { return Object.keys(store).length; },
  key: (i) => Object.keys(store)[i] ?? null,
};

beforeEach(() => {
  mockStorage.clear();
  vi.stubGlobal('localStorage', mockStorage);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('saveSessionToken / loadSessionToken', () => {
  it('persists and retrieves a token', () => {
    saveSessionToken('tok_abc');
    expect(loadSessionToken()).toBe('tok_abc');
  });

  it('returns undefined when nothing stored', () => {
    expect(loadSessionToken()).toBeUndefined();
  });

  it('overwrites an existing token', () => {
    saveSessionToken('tok_first');
    saveSessionToken('tok_second');
    expect(loadSessionToken()).toBe('tok_second');
  });
});

describe('savePushToken / loadPushToken', () => {
  it('persists and retrieves a push token', () => {
    savePushToken('push_xyz');
    expect(loadPushToken()).toBe('push_xyz');
  });

  it('returns undefined when nothing stored', () => {
    expect(loadPushToken()).toBeUndefined();
  });

  it('does not overwrite the session token', () => {
    saveSessionToken('tok_session');
    savePushToken('push_xyz');
    expect(loadSessionToken()).toBe('tok_session');
    expect(loadPushToken()).toBe('push_xyz');
  });
});

describe('clearSession', () => {
  it('removes session token but keeps push token', () => {
    saveSessionToken('tok_session');
    savePushToken('push_xyz');
    clearSession();
    expect(loadSessionToken()).toBeUndefined();
    expect(loadPushToken()).toBe('push_xyz');
  });
});

describe('clearAll', () => {
  it('removes everything from storage', () => {
    saveSessionToken('tok_session');
    savePushToken('push_xyz');
    clearAll();
    expect(loadSessionToken()).toBeUndefined();
    expect(loadPushToken()).toBeUndefined();
  });
});

describe('storage unavailability', () => {
  it('fails silently when localStorage throws on setItem', () => {
    const broken: Storage = {
      ...mockStorage,
      setItem: () => { throw new Error('QuotaExceededError'); },
    };
    vi.stubGlobal('localStorage', broken);
    // Must not throw
    expect(() => saveSessionToken('tok')).not.toThrow();
  });

  it('returns undefined when localStorage throws on getItem', () => {
    const broken: Storage = {
      ...mockStorage,
      getItem: () => { throw new Error('SecurityError'); },
    };
    vi.stubGlobal('localStorage', broken);
    expect(loadSessionToken()).toBeUndefined();
  });
});
