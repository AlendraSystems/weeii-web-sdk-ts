import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Requisito extends WeeiiRecord {
  id_tramite:     Id;
  nombre:         string;
  descripcion:    string | null;
  facultad:       string;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface RequisitoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface RequisitoSearchParams extends RequisitoQueryParams {
  texto_busqueda: string;
}
