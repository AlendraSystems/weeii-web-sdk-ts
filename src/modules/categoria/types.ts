import type { WeeiiRecord, Id } from '../../types.js';

export interface Categoria extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
  icono:       string | null;
  id_negocio:  Id | null;
  activa:      boolean;
}

export interface CategoriaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface CategoriaSearchParams extends CategoriaQueryParams {
  texto_busqueda: string;
}
