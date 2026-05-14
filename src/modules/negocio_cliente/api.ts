/**
 * NegocioCliente domain APIs.
 *
 * Replaces: `modulos/negocios/negocio_cliente/negocio_cliente.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  NegocioCliente,
  NegocioClienteQueryParams,
  NegocioClienteSearchParams,
} from './types.js';

export type { NegocioCliente } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function negocioClientes(
  params: NegocioClienteQueryParams = {},
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente', params);
}

export function negocioClienteSearch(
  params: NegocioClienteSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_search', params);
}

export function negocioClienteSearchIdNegocio(
  params: { id_negocio: number } & NegocioClienteSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_search_id_negocio', params);
}

export function negocioClienteSearchIdCliente(
  params: { id_cliente: number } & NegocioClienteSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_search_id_cliente', params);
}

export function negocioClienteSearchIdUsuario(
  params: { id_usuario: number } & NegocioClienteSearchParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_search_id_usuario', params);
}

export function negocioClientePorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente }>> {
  return request('negocio_cliente_q_id', params);
}

export function negocioClientesPorIdNegocio(
  params: { id_negocio: number } & NegocioClienteQueryParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_q_id_negocio', params);
}

export function negocioClientesPorIdCliente(
  params: { id_cliente: number } & NegocioClienteQueryParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_q_id_cliente', params);
}

export function negocioClientesPorIdUsuario(
  params: { id_usuario: number } & NegocioClienteQueryParams,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente[] }>> {
  return request('negocio_cliente_q_id_usuario', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function registrarNegocioCliente(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente }>> {
  return request('negocio_cliente_registrar', params);
}

export function editarNegocioCliente(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ negocio_cliente: NegocioCliente }>> {
  return request('negocio_cliente_editar', params);
}

export function eliminarNegocioCliente(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('negocio_cliente_eliminar', params);
}
