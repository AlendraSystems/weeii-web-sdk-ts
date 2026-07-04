/**
 * Requisito domain APIs.
 *
 * Replaces: `modulos/tramites/requisito/requisito.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Requisito,
  RequisitoQueryParams,
  RequisitoSearchParams,
} from './types.js';

export type { Requisito } from './types.js';

export function requisitoPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ requisito: Requisito }>> {
  return request('requisito_q_id', params);
}

export function requisitoSearch(
  params: RequisitoSearchParams,
): Promise<WeeiiIncomingMessage<{ requisito: Requisito[] }>> {
  return request('requisito_search', params);
}

export function requisitoPorIdTramite(
  params: { id_tramite: number } & RequisitoQueryParams,
): Promise<WeeiiIncomingMessage<{ requisito: Requisito[] }>> {
  return request('requisito_q_id_tramite', params);
}

export function requisitoPorFacultad(
  params: { facultad: string } & RequisitoQueryParams,
): Promise<WeeiiIncomingMessage<{ requisito: Requisito[] }>> {
  return request('requisito_q_facultad', params);
}

export function registrarRequisito(
  params: { id_tramite: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ requisito: Requisito }>> {
  return request('requisito_registrar', params);
}

export function editarRequisito(
  params: { id: number; campo: string; valor: unknown },
): Promise<WeeiiIncomingMessage<{ requisito: Requisito }>> {
  return request('requisito_editar', params);
}
