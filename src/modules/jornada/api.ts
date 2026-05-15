/**
 * Jornada domain APIs.
 *
 * Replaces: `modulos/repartidores/jornada/jornada.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Jornada, JornadaQueryParams, JornadaSearchParams } from './types.js';

export type { Jornada } from './types.js';

export function jornadas(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada', params);
}

export function jornadaSearch(
  params: JornadaSearchParams,
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_search', params);
}

export function jornadaQId(
  params: { id: number } & JornadaQueryParams,
): Promise<WeeiiIncomingMessage<{ jornada: Jornada }>> {
  return request('jornada_q_id', params);
}

export function jornadaQIdUsuario(
  params: { id_usuario: number } & JornadaQueryParams,
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_id_usuario', params);
}

export function jornadaQVehiculoAPie(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_a_pie', params);
}

export function jornadaQVehiculoOtro(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_otro', params);
}

export function jornadaQVehiculoBici(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_bici', params);
}

export function jornadaQVehiculoScooter(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_scooter', params);
}

export function jornadaQVehiculoMoto(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_moto', params);
}

export function jornadaQVehiculoCoche(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_coche', params);
}

export function jornadaQVehiculoPickup(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_pickup', params);
}

export function jornadaQVehiculoVan(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_van', params);
}

export function jornadaQVehiculoTrailer(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_vehiculo_trailer', params);
}

export function jornadaQConclusa(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_conclusa', params);
}

export function jornadaQInconclusa(
  params: JornadaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ jornada: Jornada[] }>> {
  return request('jornada_q_inconclusa', params);
}
