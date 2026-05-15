/**
 * TipoPago domain APIs.
 *
 * Replaces: `modulos/pagos/tipo_pago/tipo_pago.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { TipoPago, TipoPagoQueryParams, TipoPagoSearchParams } from './types.js';

export type { TipoPago } from './types.js';

export function tiposPago(
  params: TipoPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ tipo_pago: TipoPago[] }>> {
  return request('tipo_pago', params);
}

export function tipoPagoSearch(
  params: TipoPagoSearchParams,
): Promise<WeeiiIncomingMessage<{ tipo_pago: TipoPago[] }>> {
  return request('tipo_pago_search', params);
}

export function editarTipoPago(
  params: { id: number } & Partial<TipoPago>,
): Promise<WeeiiIncomingMessage<{ tipo_pago: TipoPago }>> {
  return request('tipo_pago_editar', params);
}
