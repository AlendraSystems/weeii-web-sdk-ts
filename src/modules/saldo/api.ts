/**
 * Saldo (legacy payment method) domain APIs.
 *
 * Replaces: `modulos/pagos/saldo/saldo.js`
 * Note: distinct from `saldo_usuario` (wallet balance).
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  SaldoPago,
  SaldoPagoQueryParams,
  SaldoPagoSearchParams,
} from './types.js';

export type { SaldoPago } from './types.js';

export function saldoPagos(
  params: SaldoPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ saldo: SaldoPago[] }>> {
  return request('saldo', params);
}

export function saldoPagoSearch(
  params: SaldoPagoSearchParams,
): Promise<WeeiiIncomingMessage<{ saldo: SaldoPago[] }>> {
  return request('saldo_search', params);
}

export function saldoPagoPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ saldo: SaldoPago }>> {
  return request('saldo_q_id', params);
}

export function saldoPagoPorEstatus(
  params: { estatus: number } & SaldoPagoQueryParams,
): Promise<WeeiiIncomingMessage<{ saldo: SaldoPago[] }>> {
  return request('saldo_q_estatus', params);
}

export function misPagosSaldo(
  params: SaldoPagoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ saldo: SaldoPago[] }>> {
  return request('saldo_mis_pagos', params);
}
