import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Cliente } from './types.js';

export type { Cliente } from './types.js';

export function clienteMio(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ cliente: Cliente }>> {
  return request('cliente_mio', params);
}

export function clientePorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ cliente: Cliente }>> {
  return request('cliente_q_id', params);
}

export function clientePorIdUsuario(
  params: { id_usuario: number },
): Promise<WeeiiIncomingMessage<{ cliente: Cliente }>> {
  return request('cliente_q_id_usuario', params);
}

export function clienteSearch(
  params: { texto_busqueda: string; id_ultimo?: number; filas?: number },
): Promise<WeeiiIncomingMessage<{ cliente: Cliente[] }>> {
  return request('cliente_search', params);
}

export function editarCliente(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ cliente: Cliente }>> {
  return request('cliente_editar', params);
}

export function actualizarUbicacionCliente(
  params: { id: number; latitud: number; longitud: number },
): Promise<WeeiiIncomingMessage> {
  return request('cliente_actualizar_ubicacion', params);
}
