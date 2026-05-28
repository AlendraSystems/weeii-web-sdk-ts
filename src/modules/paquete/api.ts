/**
 * Paquete domain APIs.
 *
 * Replaces: `modulos/paquetes/paquete/paquete.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Paquete,
  PaqueteQueryParams,
  PaqueteSearchParams,
} from './types.js';

export type { Paquete } from './types.js';

export function paquetes(
  params: PaqueteQueryParams = {},
): Promise<WeeiiIncomingMessage<{ paquete: Paquete[] }>> {
  return request('paquete', params);
}

export function paqueteSearch(
  params: PaqueteSearchParams,
): Promise<WeeiiIncomingMessage<{ paquete: Paquete[] }>> {
  return request('paquete_search', params);
}

export function registrarPaquete(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ paquete: Paquete }>> {
  return request('paquete_registrar', params);
}

export function editarPaquete(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ paquete: Paquete }>> {
  return request('paquete_editar', params);
}

export function paquetePorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ paquete: Paquete }>> {
  return request('paquete_q_id', params);
}

export function paqueteCatalogo(
  params: PaqueteQueryParams = {},
): Promise<WeeiiIncomingMessage<{ paquete: Paquete[] }>> {
  return request('paquete_catalogo', params);
}

export function paquetePermitido(
  params: PaqueteQueryParams = {},
): Promise<WeeiiIncomingMessage<{ paquete: Paquete[] }>> {
  return request('paquete_q_permitido', params);
}

export function eliminarPaquete(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('paquete_eliminar', params);
}

export function paquetePermitidoSortPromover(
  params: { id: number; ids_ordenados: number[] },
): Promise<WeeiiIncomingMessage> {
  return request('paquete_permitido_sort_promover', params);
}
