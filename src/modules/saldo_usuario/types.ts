import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface SaldoUsuario extends WeeiiRecord {
  id_usuario:   Id;
  saldo:        number;
  actualizado_en: Timestamp;
}

export interface MovimientoSaldo extends WeeiiRecord {
  id_usuario:   Id;
  id_referencia: Id | null;
  tipo:          string;
  monto:         number;
  saldo_despues: number;
  descripcion:   string | null;
  insertado_en:  Timestamp;
}
