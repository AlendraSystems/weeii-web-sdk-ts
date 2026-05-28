/**
 * UVE (Validación de Email) domain APIs.
 *
 * Replaces: `modulos/usuarios/uve/uve.js`
 */
import { request, fire } from '../../api.js';
import type { WeeiiIncomingMessage, WeeiiFireCallback } from '../../api.js';
import type { Uve, UveSearchParams } from './types.js';

export type { Uve } from './types.js';

export function solicitarValidacionEmail(
  params: { email: string },
  callback: WeeiiFireCallback,
): () => void {
  return fire('uve_solicitar_validacion_email', params, callback);
}

export function uveSearch(
  params: UveSearchParams,
): Promise<WeeiiIncomingMessage<{ uve: Uve[] }>> {
  return request('uve_search', params);
}

export function validarEmail(
  params: { token: string },
  callback: WeeiiFireCallback,
): () => void {
  return fire('uve_validar_email', params, callback);
}
