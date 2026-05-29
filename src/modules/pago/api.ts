/**
 * Pago domain APIs.
 *
 * Replaces: `modulos/pagos/pago/pago.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Pago, PagoQueryParams, PagoSearchParams } from './types.js';

export type { Pago } from './types.js';

export function pagos(
  params: PagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago', params);
}

export function pagoSearch(
  params: PagoSearchParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago_search', params);
}

export function pagoQId(
  params: { id: number } & PagoQueryParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago }>> {
  return request('pago_q_id', params);
}

export function pagoQIdTipoPago(
  params: { id_tipo_pago: number } & PagoQueryParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago_q_id_tipo_pago', params);
}

export function pagoQOid(
  params: { ie_pago: string; id_pago: number } & PagoQueryParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago_q_oid_pago', params);
}

export function pagoQIdUsuario(
  params: { id_usuario: number } & PagoQueryParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago_q_id_usuario', params);
}

export function pagoQIdUsuarioUltimoMetodo(
  params: { id_usuario: number } & PagoQueryParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago }>> {
  return request('pago_q_id_usuario_ultimo_metodo', params);
}

export function pagoQOidRelacionado(
  params: { oid_relacionado: string } & PagoQueryParams,
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago_q_oid_relacionado', params);
}

export function misPagos(
  params: PagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ pago: Pago[] }>> {
  return request('pago_q_mios', params);
}
