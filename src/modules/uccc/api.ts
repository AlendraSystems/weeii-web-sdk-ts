/**
 * UCCC (Cambio de Clave) domain APIs.
 *
 * Replaces: `modulos/usuarios/uccc/uccc.js`
 */
import { request, fire } from '../../api.js';
import type { WeeiiIncomingMessage, WeeiiFireCallback } from '../../api.js';
import type { Uccc, UcccSearchParams } from './types.js';

export type { Uccc } from './types.js';

export function solicitarCambioClave(
  params: { email: string },
  callback: WeeiiFireCallback,
): () => void {
  return fire('uccc_solicitar_cambio_clave', params, callback);
}

export function ucccSearch(
  params: UcccSearchParams,
): Promise<WeeiiIncomingMessage<{ uccc: Uccc[] }>> {
  return request('uccc_search', params);
}

export function cambiarClave(
  params: { token: string; clave1: string; clave2: string },
  callback: WeeiiFireCallback,
): () => void {
  return fire('uccc_cambiar_clave', params, callback);
}
