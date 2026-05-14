/**
 * LinkPago domain APIs.
 *
 * Replaces: `modulos/pagos/link_pago/link_pago.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  LinkPago,
  LinkPagoQueryParams,
  LinkPagoSearchParams,
  LinkPagoGeoParams,
} from './types.js';

export type { LinkPago } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function linksPago(
  params: LinkPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago', params);
}

export function linkPagoSearch(
  params: LinkPagoSearchParams,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_search', params);
}

export function linkPagoPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago }>> {
  return request('link_pago_q_id', params);
}

export function linksPagoPorIdEmisor(
  params: { id_emisor: number } & LinkPagoQueryParams,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_id_emisor', params);
}

export function misLinksPago(
  params: LinkPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_mios', params);
}

export function linkPagoPorToken(
  params: { token: string },
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago }>> {
  return request('link_pago_q_token', params);
}

export function linksPagoSinCreacionLatLon(
  params: LinkPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_sin_creacion_lat_lon', params);
}

export function linksPagoCreacionLatLonCent(
  params: LinkPagoGeoParams & LinkPagoQueryParams,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_creacion_lat_lon_cent', params);
}

export function linksPagoCreacionLatLonDec(
  params: LinkPagoGeoParams & LinkPagoQueryParams,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_creacion_lat_lon_dec', params);
}

export function linksPagoSinCreacionMacAddress(
  params: LinkPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_sin_creacion_mac_address', params);
}

export function linksPagoCreacionMacAddress(
  params: { mac_address: string } & LinkPagoQueryParams,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_creacion_mac_address', params);
}

export function linksPagoAdmon(
  params: LinkPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_admon_p', params);
}

export function linksPagoPorEstatus(
  params: { id_estatus: number } & LinkPagoQueryParams,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago[] }>> {
  return request('link_pago_q_estatus', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function accederLinkPagoConToken(
  params: { token: string },
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago }>> {
  return request('link_pago_acceder_con_token', params);
}

export function registrarLinkPago(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago }>> {
  return request('link_pago_registrar', params);
}

export function editarLinkPago(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago }>> {
  return request('link_pago_editar', params);
}

export function pagarLinkPago(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ link_pago: LinkPago }>> {
  return request('link_pago_pagar', params);
}
