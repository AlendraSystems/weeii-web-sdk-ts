/**
 * UVT (Validación de Teléfono) domain APIs.
 *
 * Replaces: `modulos/usuarios/uvt/uvt.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Uvt, UvtSearchParams } from './types.js';

export type { Uvt } from './types.js';

export function solicitarValidacionTelefono(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('usuario_solicitar_validacion_telefono', params);
}

export function uvtSearch(
  params: UvtSearchParams,
): Promise<WeeiiIncomingMessage<{ uvt: Uvt[] }>> {
  return request('uvt_search', params);
}

export function validarTelefono(
  params: { token: string },
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('usuario_validar_telefono', params);
}
