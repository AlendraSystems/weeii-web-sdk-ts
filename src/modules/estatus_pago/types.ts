import type { WeeiiRecord } from '../../types.js';

export interface EstatusPago extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
}

export interface EstatusPagoQueryParams {
  id_ultimo?:   number;
  filas?:       number;
  profundidad?: number[];
}

export interface EstatusPagoSearchParams extends EstatusPagoQueryParams {
  texto_busqueda: string;
}
