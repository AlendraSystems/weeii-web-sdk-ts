import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface SaldoPago extends WeeiiRecord {
  id_usuario:     Id;
  monto:          number;
  referencia:     string | null;
  id_estatus:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface SaldoPagoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SaldoPagoSearchParams extends SaldoPagoQueryParams {
  texto_busqueda: string;
}
