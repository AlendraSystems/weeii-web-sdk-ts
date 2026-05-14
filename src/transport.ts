/**
 * Singleton transport instance for the Weeii SDK.
 *
 * Call `initTransport(url)` once at app startup (inside `configureWeeii`).
 * All domain modules import `transport` directly — no injection required.
 */
import { createTransport } from '@silasdevs/transport';
import type { Transport } from '@silasdevs/transport';
import { WEEII_PROTOCOL } from './protocol.js';

let _transport: Transport | null = null;

export function initTransport(url: string): Transport {
  if (_transport !== null) {
    return _transport;
  }
  _transport = createTransport({
    url,
    protocol: WEEII_PROTOCOL,
    reconnect: { auto: true, delayMs: 5_000, maxAttempts: Infinity },
  });
  return _transport;
}

export function getTransport(): Transport {
  if (_transport === null) {
    throw new Error('[weeii/sdk] Transport not initialized. Call configureWeeii() first.');
  }
  return _transport;
}

/** Exposed for testing only — resets the singleton. */
export function _resetTransport(): void {
  _transport = null;
}
