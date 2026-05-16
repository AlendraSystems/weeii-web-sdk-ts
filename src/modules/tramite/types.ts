import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Tramite extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  facultad:       string;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface TramiteQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TramiteSearchParams extends TramiteQueryParams {
  texto_busqueda: string;
}
