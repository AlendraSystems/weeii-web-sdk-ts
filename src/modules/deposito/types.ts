import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Deposito extends WeeiiRecord {
  id_usuario:      Id;
  id_responsable:  Id | null;
  monto:           number;
  concepto:        string | null;
  insertado_en:    Timestamp;
}

export interface DepositoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface DepositoSearchParams extends DepositoQueryParams {
  texto_busqueda: string;
}
