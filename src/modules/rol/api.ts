import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Rol } from './types.js';

export type { Rol } from './types.js';

export function roles(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ rol: Rol[] }>> {
  return request('rol', params);
}

export function rolSearch(
  params: { texto_busqueda: string; id_ultimo?: number; filas?: number },
): Promise<WeeiiIncomingMessage<{ rol: Rol[] }>> {
  return request('rol_search', params);
}

export function editarRol(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ rol: Rol }>> {
  return request('editar_rol', params);
}
