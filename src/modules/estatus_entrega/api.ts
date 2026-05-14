/**
 * EstatusEntrega domain APIs.
 *
 * Replaces: `modulos/entregas/estatus_entrega/estatus_entrega.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EstatusEntrega,
  EstatusEntregaQueryParams,
  EstatusEntregaSearchParams,
} from './types.js';

export type { EstatusEntrega } from './types.js';

export function estatusEntregaTodos(
  params: EstatusEntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ estatus_entrega: EstatusEntrega[] }>> {
  return request('estatus_entrega', params);
}

export function estatusEntregaSearch(
  params: EstatusEntregaSearchParams,
): Promise<WeeiiIncomingMessage<{ estatus_entrega: EstatusEntrega[] }>> {
  return request('estatus_entrega_search', params);
}

export function editarEstatusEntrega(
  params: { id: number } & Partial<EstatusEntrega>,
): Promise<WeeiiIncomingMessage<{ estatus_entrega: EstatusEntrega }>> {
  return request('estatus_entrega_editar', params);
}
