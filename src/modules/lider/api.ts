/**
 * Lider (team leader) domain APIs.
 *
 * Replaces: `modulos/equipos/lider/lider.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Lider,
  LiderQueryParams,
  LiderSearchParams,
} from './types.js';

export type { Lider } from './types.js';

export function liderPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ lider: Lider }>> {
  return request('lider_q_id', params);
}

export function liderSearch(
  params: LiderSearchParams,
): Promise<WeeiiIncomingMessage<{ lider: Lider[] }>> {
  return request('lider_search', params);
}

export function liderPorIdEquipo(
  params: { id_equipo: number } & LiderQueryParams,
): Promise<WeeiiIncomingMessage<{ lider: Lider[] }>> {
  return request('lider_q_id_equipo', params);
}

export function liderPorIdAsignador(
  params: { id_asignador: number } & LiderQueryParams,
): Promise<WeeiiIncomingMessage<{ lider: Lider[] }>> {
  return request('lider_q_id_asignador', params);
}

export function registrarLider(
  params: { id_equipo: number; id_usuario: number },
): Promise<WeeiiIncomingMessage<{ lider: Lider }>> {
  return request('lider_registrar', params);
}

export function eliminarLider(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('lider_eliminar', params);
}
