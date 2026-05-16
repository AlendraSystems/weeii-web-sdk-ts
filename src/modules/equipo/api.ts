/**
 * Equipo (team) domain APIs.
 *
 * Replaces: `modulos/equipos/equipo/equipo.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Equipo,
  EquipoQueryParams,
  EquipoSearchParams,
} from './types.js';

export type { Equipo } from './types.js';

export function equipos(
  params: EquipoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ equipo: Equipo[] }>> {
  return request('equipo', params);
}

export function equipoSearch(
  params: EquipoSearchParams,
): Promise<WeeiiIncomingMessage<{ equipo: Equipo[] }>> {
  return request('equipo_search', params);
}

export function equipoPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ equipo: Equipo }>> {
  return request('equipo_q_id', params);
}

export function miEquipo(
  params: EquipoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ equipo: Equipo }>> {
  return request('equipo_q_mio', params);
}

export function registrarEquipo(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ equipo: Equipo }>> {
  return request('equipo_registrar', params);
}

export function editarEquipo(
  params: { id: number } & Partial<Pick<Equipo, 'nombre' | 'descripcion' | 'activo'>>,
): Promise<WeeiiIncomingMessage<{ equipo: Equipo }>> {
  return request('equipo_editar', params);
}

export function tomarEquipo(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ equipo: Equipo }>> {
  return request('equipo_tomar', params);
}

export function soltarEquipo(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('equipo_soltar', params);
}
