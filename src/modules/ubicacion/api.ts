import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Ubicacion, UbicacionQueryParams, UbicacionSearchParams, UbicacionGeoParams } from './types.js';

export type { Ubicacion } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function ubicaciones(
  params: UbicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion', params);
}

export function ubicacionSearch(
  params: UbicacionSearchParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_search', params);
}

export function ubicacionPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_q_id', params);
}

export function misUbicaciones(
  params: UbicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_id_usuario', params);
}

export function misUbicacionesHistorial(
  params: UbicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_id_usuario_historial', params);
}

export function misUbicacionesGuardadas(
  params: UbicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_id_usuario_guardada', params);
}

export function ubicacionesPorIdUsuarioPorHistorial(
  params: { id_usuario: number } & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_id_usuario_historial', params);
}

export function ubicacionesGuardadas(
  params: UbicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_guardada', params);
}

export function ubicacionesHistorial(
  params: UbicacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_historial', params);
}

export function ubicacionesPorIdEntrega(
  params: { id_entrega: number } & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_id_entrega', params);
}

// ── Geo queries ───────────────────────────────────────────────────────────────

export function ubicacionesLatLonCent(
  params: UbicacionGeoParams & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_lat_lon_cent', params);
}

export function ubicacionesLatLonDec(
  params: UbicacionGeoParams & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_lat_lon_dec', params);
}

export function ubicacionesLatLonCentGuardadas(
  params: UbicacionGeoParams & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_lat_lon_cent_guardada', params);
}

export function ubicacionesLatLonCentHistorial(
  params: UbicacionGeoParams & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_lat_lon_cent_historial', params);
}

export function ubicacionesLatLonDecGuardadas(
  params: UbicacionGeoParams & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_lat_lon_dec_guardada', params);
}

export function ubicacionesLatLonDecHistorial(
  params: UbicacionGeoParams & UbicacionQueryParams,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion[] }>> {
  return request('ubicacion_q_lat_lon_dec_historial', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function registrarUbicacion(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_registrar', params);
}

export function registrarAdmonOrigenDestinoDefault(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_registrar_admon_origen_destino_default', params);
}

export function editarUbicacion(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_editar', params);
}

export function editarUbicacionFrm(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ ubicacion: Ubicacion }>> {
  return request('ubicacion_editar_frm', params);
}

export function eliminarUbicacion(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('ubicacion_eliminar', params);
}
