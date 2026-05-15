/**
 * UCCC (Cambio de Clave) domain APIs.
 *
 * Replaces: `modulos/usuarios/uccc/uccc.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Uccc, UcccSearchParams } from './types.js';

export type { Uccc } from './types.js';

export function solicitarCambioClave(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('uccc_solicitar_cambio_clave', params);
}

export function ucccSearch(
  params: UcccSearchParams,
): Promise<WeeiiIncomingMessage<{ uccc: Uccc[] }>> {
  return request('uccc_search', params);
}

export function cambiarClave(
  params: { token: string; nueva_clave: string },
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('uccc_cambiar_clave', params);
}
