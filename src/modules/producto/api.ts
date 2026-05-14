import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Producto } from './types.js';

export type { Producto } from './types.js';

export function productos(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto', params);
}

export function productoPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ producto: Producto }>> {
  return request('producto_q_id', params);
}

export function productoSearch(
  params: { texto_busqueda: string; id_ultimo?: number; filas?: number },
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_search', params);
}

export function productosDeMiNegocio(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_negocio_mio', params);
}

export function registrarProducto(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ producto: Producto }>> {
  return request('producto_registrar', params);
}

export function editarProducto(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ producto: Producto }>> {
  return request('producto_editar', params);
}

export function eliminarProducto(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('producto_eliminar', params);
}
