import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Concepto extends WeeiiRecord {
  id_orden:       Id;
  nombre:         string;
  descripcion:    string | null;
  precio:         number;
  cantidad:       number;
  subtotal:       number;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface ConceptoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface ConceptoSearchParams extends ConceptoQueryParams {
  texto_busqueda: string;
}
