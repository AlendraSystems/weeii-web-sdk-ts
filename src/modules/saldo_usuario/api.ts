import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { SaldoUsuario, MovimientoSaldo, SaldoQueryParams } from './types.js';

export type { SaldoUsuario, MovimientoSaldo } from './types.js';

// ── Query ─────────────────────────────────────────────────────────────────────

export function miSaldo(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_mi_saldo', params);
}

export function saldos(
  params: SaldoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_search', params);
}

export function saldoPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_q_id', params);
}

export function saldoPorIdUsuario(
  params: { id_usuario: number },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_q_id_usuario', params);
}

export function saldoBalancePorIdUsuario(
  params: { id_usuario: number },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_q_id_usuario_balance', params);
}

export function saldosPositivos(
  params: SaldoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_q_positivo', params);
}

export function saldosNegativos(
  params: SaldoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_q_negativo', params);
}

export function saldosPositivosPorIdRol(
  params: { id_rol: number } & SaldoQueryParams,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_q_positivo_id_rol', params);
}

export function saldosNegativosPorIdRol(
  params: { id_rol: number } & SaldoQueryParams,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_q_negativo_id_rol', params);
}

export function searchSaldosPositivos(
  params: { texto_busqueda: string } & SaldoQueryParams,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_search_positivo', params);
}

export function searchSaldosNegativos(
  params: { texto_busqueda: string } & SaldoQueryParams,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario[] }>> {
  return request('saldo_usuario_search_negativo', params);
}

export function movimientosSaldo(
  params: SaldoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ movimiento_saldo: MovimientoSaldo[] }>> {
  return request('saldo_usuario_movimientos', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function depositarSaldo(
  params: { monto: number; referencia?: string },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_depositar', params);
}

export function resolverSaldo(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_resolver', params);
}

export function retirarSaldo(
  params: { monto: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_retirar', params);
}

export function retirarPagoRepartidor(
  params: { id_repartidor: number; monto: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_retirar_pago_repartidor', params);
}

export function registrarAdeudo(
  params: { id_usuario: number; monto: number; descripcion?: string },
): Promise<WeeiiIncomingMessage<{ saldo_usuario: SaldoUsuario }>> {
  return request('saldo_usuario_registrar_adeudo', params);
}
