/**
 * Tramite (procedure/workflow) domain APIs.
 *
 * Replaces: `modulos/tramites/tramite/tramite.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Tramite,
  TramiteQueryParams,
  TramiteSearchParams,
} from './types.js';

export type { Tramite } from './types.js';

export function tramites(
  params: TramiteQueryParams = {},
): Promise<WeeiiIncomingMessage<{ tramite: Tramite[] }>> {
  return request('tramite', params);
}

export function tramiteSearch(
  params: TramiteSearchParams,
): Promise<WeeiiIncomingMessage<{ tramite: Tramite[] }>> {
  return request('tramite_search', params);
}

export function tramitePorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ tramite: Tramite }>> {
  return request('tramite_q_id', params);
}

export function tramitePorFacultad(
  params: { facultad: string } & TramiteQueryParams,
): Promise<WeeiiIncomingMessage<{ tramite: Tramite[] }>> {
  return request('tramite_q_facultad', params);
}

export function registrarTramite(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ tramite: Tramite }>> {
  return request('tramite_registrar', params);
}

export function editarTramite(
  params: { id: number } & Partial<Pick<Tramite, 'nombre' | 'descripcion' | 'activo'>>,
): Promise<WeeiiIncomingMessage<{ tramite: Tramite }>> {
  return request('tramite_editar', params);
}
