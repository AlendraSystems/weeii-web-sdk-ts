/**
 * Movimiento domain APIs.
 *
 * Replaces: `modulos/pagos/movimiento/movimiento.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Movimiento, MovimientoQueryParams, MovimientoSearchParams } from './types.js';

export type { Movimiento } from './types.js';

export function movimientos(
  params: MovimientoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento', params);
}

export function movimientoSearch(
  params: MovimientoSearchParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_search', params);
}

export function movimientoQId(
  params: { id: number } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento }>> {
  return request('movimiento_q_id', params);
}

export function movimientoQIdUsuario(
  params: { id_usuario: number } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_id_usuario', params);
}

export function movimientoQIdUsuarioInOut(
  params: { id_usuario: number; in_out: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_id_usuario_in_out', params);
}

export function movimientoQIdUsuarioFavorOContra(
  params: { id_usuario: number; favor_o_contra: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_id_usuario_favor_o_contra', params);
}

export function movimientoQIdUsuarioInOutFavorOContra(
  params: { id_usuario: number; in_out: boolean; favor_o_contra: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_id_usuario_in_out_favor_o_contra', params);
}

export function movimientoQOidRelacionado(
  params: { ie_relacionado: string; id_relacionado: number } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_oid_relacionado', params);
}

export function movimientoQInOut(
  params: { in_out: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_in_out', params);
}

export function movimientoQFavorOContra(
  params: { favor_o_contra: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_favor_o_contra', params);
}

export function movimientoQInOutFavorOContra(
  params: { in_out: boolean; favor_o_contra: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_in_out_favor_o_contra', params);
}

export function movimientoQOidRelacionadoInOut(
  params: { ie_relacionado: string; id_relacionado: number; in_out: boolean } & MovimientoQueryParams,
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_oid_relacionado_in_out', params);
}

export function misMovimientos(
  params: MovimientoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ movimiento: Movimiento[] }>> {
  return request('movimiento_q_mios', params);
}
