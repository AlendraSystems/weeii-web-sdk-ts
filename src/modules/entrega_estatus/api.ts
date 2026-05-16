/**
 * EntregaEstatus domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_estatus/entrega_estatus.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaEstatus,
  EntregaEstatusQueryParams,
  EntregaEstatusSearchParams,
} from './types.js';

export type { EntregaEstatus } from './types.js';

export function entregaEstatusPorIdEntrega(
  params: EntregaEstatusQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_estatus: EntregaEstatus[] }>> {
  return request('entrega_estatus_q_id_entrega', params);
}

export function entregaEstatusSearch(
  params: EntregaEstatusSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_estatus: EntregaEstatus[] }>> {
  return request('entrega_estatus_search', params);
}
