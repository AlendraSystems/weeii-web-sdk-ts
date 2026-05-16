/**
 * configureWeeii — one-time SDK initialisation.
 *
 * Replaces:
 *   - `Weeii.config({ debug, modo_testing })`
 *   - `window.Servidor.set_mostrar_alerta(...)`
 *   - `window.Servidor.set_mostrar_mensaje(...)`
 *   - `window.Servidor.set_al_recibir_fallo(...)`
 *
 * Must be called before any domain API function is invoked.
 */
import { initTransport } from './transport.js';
import { initStore } from './store.js';

// ─────────────────────────────────────────────────────────────────────────────

export type WeeiiEnv = 'production' | 'staging' | 'testing' | 'development';

export interface WeeiiConfig {
  /** WebSocket server URL, e.g. `wss://api.weeii.app:7443/websocket`. */
  url: string;

  /** Runtime environment — affects logging verbosity. */
  env?: WeeiiEnv;

  /** Enable verbose SDK logging. Default: false. */
  debug?: boolean;

  /**
   * Called when the server sends a response with type ALERTA.
   * Show to user as an informational notification.
   */
  onAlert?: (description: string) => void;

  /**
   * Called when the server sends a response with type MENSAJE.
   * Show to user as an informational notification.
   */
  onMessage?: (description: string) => void;

  /**
   * Called when the server sends an error response with no active handler,
   * i.e. a broadcast error or a message with no matching caller.
   */
  onError?: (description: string) => void;
}

// Internal — stored for use by domain modules or the React provider.
let _config: Required<WeeiiConfig> | null = null;

export function configureWeeii(config: WeeiiConfig): void {
  if (_config !== null) {
    return; // idempotent — subsequent calls are no-ops
  }

  _config = {
    url:       config.url,
    env:       config.env       ?? 'production',
    debug:     config.debug     ?? false,
    onAlert:   config.onAlert   ?? ((_d) => {}),
    onMessage: config.onMessage ?? ((_d) => {}),
    onError:   config.onError   ?? ((_d) => {}),
  };

  initStore();
  initTransport(config.url);
}

export function getConfig(): Required<WeeiiConfig> {
  if (_config === null) {
    throw new Error('[weeii/sdk] SDK not configured. Call configureWeeii() first.');
  }
  return _config;
}

/** Exposed for testing only — resets all singletons. */
export function _resetConfig(): void {
  _config = null;
}
