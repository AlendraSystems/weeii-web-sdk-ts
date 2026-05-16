import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Aplicacion extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface AplicacionQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface AplicacionSearchParams extends AplicacionQueryParams {
  texto_busqueda: string;
}
