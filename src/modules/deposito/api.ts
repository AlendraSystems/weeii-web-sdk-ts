/**
 * Deposito domain APIs.
 *
 * Replaces: `modulos/pagos/deposito/deposito.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Deposito, DepositoQueryParams, DepositoSearchParams } from './types.js';

export type { Deposito } from './types.js';

export function depositos(
  params: DepositoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ deposito: Deposito[] }>> {
  return request('deposito', params);
}

export function depositoSearch(
  params: DepositoSearchParams,
): Promise<WeeiiIncomingMessage<{ deposito: Deposito[] }>> {
  return request('deposito_search', params);
}

export function depositoQId(
  params: { id: number } & DepositoQueryParams,
): Promise<WeeiiIncomingMessage<{ deposito: Deposito }>> {
  return request('deposito_q_id', params);
}

export function depositoQIdUsuario(
  params: { id_usuario: number } & DepositoQueryParams,
): Promise<WeeiiIncomingMessage<{ deposito: Deposito[] }>> {
  return request('deposito_q_id_usuario', params);
}

export function depositoQIdResponsable(
  params: { id_responsable: number } & DepositoQueryParams,
): Promise<WeeiiIncomingMessage<{ deposito: Deposito[] }>> {
  return request('deposito_q_id_responsable', params);
}

export function misDepositos(
  params: DepositoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ deposito: Deposito[] }>> {
  return request('deposito_q_mios', params);
}

export function editarDeposito(
  params: { id: number } & Partial<Deposito>,
): Promise<WeeiiIncomingMessage<{ deposito: Deposito }>> {
  return request('deposito_editar', params);
}
