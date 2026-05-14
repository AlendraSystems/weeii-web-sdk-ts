/**
 * Entrega domain APIs.
 *
 * Replaces: `modulos/entregas/entrega/entrega.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Entrega,
  EntregaQueryParams,
  EntregaSearchParams,
} from './types.js';

export type { Entrega } from './types.js';

// ── Query ───────────────────────────────────────────────────────────────────

export function entregas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega', params);
}

export function entregaSearch(
  params: EntregaSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_search', params);
}

export function misEntregas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_mis_entregas', params);
}

export function misEncargos(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_mis_encargos', params);
}

export function entregaPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_q_id', params);
}

// ── Status transitions ───────────────────────────────────────────────────────

export function registrarEntrega(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_registrar', params);
}

export function aceptarEntrega(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_aceptada', params);
}

export function cancelarEntrega(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_cancelada', params);
}

export function eliminarEntrega(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('eliminar_entrega', params);
}

export function calificarEntrega(
  params: { id: number; calificacion: number; comentario?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_calificar', params);
}
