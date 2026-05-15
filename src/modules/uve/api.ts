/**
 * UVE (Validación de Email) domain APIs.
 *
 * Replaces: `modulos/usuarios/uve/uve.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Uve, UveSearchParams } from './types.js';

export type { Uve } from './types.js';

export function solicitarValidacionEmail(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('uve_solicitar_validacion_email', params);
}

export function uveSearch(
  params: UveSearchParams,
): Promise<WeeiiIncomingMessage<{ uve: Uve[] }>> {
  return request('uve_search', params);
}

export function validarEmail(
  params: { token: string },
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('uve_validar_email', params);
}
