/**
 * Categoria domain APIs.
 *
 * Replaces: `modulos/negocios/categoria/categoria.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Categoria, CategoriaQueryParams, CategoriaSearchParams } from './types.js';

export type { Categoria } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function categorias(
  params: CategoriaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria', params);
}

export function categoriaSearch(
  params: CategoriaSearchParams,
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria_search', params);
}

export function categoriaPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ categoria: Categoria }>> {
  return request('categoria_q_id', params);
}

export function categoriasPorIdUsuario(
  params: { id_usuario: number } & CategoriaQueryParams,
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria_q_id_usuario', params);
}

export function categoriasPorIdNegocio(
  params: { id_negocio: number } & CategoriaQueryParams,
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria_q_id_negocio', params);
}

export function categoriasCatalogoPorIdNegocio(
  params: { id_negocio: number } & CategoriaQueryParams,
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria_q_id_negocio_catalogo', params);
}

export function categoriasAutorizadas(
  params: CategoriaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria_q_autorizada', params);
}

export function categoriasPermitidas(
  params: CategoriaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ categoria: Categoria[] }>> {
  return request('categoria_q_permitida', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function registrarCategoria(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ categoria: Categoria }>> {
  return request('categoria_registrar', params);
}

export function editarCategoria(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ categoria: Categoria }>> {
  return request('categoria_editar', params);
}

export function eliminarCategoria(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('categoria_eliminar', params);
}

export function sortPromoverCategoriasNegocio(
  params: { id_categoria: number; direccion: boolean },
): Promise<WeeiiIncomingMessage> {
  return request('categoria_id_negocio_catalogo_sort_promover', params);
}
