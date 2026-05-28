import type { WeeiiRecord, Id } from '../../types.js';

export interface EstatusOrden extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
}

export interface EstatusOrdenQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EstatusOrdenSearchParams extends EstatusOrdenQueryParams {
  texto_busqueda: string;
  profundidad?:   number[];
}
