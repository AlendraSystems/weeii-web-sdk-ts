/**
 * Seguro domain APIs.
 *
 * Replaces: `modulos/seguros/seguro/seguro.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Seguro,
  SeguroQueryParams,
  SeguroSearchParams,
} from './types.js';

export type { Seguro } from './types.js';

export function seguros(
  params: SeguroQueryParams = {},
): Promise<WeeiiIncomingMessage<{ seguro: Seguro[] }>> {
  return request('seguro', params);
}

export function seguroSearch(
  params: SeguroSearchParams,
): Promise<WeeiiIncomingMessage<{ seguro: Seguro[] }>> {
  return request('seguro_search', params);
}

export function registrarSeguro(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ seguro: Seguro }>> {
  return request('seguro_registrar', params);
}

export function editarSeguro(
  params: { id: number } & Partial<Pick<Seguro, 'nombre' | 'descripcion' | 'precio' | 'activo'>>,
): Promise<WeeiiIncomingMessage<{ seguro: Seguro }>> {
  return request('seguro_editar', params);
}

export function seguroPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ seguro: Seguro }>> {
  return request('seguro_q_id', params);
}

export function seguroCatalogo(
  params: SeguroQueryParams = {},
): Promise<WeeiiIncomingMessage<{ seguro: Seguro[] }>> {
  return request('seguro_catalogo', params);
}
