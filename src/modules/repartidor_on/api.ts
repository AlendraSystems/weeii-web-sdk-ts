/**
 * RepartidorOn domain APIs.
 *
 * Replaces: `modulos/repartidores/repartidor_on/repartidor_on.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  RepartidorOn,
  RepartidorOnQueryParams,
  RepartidorOnSearchParams,
  RepartidorOnGeoParams,
} from './types.js';

export type { RepartidorOn } from './types.js';

export function repartidoresOn(
  params: RepartidorOnQueryParams = {},
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn[] }>> {
  return request('repartidor_on', params);
}

export function repartidorOnSearch(
  params: RepartidorOnSearchParams,
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn[] }>> {
  return request('repartidor_on_search', params);
}

export function repartidorOnQLatLonDecDisponible(
  params: RepartidorOnGeoParams & RepartidorOnQueryParams,
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn[] }>> {
  return request('repartidor_on_q_lat_lon_dec_disponible', params);
}

export function repartidorOnQNDisponibles(
  params: RepartidorOnGeoParams & { filas?: number },
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn[] }>> {
  return request('repartidor_on_q_n_disponibles', params);
}

export function repartidorOnEspecifico(
  params: { id: number | number[] } & RepartidorOnQueryParams,
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_especifico', params);
}

export function repartidorOnQIdUsuario(
  params: { id_usuario: number } & RepartidorOnQueryParams,
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn[] }>> {
  return request('repartidor_on_q_id_usuario', params);
}

export function repartidorOnQIdEquipo(
  params: { id_equipo: number } & RepartidorOnQueryParams,
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn[] }>> {
  return request('repartidor_on_q_id_equipo', params);
}

export function repartidorOnEstadisticasWarRoom(
  params: RepartidorOnQueryParams = {},
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('repartidor_on_estadisticas_war_room', params);
}

export function miEstatusRepartidor(
  params: RepartidorOnQueryParams = {},
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_mi_estatus', params);
}

export function iniciarHorarioTrabajo(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_iniciar_horario_de_trabajo', params);
}

export function terminarHorarioTrabajo(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_terminar_horario_de_trabajo', params);
}

export function editarVisibleRepartidor(
  params: { visible: boolean },
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_editar_visible', params);
}

export function editarRepartidorOn(
  params: Partial<RepartidorOn>,
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_editar', params);
}

export function actualizarUbicacionRepartidor(
  params: { latitud: number; longitud: number },
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_actualizar_ubicacion', params);
}

export function actualizarUbicacionHacia(
  params: { latitud: number; longitud: number },
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_actualizar_ubicacion_hacia', params);
}

export function priorizarEntrega(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_priorizar_entrega', params);
}

export function priorizarEntregaEnCadena(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage<{ repartidor_on: RepartidorOn }>> {
  return request('repartidor_on_priorizar_entrega_en_cadena', params);
}
