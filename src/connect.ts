/**
 * App bootstrap — connects to the server and optionally resumes an existing
 * session from localStorage.
 *
 * Replaces: `Weeii.conectar_y_tal_vez_resumir_sesion()` from main.js
 *
 * Usage:
 * ```ts
 * await conectarYResumir({
 *   onConnected:  () => setConexion('CONECTADO'),
 *   onNoSession:  () => setAuth('SIN_SESION'),
 *   onSession:    (msg) => { window.UsuarioActual = msg.data.sesion; },
 *   onFailed:     () => setAuth('SIN_SESION'),
 * });
 * ```
 */
import { getTransport } from './transport.js';
import { getConfig } from './config.js';
import { resumirSesion } from './modules/sesion/api.js';
import { loadSessionToken, loadPushToken } from './session-storage.js';
import type { WeeiiIncomingMessage } from './api.js';
import type { Sesion } from './modules/sesion/types.js';

// ─────────────────────────────────────────────────────────────────────────────

export interface ConectarYResumir {
  /**
   * Called as soon as the WebSocket opens, before any session resumption.
   * Return `false` to abort the session-resume step.
   */
  onConnected?: () => boolean | void;

  /**
   * Called when there is no stored token — nothing to resume.
   */
  onNoSession?: () => void;

  /**
   * Called when the server accepted the session resume.
   */
  onSession?: (msg: WeeiiIncomingMessage<{ sesion: Sesion }>) => void;

  /**
   * Called when the server rejected the token (expired / invalid).
   */
  onFailed?: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Server-push handler
//
// Subscribes to unmatched messages (i.e. server-initiated pushes with no
// pending request handler) and routes them to the WeeiiConfig callbacks.
// Called once per app lifetime from conectarYResumir().
// ─────────────────────────────────────────────────────────────────────────────

let _pushHandlerRegistered = false;

function registerPushHandler(): void {
  if (_pushHandlerRegistered) return;
  _pushHandlerRegistered = true;

  const transport = getTransport();

  transport.on('message:unhandled', (msg) => {
    const config = getConfig();
    const code = (msg.code ?? '').toUpperCase();

    if (code === 'ALERTA') {
      config.onAlert(msg.description ?? '');
    } else if (code === 'MENSAJE') {
      config.onMessage(msg.description ?? '');
    } else if (code === 'ERROR' || code === 'NO_AUTORIZADO' || code === 'NO_ENCONTRADO' || code === 'CONFLICTO') {
      config.onError(msg.description ?? '');
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────

export function conectarYResumir(callbacks: ConectarYResumir = {}): void {
  const transport = getTransport();

  // Wire server-push callbacks (idempotent).
  registerPushHandler();

  // Listen for the first open event, then perform session resumption.
  const off = transport.once('connected', async () => {
    off(); // remove listener regardless of outcome

    // Let the caller know we're connected; they may abort the rest.
    if (callbacks.onConnected?.() === false) return;

    const token      = loadSessionToken();
    const token_push = loadPushToken();

    if (!token) {
      callbacks.onNoSession?.();
      return;
    }

    try {
      const params = token_push ? { token, token_push } : { token };
      const msg = await resumirSesion(params);
      callbacks.onSession?.(msg);
    } catch {
      callbacks.onFailed?.();
    }
  });

  // Kick off the connection (idempotent if already open).
  transport.connect();
}

/** Exposed for testing only — resets the push-handler registration flag. */
export function _resetConnect(): void {
  _pushHandlerRegistered = false;
}

