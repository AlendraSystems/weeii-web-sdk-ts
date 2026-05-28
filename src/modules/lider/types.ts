import type { WeeiiRecord, Id } from '../../types.js';

export interface Lider extends WeeiiRecord {
  id_equipo:  Id;
  id_usuario: Id;
}

export interface LiderQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface LiderSearchParams extends LiderQueryParams {
  texto_busqueda: string;
}
