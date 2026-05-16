/**
 * Historia domain APIs.
 *
 * Replaces: `modulos/historias/historia/historia.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Historia,
  HistoriaQueryParams,
  HistoriaSearchParams,
} from './types.js';

export type { Historia } from './types.js';

export function historias(
  params: HistoriaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ historia: Historia[] }>> {
  return request('historia', params);
}

export function historiaSearch(
  params: HistoriaSearchParams,
): Promise<WeeiiIncomingMessage<{ historia: Historia[] }>> {
  return request('historia_search', params);
}

export function historiaPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ historia: Historia }>> {
  return request('historia_q_id', params);
}

export function historiasPublicoGeneral(
  params: HistoriaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ historia: Historia[] }>> {
  return request('historia_q_publico_general', params);
}

export function registrarHistoria(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ historia: Historia }>> {
  return request('historia_registrar', params);
}

export function editarHistoria(
  params: { id: number } & Partial<Pick<Historia, 'titulo' | 'descripcion' | 'imagen'>>,
): Promise<WeeiiIncomingMessage<{ historia: Historia }>> {
  return request('historia_editar', params);
}

export function eliminarHistoria(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('historia_eliminar', params);
}

export function publicarHistoria(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ historia: Historia }>> {
  return request('historia_publicar', params);
}

export function mostrarHistoria(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ historia: Historia }>> {
  return request('historia_mostrar', params);
}

export function historiaPublicoGeneralSortPromover(
  params: { id: number; ids_ordenados: number[] },
): Promise<WeeiiIncomingMessage> {
  return request('historia_publico_general_sort_promover', params);
}
