import type { WeeiiRecord, Id } from '../../types.js';

export interface Categoria extends WeeiiRecord {
  id_usuario:      Id;
  id_negocio:      Id | null;
  nombre:          string;
  descripcion:     string | null;
  autorizada:      boolean;
  permitida:       boolean;
  horario_inicio:  number | null;
  horario_fin:     number | null;
  foto:            string | null;
  banner:          string | null;
}

export interface CategoriaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface CategoriaSearchParams extends CategoriaQueryParams {
  texto_busqueda: string;
}
