import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Paquete extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  precio:         number;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface PaqueteQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PaqueteSearchParams extends PaqueteQueryParams {
  texto_busqueda: string;
}
