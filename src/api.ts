/**
 * Core request helper — wraps transport.request() and automatically
 * classifies the response payload into the Weeii store.
 *
 * This is the TypeScript equivalent of `Api.posclas_wrapper` + `BDD.clasificar_datos_registros`.
 *
 * Every domain API function uses `request()` instead of calling
 * `getTransport().request()` directly so store hydration is always guaranteed.
 */
import { classifyData } from '@silasdevs/core/store';
import type { ClassifyResult } from '@silasdevs/core/store';
import type { IncomingMessage } from '@silasdevs/transport';
import type { TransportError } from '@silasdevs/transport';
import { getTransport } from './transport.js';
import { getStore } from './store.js';

// ─────────────────────────────────────────────────────────────────────────────

export interface WeeiiIncomingMessage<BData = Record<string, unknown>>
  extends IncomingMessage<BData> {
  /** Store changes produced by classifying this response. */
  changes: ClassifyResult;
}

/**
 * Send a request, classify the response into the store, and return the
 * enriched message with `changes` attached.
 *
 * On error responses the payload is still classified (the server often sends
 * partial data even on failure) before the promise rejects.
 */
export async function request<BData = Record<string, unknown>>(
  channel: string,
  data: object = {},
  options?: { flattenOutgoing?: boolean },
): Promise<WeeiiIncomingMessage<BData>> {
  let msg: IncomingMessage<BData>;

  try {
    msg = await getTransport().request<BData>(
      { channel, data: data as Record<string, unknown> },
      { flattenOutgoing: options?.flattenOutgoing ?? true },
    );
  } catch (err) {
    // On transport-level error, classify whatever data came back then re-throw.
    const te = err as TransportError;
    if (te?.data && typeof te.data === 'object') {
      classifyData(getStore(), te.data as Record<string, unknown>);
    }
    throw err;
  }
  
  const changes = classifyData(getStore(), msg.data as Record<string, unknown>);

  return { ...msg, changes };
}
