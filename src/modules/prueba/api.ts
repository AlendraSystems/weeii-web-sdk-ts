/**
 * Prueba domain APIs.
 *
 * Replaces: `modulos/tramites/prueba/prueba.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Prueba,
  PruebaQueryParams,
  PruebaSearchParams,
} from './types.js';

export type { Prueba } from './types.js';

export function misPruebas(
  params: PruebaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ prueba: Prueba[] }>> {
  return request('prueba_mis_pruebas', params);
}

export function pruebaSearch(
  params: PruebaSearchParams,
): Promise<WeeiiIncomingMessage<{ prueba: Prueba[] }>> {
  return request('prueba_search', params);
}

export function pruebaPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ prueba: Prueba }>> {
  return request('prueba_q_id', params);
}

export function pruebaPorIdUsuario(
  params: { id_usuario: number } & PruebaQueryParams,
): Promise<WeeiiIncomingMessage<{ prueba: Prueba[] }>> {
  return request('prueba_q_id_usuario', params);
}

export function pruebaPorIdValidacion(
  params: { id_validacion: number } & PruebaQueryParams,
): Promise<WeeiiIncomingMessage<{ prueba: Prueba[] }>> {
  return request('prueba_q_id_validacion', params);
}

export function editarPrueba(
  params: { id: number; campo: string; valor: unknown },
): Promise<WeeiiIncomingMessage<{ prueba: Prueba }>> {
  return request('prueba_editar', params);
}

export function validarPrueba(
  params: { id_prueba: number; estatus: boolean },
): Promise<WeeiiIncomingMessage<{ prueba: Prueba }>> {
  return request('prueba_validar', params);
}
