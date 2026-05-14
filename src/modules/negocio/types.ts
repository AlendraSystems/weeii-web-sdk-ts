import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Negocio extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  logo:           string | null;
  id_categoria:   Id;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface NegocioQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface NegocioSearchParams extends NegocioQueryParams {
  texto_busqueda: string;
}
