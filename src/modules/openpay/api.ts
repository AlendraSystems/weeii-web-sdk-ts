/**
 * Openpay payment gateway domain APIs.
 *
 * Replaces: `modulos/pagos/openpay/openpay.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Openpay,
  OpenpayQueryParams,
  OpenpaySearchParams,
} from './types.js';

export type { Openpay } from './types.js';

export function openpays(
  params: OpenpayQueryParams = {},
): Promise<WeeiiIncomingMessage<{ openpay: Openpay[] }>> {
  return request('openpay', params);
}

export function openpaySearch(
  params: OpenpaySearchParams,
): Promise<WeeiiIncomingMessage<{ openpay: Openpay[] }>> {
  return request('openpay_search', params);
}

export function openpayPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ openpay: Openpay }>> {
  return request('openpay_q_id', params);
}

export function openpayPorEstatus(
  params: { id_estatus: number } & OpenpayQueryParams,
): Promise<WeeiiIncomingMessage<{ openpay: Openpay[] }>> {
  return request('openpay_q_estatus', params);
}

export function openpayPorIdUsuario(
  params: { id_usuario: number } & OpenpayQueryParams,
): Promise<WeeiiIncomingMessage<{ openpay: Openpay[] }>> {
  return request('openpay_q_id_usuario', params);
}

export function misOpenPays(
  params: OpenpayQueryParams = {},
): Promise<WeeiiIncomingMessage<{ openpay: Openpay[] }>> {
  return request('openpay_q_mios', params);
}

export function openpayTokenizar(
  params: { id: number; token: string },
): Promise<WeeiiIncomingMessage<{ openpay: Openpay }>> {
  return request('openpay_tokenizar_tarjeta', params);
}

export function guardarOpenpay(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ openpay: Openpay }>> {
  return request('openpay_guardar_tarjeta', params);
}

export function eliminarOpenpay(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('openpay_eliminar_tarjeta', params);
}

export function openpayListarTarjetas(
  params: { id_usuario?: number } & OpenpayQueryParams,
): Promise<WeeiiIncomingMessage<{ openpay: Openpay[] }>> {
  return request('openpay_listar_tarjetas', params);
}
