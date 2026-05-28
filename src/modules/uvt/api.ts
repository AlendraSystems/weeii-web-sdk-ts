/**
 * UVT (Validación de Teléfono) domain APIs.
 *
 * Replaces: `modulos/usuarios/uvt/uvt.js`
 */
import { request, fire } from '../../api.js';
import type { WeeiiIncomingMessage, WeeiiFireCallback } from '../../api.js';
import type { Uvt, UvtSearchParams } from './types.js';

export type { Uvt } from './types.js';

export function solicitarValidacionTelefono(
  params: { telefono_codigo_pais: string; telefono_nacional: string },
  callback: WeeiiFireCallback,
): () => void {
  return fire('usuario_solicitar_validacion_telefono', params, callback);
}

export function uvtSearch(
  params: UvtSearchParams,
): Promise<WeeiiIncomingMessage<{ uvt: Uvt[] }>> {
  return request('uvt_search', params);
}

export function validarTelefono(
  params: { token: string },
  callback: WeeiiFireCallback,
): () => void {
  return fire('usuario_validar_telefono', params, callback);
}
