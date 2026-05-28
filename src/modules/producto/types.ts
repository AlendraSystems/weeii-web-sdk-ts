import type { WeeiiRecord, Id } from '../../types.js';

export interface Producto extends WeeiiRecord {
  id_negocio:      Id;
  id_categoria:    Id | null;
  nombre:          string;
  descripcion:     string | null;
  costo:           number;
  precio:          number;
  permitido:       boolean;
  horario_inicio:  number | null;
  horario_fin:     number | null;
  foto:            string | null;
  banner:          string | null;
  foto_1:          string | null;
  foto_2:          string | null;
  foto_3:          string | null;
  foto_4:          string | null;
  foto_5:          string | null;
  foto_6:          string | null;
  // Owner/admin (optional):
  codigo?:     string | null;
  id_usuario?: Id | null;
  autorizado?: boolean | null;
}

export interface ProductoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface ProductoSearchParams extends ProductoQueryParams {
  texto_busqueda: string;
}
