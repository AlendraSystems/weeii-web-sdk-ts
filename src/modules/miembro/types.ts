import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Miembro extends WeeiiRecord {
  id_equipo:      Id;
  id_usuario:     Id;
  id_asignador:   Id;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface MiembroQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface MiembroSearchParams extends MiembroQueryParams {
  texto_busqueda: string;
}
