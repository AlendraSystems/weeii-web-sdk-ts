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
  NegocioGeoParams,
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

export function negocioSearchCatalogoCercanos(
  params: NegocioGeoParams & NegocioSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_search_catalogo_cercanos', params);
}

export function miNegocio(
  params: { id_usuario: number } & NegocioQueryParams,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_q_id_usuario', params);
}

export function negocioPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_q_id', params);
}

export function negociosAutorizados(
  params: { estatus: boolean } & NegocioQueryParams,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_q_autorizado', params);
}

export function negociosAbiertos(
  params: NegocioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_q_abierto', params);
}

export function negociosCatalogo(
  params: NegocioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_q_catalogo', params);
}

export function negociosCatalogoCercanos(
  params: NegocioGeoParams & NegocioQueryParams,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio[] }>> {
  return request('negocio_q_catalogo_cercanos', params);
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

export function catalogoSortPromover(
  params: { id_negocio: number; direccion: boolean },
): Promise<WeeiiIncomingMessage> {
  return request('negocio_catalogo_sort_promover', params);
}

export function personalizarPromo(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ negocio: Negocio }>> {
  return request('negocio_personalizar_promo', params);
}
