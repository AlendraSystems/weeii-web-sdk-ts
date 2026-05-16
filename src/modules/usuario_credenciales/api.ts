/**
 * UsuarioCredenciales domain APIs.
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  UsuarioCredenciales,
  CambiarClaveParams,
  UsuarioCredencialesSearchParams,
} from './types.js';

export type { UsuarioCredenciales } from './types.js';

export function cambiarMiClave(
  params: CambiarClaveParams,
): Promise<WeeiiIncomingMessage> {
  return request('usuario_credenciales_cambiar_mi_clave', params);
}

export function usuarioCredencialesSearch(
  params: UsuarioCredencialesSearchParams,
): Promise<WeeiiIncomingMessage<{ usuario_credenciales: UsuarioCredenciales[] }>> {
  return request('usuario_credenciales_search', params);
}
