import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Ubicacion } from './types.js';

export type { Ubicacion } from './types.js';

export function ubicaciones(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion', params);
}

export function misUbicaciones(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_id_usuario', params);
}

export function ubicacionSearch(
  params: { texto_busqueda: string; id_ultimo?: number; filas?: number },
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_search', params);
}

export function registrarUbicacion(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_registrar', params);
}

export function editarUbicacion(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_editar', params);
}

export function eliminarUbicacion(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('ubicacion_eliminar', params);
}
