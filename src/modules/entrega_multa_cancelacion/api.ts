/**
 * EntregaMultaCancelacion domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_multa_cancelacion/entrega_multa_cancelacion.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaMultaCancelacion,
  EntregaMultaCancelacionQueryParams,
  EntregaMultaCancelacionSearchParams,
} from './types.js';

export type { EntregaMultaCancelacion } from './types.js';

export function entregaMultaCancelacionTodas(
  params: EntregaMultaCancelacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_multa_cancelacion: EntregaMultaCancelacion[] }>> {
  return request('entrega_multa_cancelacion', params);
}

export function entregaMultaCancelacionSearch(
  params: EntregaMultaCancelacionSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_multa_cancelacion: EntregaMultaCancelacion[] }>> {
  return request('entrega_multa_cancelacion_search', params);
}

export function entregaMultaCancelacionQId(
  params: { id: number } & EntregaMultaCancelacionQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_multa_cancelacion: EntregaMultaCancelacion }>> {
  return request('entrega_multa_cancelacion_q_id', params);
}

export function misMultasCancelacion(
  params: EntregaMultaCancelacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_multa_cancelacion: EntregaMultaCancelacion[] }>> {
  return request('entrega_multa_cancelacion_mis_multas', params);
}

export function editarParamsMultaCancelacion(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega_multa_cancelacion: EntregaMultaCancelacion }>> {
  return request('entrega_multa_cancelacion_edit_parms', params);
}
