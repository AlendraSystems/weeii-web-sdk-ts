/**
 * Efectivo domain APIs.
 *
 * Replaces: `modulos/pagos/efectivo/efectivo.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Efectivo,
  EfectivoQueryParams,
  EfectivoSearchParams,
} from './types.js';

export type { Efectivo } from './types.js';

export function efectivos(
  params: EfectivoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ efectivo: Efectivo[] }>> {
  return request('efectivo', params);
}

export function efectivoSearch(
  params: EfectivoSearchParams,
): Promise<WeeiiIncomingMessage<{ efectivo: Efectivo[] }>> {
  return request('efectivo_search', params);
}

export function efectivoPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ efectivo: Efectivo }>> {
  return request('efectivo_q_id', params);
}

export function efectivoPorEstatus(
  params: { id_estatus: number } & EfectivoQueryParams,
): Promise<WeeiiIncomingMessage<{ efectivo: Efectivo[] }>> {
  return request('efectivo_q_estatus', params);
}

export function misPagosEfectivo(
  params: EfectivoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ efectivo: Efectivo[] }>> {
  return request('efectivo_mis_pagos', params);
}
