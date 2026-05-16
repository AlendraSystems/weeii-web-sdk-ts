/**
 * TipoAdjunto domain APIs.
 *
 * Replaces: `modulos/adjuntos/tipo_adjunto/tipo_adjunto.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  TipoAdjunto,
  TipoAdjuntoQueryParams,
  TipoAdjuntoSearchParams,
  EditarTipoAdjuntoParams,
} from './types.js';

export type { TipoAdjunto } from './types.js';

export function tipoAdjunto(
  params: TipoAdjuntoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ tipo_adjunto: TipoAdjunto[] }>> {
  return request('tipo_adjunto', params);
}

export function tipoAdjuntoSearch(
  params: TipoAdjuntoSearchParams,
): Promise<WeeiiIncomingMessage<{ tipo_adjunto: TipoAdjunto[] }>> {
  return request('tipo_adjunto_search', params);
}

export function editarTipoAdjunto(
  params: EditarTipoAdjuntoParams,
): Promise<WeeiiIncomingMessage<{ tipo_adjunto: TipoAdjunto }>> {
  return request('tipo_adjunto_editar', params);
}
