/**
 * Adjunto domain APIs.
 *
 * Replaces: `modulos/adjuntos/adjunto/adjunto.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Adjunto, AdjuntoSearchParams } from './types.js';

export type { Adjunto } from './types.js';

export function adjuntoSearch(
  params: AdjuntoSearchParams,
): Promise<WeeiiIncomingMessage<{ adjunto: Adjunto[] }>> {
  return request('adjunto_search', params);
}
