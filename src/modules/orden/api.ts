import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Orden } from './types.js';

export type { Orden } from './types.js';

export function ordenes(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden', params);
}

export function misOrdenes(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_id_usuario', params);
}

export function ordenPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_q_id', params);
}

export function ordenSearch(
  params: { texto_busqueda: string; id_ultimo?: number; filas?: number },
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search', params);
}

export function registrarOrden(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_registrar', params);
}

export function editarOrden(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_editar', params);
}

export function cancelarOrden(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('orden_cancelar', params);
}

export function cerrarOrden(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_cerrar', params);
}
