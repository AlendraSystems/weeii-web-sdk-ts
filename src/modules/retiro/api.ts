/**
 * Retiro domain APIs.
 *
 * Replaces: `modulos/pagos/retiro/retiro.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Retiro, RetiroQueryParams, RetiroSearchParams } from './types.js';

export type { Retiro } from './types.js';

export function retiros(
  params: RetiroQueryParams = {},
): Promise<WeeiiIncomingMessage<{ retiro: Retiro[] }>> {
  return request('retiro', params);
}

export function retiroSearch(
  params: RetiroSearchParams,
): Promise<WeeiiIncomingMessage<{ retiro: Retiro[] }>> {
  return request('retiro_search', params);
}

export function retiroQId(
  params: { id: number } & RetiroQueryParams,
): Promise<WeeiiIncomingMessage<{ retiro: Retiro }>> {
  return request('retiro_q_id', params);
}

export function retiroQIdUsuario(
  params: { id_usuario: number } & RetiroQueryParams,
): Promise<WeeiiIncomingMessage<{ retiro: Retiro[] }>> {
  return request('retiro_q_id_usuario', params);
}

export function retiroQIdResponsable(
  params: { id_responsable: number } & RetiroQueryParams,
): Promise<WeeiiIncomingMessage<{ retiro: Retiro[] }>> {
  return request('retiro_q_id_responsable', params);
}

export function misRetiros(
  params: RetiroQueryParams = {},
): Promise<WeeiiIncomingMessage<{ retiro: Retiro[] }>> {
  return request('retiro_q_mios', params);
}

export function editarRetiro(
  params: { id: number } & Partial<Retiro>,
): Promise<WeeiiIncomingMessage<{ retiro: Retiro }>> {
  return request('retiro_editar', params);
}
