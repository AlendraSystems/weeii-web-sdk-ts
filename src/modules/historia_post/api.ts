/**
 * HistoriaPost domain APIs.
 *
 * Replaces: `modulos/historias/historia_post/historia_post.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { HistoriaPost, HistoriaPostQueryParams } from './types.js';

export type { HistoriaPost } from './types.js';

export function historiasPosts(
  params: HistoriaPostQueryParams,
): Promise<WeeiiIncomingMessage<{ historia_post: HistoriaPost[] }>> {
  return request('historia_post', params);
}

export function historiaPostPublicoGeneral(
  params: HistoriaPostQueryParams,
): Promise<WeeiiIncomingMessage<{ historia_post: HistoriaPost[] }>> {
  return request('historia_post_publico_general', params);
}

export function registrarHistoriaPost(
  params: { id_historia: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ historia_post: HistoriaPost }>> {
  return request('historia_post_registrar', params);
}

export function eliminarHistoriaPost(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('historia_post_eliminar', params);
}

export function publicarHistoriaPost(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ historia_post: HistoriaPost }>> {
  return request('historia_post_publicar', params);
}

export function likeHistoriaPost(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('historia_post_like', params);
}

export function vistoHistoriaPost(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('historia_post_visto', params);
}
