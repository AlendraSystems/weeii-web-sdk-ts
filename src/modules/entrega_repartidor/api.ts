/**
 * EntregaRepartidor domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_repartidor/entrega_repartidor.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { EntregaRepartidor, EntregaRepartidorSearchParams } from './types.js';

export type { EntregaRepartidor } from './types.js';

export function entregaRepartidorSearch(
  params: EntregaRepartidorSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_repartidor: EntregaRepartidor[] }>> {
  return request('entrega_repartidor_search', params);
}
