import type { WeeiiRecord } from '../../types.js';

export interface TipoAdjunto extends WeeiiRecord {
  nombre:      string;
  clave:       string;
  descripcion: string | null;
  orden:       number | null;
}

export interface TipoAdjuntoQueryParams {
  id_ultimo?:   number;
  filas?:       number;
  profundidad?: number[];
}

export interface TipoAdjuntoSearchParams extends TipoAdjuntoQueryParams {
  texto_busqueda: string;
}

export interface EditarTipoAdjuntoParams {
  id:           number;
  nombre?:      string;
  clave?:       string;
  descripcion?: string | null;
  orden?:       number | null;
}
