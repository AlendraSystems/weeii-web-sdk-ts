/**
 * Miembro (team member) domain APIs.
 *
 * Replaces: `modulos/equipos/miembro/miembro.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Miembro,
  MiembroQueryParams,
  MiembroSearchParams,
} from './types.js';

export type { Miembro } from './types.js';

export function miembroPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ miembro: Miembro }>> {
  return request('miembro_q_id', params);
}

export function miembroSearch(
  params: MiembroSearchParams,
): Promise<WeeiiIncomingMessage<{ miembro: Miembro[] }>> {
  return request('miembro_search', params);
}

export function miembroPorIdEquipo(
  params: { id_equipo: number } & MiembroQueryParams,
): Promise<WeeiiIncomingMessage<{ miembro: Miembro[] }>> {
  return request('miembro_q_id_equipo', params);
}

export function miembroPorIdAsignador(
  params: { id_asignador: number } & MiembroQueryParams,
): Promise<WeeiiIncomingMessage<{ miembro: Miembro[] }>> {
  return request('miembro_q_id_asignador', params);
}

export function registrarMiembro(
  params: { id_equipo: number; id_usuario: number },
): Promise<WeeiiIncomingMessage<{ miembro: Miembro }>> {
  return request('miembro_registrar', params);
}

export function eliminarMiembro(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('miembro_eliminar', params);
}
