/**
 * Aplicacion domain APIs.
 *
 * Replaces: `modulos/aplicaciones/aplicacion/aplicacion.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Aplicacion,
  AplicacionQueryParams,
  AplicacionSearchParams,
} from './types.js';

export type { Aplicacion } from './types.js';

export function aplicaciones(
  params: AplicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ aplicacion: Aplicacion[] }>> {
  return request('aplicacion', params);
}

export function aplicacionSearch(
  params: AplicacionSearchParams,
): Promise<WeeiiIncomingMessage<{ aplicacion: Aplicacion[] }>> {
  return request('aplicacion_search', params);
}

export function registrarAplicacion(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ aplicacion: Aplicacion }>> {
  return request('aplicacion_registrar', params);
}

export function editarAplicacion(
  params: { id: number; campo: string; valor: unknown },
): Promise<WeeiiIncomingMessage<{ aplicacion: Aplicacion }>> {
  return request('aplicacion_editar', params);
}

export function aplicacionEditParms(
  params: { parms: Record<string, unknown> },
): Promise<WeeiiIncomingMessage<{ aplicacion: Aplicacion }>> {
  return request('aplicacion_edit_parms', params);
}
