/**
 * Negocio domain APIs.
 *
 * Replaces: `modulos/negocios/negocio/negocio.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Negocio,
  NegocioQueryParams,
  NegocioSearchParams,
} from './types.js';

export type { Negocio } from './types.js';

// ── Query ───────────────────────────────────────────────────────────────────

export function negocios(
  params: NegocioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio', params);
}

export function negocioSearch(
  params: NegocioSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_search', params);
}

export function negocioSearchCatalogo(
  params: NegocioSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_search_catalogo', params);
}

export function miNegocio(
  params: NegocioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_q_id_usuario', params);
}

export function negocioPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_q_id', params);
}

// ── Mutations ───────────────────────────────────────────────────────────────

export function registrarNegocio(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_registrar', params);
}

export function editarNegocio(
  params: Partial<Pick<Negocio, 'nombre' | 'descripcion'>> & { id: number },
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_editar', params);
}
