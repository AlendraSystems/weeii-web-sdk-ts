/**
 * Singleton Store instance for the Weeii SDK.
 *
 * Initialized lazily on first call to `getStore()` — which happens inside
 * `configureWeeii()`. Domain modules call `getStore()` at runtime, never at
 * module load time, so tree-shaking still works correctly.
 */
import { createStore } from '@silasdevs/core/store';
import type { Store } from '@silasdevs/core/store';
import { weeiiSchema } from './schema.js';

let _store: Store | null = null;

export function initStore(): Store {
  if (_store !== null) {
    return _store;
  }
  _store = createStore({ schema: weeiiSchema });
  return _store;
}

export function getStore(): Store {
  if (_store === null) {
    throw new Error('[weeii/sdk] Store not initialized. Call configureWeeii() first.');
  }
  return _store;
}

/** Exposed for testing only — resets the singleton. */
export function _resetStore(): void {
  _store = null;
}
