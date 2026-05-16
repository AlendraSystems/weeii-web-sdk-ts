import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Equipo extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface EquipoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoSearchParams extends EquipoQueryParams {
  texto_busqueda: string;
}
