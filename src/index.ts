// @weeii/sdk — Public API
//
// Domain module APIs are available via subpath imports:
//   import { iniciarSesionConTelefono } from '@weeii/sdk/sesion'
//   import { usuario }                  from '@weeii/sdk/usuario'
//   import { useWeeiiRecord }           from '@weeii/sdk/react'
//
// This root entry re-exports the setup function, bootstrap helpers, and
// shared primitives.

export { configureWeeii }                               from './config.js';
export { conectarYResumir }                             from './connect.js';
export { getStore }                                     from './store.js';
export { getTransport }                                 from './transport.js';
export { weeiiSchema }                                  from './schema.js';
export { WEEII_PROTOCOL }                               from './protocol.js';
export {
  saveSessionToken,
  loadSessionToken,
  savePushToken,
  loadPushToken,
  clearSession,
  clearAll,
} from './session-storage.js';

export type { WeeiiConfig, WeeiiEnv }                   from './config.js';
export type { ConectarYResumir }                        from './connect.js';
export type { WeeiiRecord, WeeiiResponse, WeeiiError, Id, Timestamp } from './types.js';
export type { WeeiiIncomingMessage }                    from './api.js';
