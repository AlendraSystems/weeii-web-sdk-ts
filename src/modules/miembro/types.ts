import type { WeeiiRecord, Id } from '../../types.js';

export interface Miembro extends WeeiiRecord {
  id_equipo:  Id;
  id_usuario: Id;
}

export interface MiembroQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface MiembroSearchParams extends MiembroQueryParams {
  texto_busqueda: string;
}
