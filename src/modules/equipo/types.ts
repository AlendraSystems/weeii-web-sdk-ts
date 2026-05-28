import type { WeeiiRecord, Id } from '../../types.js';

export interface Equipo extends WeeiiRecord {
  id_lider:       Id | null;
  id_usuario_lider: Id | null;
  autorizado:     boolean;
  abierto:        boolean;
  nombre:         string;
  slogan:         string | null;
  descripcion:    string | null;
  logo:           string | null;
  banner:         string | null;
}

export interface EquipoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoSearchParams extends EquipoQueryParams {
  texto_busqueda: string;
}
