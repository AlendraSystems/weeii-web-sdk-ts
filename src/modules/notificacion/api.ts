import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Notificacion } from './types.js';

export type { Notificacion } from './types.js';

export function misNotificaciones(
  params: { id_ultimo?: number; filas?: number } = {},
): Promise<WeeiiIncomingMessage<{ notificacion: Notificacion[] }>> {
  return request('notificacion_q_mias', params);
}

export function marcarNotificacionVista(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('notificacion_vista', params);
}

export function marcarTodasVistas(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage> {
  return request('notificacion_todas_vistas', params);
}

export function eliminarNotificacion(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('notificacion_eliminar', params);
}
