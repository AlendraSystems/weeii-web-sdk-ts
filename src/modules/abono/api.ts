/**
 * Abono domain APIs.
 *
 * Replaces: `modulos/pagos/abono/abono.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Abono, AbonoQueryParams, AbonoSearchParams } from './types.js';

export type { Abono } from './types.js';

export function abonos(
  params: AbonoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ abono: Abono[] }>> {
  return request('abono', params);
}

export function abonoSearch(
  params: AbonoSearchParams,
): Promise<WeeiiIncomingMessage<{ abono: Abono[] }>> {
  return request('abono_search', params);
}

export function abonoQId(
  params: { id: number } & AbonoQueryParams,
): Promise<WeeiiIncomingMessage<{ abono: Abono }>> {
  return request('abono_q_id', params);
}

export function abonoQIdUsuario(
  params: { id_usuario: number } & AbonoQueryParams,
): Promise<WeeiiIncomingMessage<{ abono: Abono[] }>> {
  return request('abono_q_id_usuario', params);
}

export function abonoQIdResponsable(
  params: { id_responsable: number } & AbonoQueryParams,
): Promise<WeeiiIncomingMessage<{ abono: Abono[] }>> {
  return request('abono_q_id_responsable', params);
}

export function misAbonos(
  params: AbonoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ abono: Abono[] }>> {
  return request('abono_q_mios', params);
}

export function editarAbono(
  params: { id: number } & Partial<Abono>,
): Promise<WeeiiIncomingMessage<{ abono: Abono }>> {
  return request('abono_editar', params);
}
