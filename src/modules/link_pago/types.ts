import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface LinkPago extends WeeiiRecord {
  id_emisor:      Id;
  token:          string;
  monto:          number;
  descripcion:    string | null;
  id_estatus:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface LinkPagoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface LinkPagoSearchParams extends LinkPagoQueryParams {
  texto_busqueda: string;
}

export interface LinkPagoGeoParams {
  latitud:   number;
  longitud:  number;
  radio_km?: number;
}
