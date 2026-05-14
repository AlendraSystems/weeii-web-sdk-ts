import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Producto, ProductoQueryParams, ProductoSearchParams } from './types.js';

export type { Producto } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function productos(
  params: ProductoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto', params);
}

export function productoSearch(
  params: ProductoSearchParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_search', params);
}

export function productoSearchCatalogo(
  params: ProductoSearchParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_search_catalogo', params);
}

export function productoPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ producto: Producto }>> {
  return request('producto_q_id', params);
}

export function productosPorIdUsuario(
  params: { id_usuario: number } & ProductoQueryParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_usuario', params);
}

export function productosPorIdNegocio(
  params: { id_negocio: number } & ProductoQueryParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_negocio', params);
}

export function productosPorIdCategoria(
  params: { id_categoria: number } & ProductoQueryParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_categoria', params);
}

export function productosAutorizados(
  params: ProductoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_autorizado', params);
}

export function productosPermitidos(
  params: ProductoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_permitido', params);
}

export function productosCatalogo(
  params: ProductoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_catalogo', params);
}

export function productosCatalogoPorIdUsuario(
  params: { id_usuario: number } & ProductoQueryParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_usuario_catalogo', params);
}

export function productosCatalogoPorIdNegocio(
  params: { id_negocio: number } & ProductoQueryParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_negocio_catalogo', params);
}

export function productosCatalogoPorIdCategoria(
  params: { id_categoria: number } & ProductoQueryParams,
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_categoria_catalogo', params);
}

export function productosDeMiNegocio(
  params: ProductoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ producto: Producto[] }>> {
  return request('producto_q_id_negocio_mio', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

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

export function sortPromoverIdNegocio(
  params: { id_negocio: number; ids_ordenados: number[] },
): Promise<WeeiiIncomingMessage> {
  return request('producto_id_negocio_catalogo_sort_promover', params);
}

export function sortPromoverIdCategoria(
  params: { id_categoria: number; ids_ordenados: number[] },
): Promise<WeeiiIncomingMessage> {
  return request('producto_id_categoria_catalogo_sort_promover', params);
}
