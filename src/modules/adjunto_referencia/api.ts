/**
 * AdjuntoReferencia domain APIs.
 *
 * Replaces: `modulos/adjuntos/adjunto_referencia/adjunto_referencia.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { AdjuntoReferencia, AdjuntoReferenciaSearchParams } from './types.js';

export type { AdjuntoReferencia } from './types.js';

export function adjuntoReferenciaSearch(
  params: AdjuntoReferenciaSearchParams,
): Promise<WeeiiIncomingMessage<{ adjunto_referencia: AdjuntoReferencia[] }>> {
  return request('adjunto_referencia_search', params);
}
