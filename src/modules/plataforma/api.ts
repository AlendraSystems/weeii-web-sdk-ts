/**
 * Plataforma domain APIs.
 *
 * Replaces: `modulos/aplicaciones/plataforma/plataforma.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Plataforma,
  PlataformaQueryParams,
  PlataformaSearchParams,
} from './types.js';

export type { Plataforma } from './types.js';

export function plataformas(
  params: PlataformaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ plataforma: Plataforma[] }>> {
  return request('plataforma', params);
}

export function plataformaSearch(
  params: PlataformaSearchParams,
): Promise<WeeiiIncomingMessage<{ plataforma: Plataforma[] }>> {
  return request('plataforma_search', params);
}

export function editarPlataforma(
  params: { id: number } & Partial<Pick<Plataforma, 'nombre' | 'descripcion' | 'activo'>>,
): Promise<WeeiiIncomingMessage<{ plataforma: Plataforma }>> {
  return request('plataforma_editar', params);
}
