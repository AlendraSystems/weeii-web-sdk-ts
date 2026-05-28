import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Id } from '../../types.js';
import type { EstatusOrden, EstatusOrdenQueryParams, EstatusOrdenSearchParams } from './types.js';

export type { EstatusOrden } from './types.js';

export function estatusOrdenes(
  params: EstatusOrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ estatus_orden: EstatusOrden[] }>> {
  return request('estatus_orden', params);
}

export function estatusOrdenSearch(
  params: EstatusOrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ estatus_orden: EstatusOrden[] }>> {
  return request('estatus_orden_search', params);
}

export function editarEstatusOrden(
  params: { id: Id; campo: string; valor: string },
): Promise<WeeiiIncomingMessage<{ estatus_orden: EstatusOrden }>> {
  return request('estatus_orden_editar', params);
}
