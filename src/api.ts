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
  /** True when this is an interim (NEUTRO) response — the final response is still pending. */
  isInterim: boolean;
}

/**
 * Callback for fire(). Interim (NEUTRO) messages are always kept alive
 * automatically — no need to return false. Only return false for final
 * messages when you want to keep listening beyond the standard request/response
 * cycle.
 */
export type WeeiiFireCallback<BData = Record<string, unknown>> =
  (msg: WeeiiIncomingMessage<BData>) => boolean | void;

// ─────────────────────────────────────────────────────────────────────────────

function buildMessage<BData>(
  msg: IncomingMessage<BData>,
  changes: ClassifyResult,
): WeeiiIncomingMessage<BData> {
  const interimCode = getTransport().protocol.codes?.interim;
  return {
    ...msg,
    changes,
    isInterim: interimCode !== undefined && msg.code === interimCode,
  };
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * Send a request, classify the response into the store, and return the
 * enriched message with `changes` attached.
 *
 * On error responses the payload is still classified (the server often sends
 * partial data even on failure) before the promise rejects.
 *
 * `isInterim` on the resolved message is always `false` — request() only
 * resolves once the final response arrives.
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

  return buildMessage(msg, changes);
}

/**
 * Callback-based send that surfaces every response — including interim (NEUTRO)
 * messages that `request()` hides.
 *
 * The callback receives an enriched `WeeiiIncomingMessage` with `isInterim`
 * set to `true` for NEUTRO responses. Return `false` from the callback to keep
 * listening (required when `isInterim` is true). Any other return value removes
 * the handler.
 *
 * Returns an unsubscribe function that cancels the handler immediately.
 *
 * ```ts
 * const unsub = fire('pagar_con_saldo', params, (msg) => {
 *   if (msg.isInterim) { setStatus('Procesando…'); return false; }
 *   setStatus('Listo');
 * });
 * ```
 */
export function fire<BData = Record<string, unknown>>(
  channel: string,
  data: object = {},
  callback: WeeiiFireCallback<BData>,
  options?: { flattenOutgoing?: boolean },
): () => void {
  return getTransport().fire<BData>(
    { channel, data: data as Record<string, unknown> },
    (msg) => {
      const changes = classifyData(getStore(), msg.data as Record<string, unknown>);
      const enriched = buildMessage(msg, changes);
      if (enriched.isInterim) {
        // Interim messages always keep the handler alive — the user's callback
        // does not need to return false explicitly.
        callback(enriched);
        return false;
      }
      return callback(enriched);
    },
    { flattenOutgoing: options?.flattenOutgoing ?? true },
  );
}
