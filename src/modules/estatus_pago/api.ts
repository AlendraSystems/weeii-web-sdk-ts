/**
 * EstatusPago domain APIs.
 *
 * Replaces: `modulos/pagos/estatus_pago/estatus_pago.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { EstatusPago, EstatusPagoQueryParams, EstatusPagoSearchParams } from './types.js';

export type { EstatusPago } from './types.js';

export function estatusPagoTodos(
  params: EstatusPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ estatus_pago: EstatusPago[] }>> {
  return request('estatus_pago', params);
}

export function estatusPagoSearch(
  params: EstatusPagoSearchParams,
): Promise<WeeiiIncomingMessage<{ estatus_pago: EstatusPago[] }>> {
  return request('estatus_pago_search', params);
}

export function editarEstatusPago(
  params: { id: number } & Partial<EstatusPago>,
): Promise<WeeiiIncomingMessage<{ estatus_pago: EstatusPago }>> {
  return request('estatus_pago_editar', params);
}
