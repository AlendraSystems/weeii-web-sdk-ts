import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Conekta extends WeeiiRecord {
  id_usuario:     Id;
  monto:          number;
  referencia:     string | null;
  token:          string | null;
  id_estatus:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface ConektaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface ConektaSearchParams extends ConektaQueryParams {
  texto_busqueda: string;
}
