import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Seguro extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  precio:         number;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface SeguroQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SeguroSearchParams extends SeguroQueryParams {
  texto_busqueda: string;
}
