/**
 * Concepto domain APIs.
 *
 * Replaces: `modulos/negocios/concepto/concepto.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Concepto, ConceptoQueryParams, ConceptoSearchParams } from './types.js';

export type { Concepto } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function conceptos(
  params: ConceptoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ concepto: Concepto[] }>> {
  return request('concepto', params);
}

export function conceptoSearch(
  params: ConceptoSearchParams,
): Promise<WeeiiIncomingMessage<{ concepto: Concepto[] }>> {
  return request('concepto_search', params);
}

export function conceptoPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ concepto: Concepto }>> {
  return request('concepto_q_id', params);
}

export function conceptosPorIdOrden(
  params: { id_orden: number } & ConceptoQueryParams,
): Promise<WeeiiIncomingMessage<{ concepto: Concepto[] }>> {
  return request('concepto_q_id_orden', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function registrarConcepto(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ concepto: Concepto }>> {
  return request('concepto_registrar', params);
}

export function editarConcepto(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ concepto: Concepto }>> {
  return request('concepto_editar', params);
}

export function eliminarConcepto(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('concepto_eliminar', params);
}
