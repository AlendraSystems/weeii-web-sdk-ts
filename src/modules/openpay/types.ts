import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Openpay extends WeeiiRecord {
  id_usuario:     Id;
  monto:          number;
  referencia:     string | null;
  token:          string | null;
  id_estatus:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface OpenpayQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface OpenpaySearchParams extends OpenpayQueryParams {
  texto_busqueda: string;
}
