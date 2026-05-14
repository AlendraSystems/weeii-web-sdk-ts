import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { SaldoUsuario, MovimientoSaldo } from './types.js';

export type { SaldoUsuario, MovimientoSaldo } from './types.js';

export function miSaldo(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_mi_saldo', params);
}

export function saldoPorIdUsuario(
  params: { id_usuario: number },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_q_id_usuario', params);
}

export function movimientosSaldo(
  params: { id_ultimo?: number; filas?: number } = {},
): Promise<WeeiiIncomingMessage<{ movimiento_saldo: MovimientoSaldo[] }>> {
  return request('saldo_usuario_movimientos', params);
}

export function depositarSaldo(
  params: { monto: number; referencia?: string },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_depositar', params);
}
