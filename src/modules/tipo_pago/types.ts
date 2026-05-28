import type { WeeiiRecord } from '../../types.js';

export interface TipoPago extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
  permitido:   boolean;
  limite:      number | null;
}

export interface TipoPagoQueryParams {
  id_ultimo?:   number;
  filas?:       number;
  profundidad?: number[];
}

export interface TipoPagoSearchParams extends TipoPagoQueryParams {
  texto_busqueda: string;
}
