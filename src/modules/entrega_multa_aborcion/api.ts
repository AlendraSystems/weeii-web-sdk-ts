/**
 * EntregaMultaAborcion domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_multa_aborcion/entrega_multa_aborcion.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaMultaAborcion,
  EntregaMultaAborcionQueryParams,
  EntregaMultaAborcionSearchParams,
} from './types.js';

export type { EntregaMultaAborcion } from './types.js';

export function entregaMultaAborcionTodas(
  params: EntregaMultaAborcionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_multa_aborcion: EntregaMultaAborcion[] }>> {
  return request('entrega_multa_aborcion', params);
}

export function entregaMultaAborcionSearch(
  params: EntregaMultaAborcionSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_multa_aborcion: EntregaMultaAborcion[] }>> {
  return request('entrega_multa_aborcion_search', params);
}

export function misMultasAborcion(
  params: EntregaMultaAborcionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_multa_aborcion: EntregaMultaAborcion[] }>> {
  return request('entrega_multa_aborcion_mis_multas', params);
}

export function editarParamsMultaAborcion(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega_multa_aborcion: EntregaMultaAborcion }>> {
  return request('entrega_multa_aborcion_edit_parms', params);
}
