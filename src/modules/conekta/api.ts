/**
 * Conekta payment gateway domain APIs.
 *
 * Replaces: `modulos/pagos/conekta/conekta.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Conekta,
  ConektaQueryParams,
  ConektaSearchParams,
} from './types.js';

export type { Conekta } from './types.js';

export function conektas(
  params: ConektaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ conekta: Conekta[] }>> {
  return request('conekta', params);
}

export function conektaSearch(
  params: ConektaSearchParams,
): Promise<WeeiiIncomingMessage<{ conekta: Conekta[] }>> {
  return request('conekta_search', params);
}

export function conektaPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ conekta: Conekta }>> {
  return request('conekta_q_id', params);
}

export function conektaPorEstatus(
  params: { id_estatus: number } & ConektaQueryParams,
): Promise<WeeiiIncomingMessage<{ conekta: Conekta[] }>> {
  return request('conekta_q_estatus', params);
}

export function conektaPorIdUsuario(
  params: { id_usuario: number } & ConektaQueryParams,
): Promise<WeeiiIncomingMessage<{ conekta: Conekta[] }>> {
  return request('conekta_q_id_usuario', params);
}

export function misConektas(
  params: ConektaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ conekta: Conekta[] }>> {
  return request('conekta_mios', params);
}

export function conektaNuevoTokenVacio(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ conekta: Conekta }>> {
  return request('conekta_nuevo_token_vacio', params);
}

export function conektaTokenizar(
  params: { id: number; token: string },
): Promise<WeeiiIncomingMessage<{ conekta: Conekta }>> {
  return request('conekta_tokenizar', params);
}

export function guardarConekta(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ conekta: Conekta }>> {
  return request('conekta_guardar', params);
}

export function eliminarConekta(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('conekta_eliminar', params);
}

export function conektaListarTarjetas(
  params: { id_usuario?: number } & ConektaQueryParams,
): Promise<WeeiiIncomingMessage<{ conekta: Conekta[] }>> {
  return request('conekta_listar_tarjetas', params);
}
