import type { WeeiiRecord, Id } from '../../types.js';

export interface Retiro extends WeeiiRecord {
  id_usuario:     Id;
  id_responsable: Id | null;
  monto:          number;
  concepto:       string | null;
}

export interface RetiroQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface RetiroSearchParams extends RetiroQueryParams {
  texto_busqueda: string;
}
