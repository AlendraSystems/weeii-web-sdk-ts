import type { WeeiiRecord, Id } from '../../types.js';

export interface Seguro extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
  precio:      number;
  activo:      boolean;
}

export interface SeguroQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SeguroSearchParams extends SeguroQueryParams {
  texto_busqueda: string;
}
