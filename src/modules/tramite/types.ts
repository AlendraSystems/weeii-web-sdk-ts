import type { WeeiiRecord, Id } from '../../types.js';

export interface Tramite extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
  facultad:    string;
  activo:      boolean;
}

export interface TramiteQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TramiteSearchParams extends TramiteQueryParams {
  texto_busqueda: string;
}
