import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Lider extends WeeiiRecord {
  id_equipo:      Id;
  id_usuario:     Id;
  id_asignador:   Id;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface LiderQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface LiderSearchParams extends LiderQueryParams {
  texto_busqueda: string;
}
