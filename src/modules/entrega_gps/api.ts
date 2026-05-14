/**
 * EntregaGps domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_gps/entrega_gps.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { EntregaGps, EntregaGpsQueryParams, EntregaGpsSearchParams } from './types.js';

export type { EntregaGps } from './types.js';

export function ultimoPuntoEntrega(
  params: { id_entrega?: number } = {},
): Promise<WeeiiIncomingMessage<{ entrega_gps: EntregaGps[] }>> {
  return request('entrega_gps_ultimo_punto_entrega', params);
}

export function entregaGpsSearch(
  params: EntregaGpsSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_gps: EntregaGps[] }>> {
  return request('entrega_gps_search', params);
}

export function puntosGpsPorIdEntrega(
  params: { id_entrega: number } & EntregaGpsQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_gps: EntregaGps[] }>> {
  return request('entrega_gps_q_id_entrega', params);
}

export function puntosGpsPorIdEntregaIdUsuario(
  params: { id_entrega: number; id_usuario: number } & EntregaGpsQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_gps: EntregaGps[] }>> {
  return request('entrega_gps_q_id_entrega_id_usuario', params);
}

export function registrarNuevoPunto(
  params: { latitud: number; longitud: number; id_entrega?: number },
): Promise<WeeiiIncomingMessage<{ entrega_gps: EntregaGps }>> {
  return request('entrega_gps_registrar_nuevo_punto', params);
}
