import type { WeeiiRecord, Id } from '../../types.js';

export interface SaldoUsuario extends WeeiiRecord {
  id_usuario:    Id;
  saldo_a_favor:   number;
  saldo_en_contra: number;
  saldo_reservado: number;
}

export interface MovimientoSaldo extends WeeiiRecord {
  id_usuario:    Id;
  id_referencia: Id | null;
  tipo:          string;
  monto:         number;
  saldo_despues: number;
  descripcion:   string | null;
}
export interface SaldoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}