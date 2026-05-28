import type { WeeiiRecord, Id } from '../../types.js';

export interface Ubicacion extends WeeiiRecord {
  id_usuario:   Id;
  id_negocio:   Id | null;
  alias:        string | null;
  direccion:    string;
  latitud:      number;
  longitud:     number;
  es_principal: boolean;
}
export interface UbicacionQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface UbicacionSearchParams extends UbicacionQueryParams {
  texto_busqueda: string;
}

export interface UbicacionGeoParams {
  latitud:   number;
  longitud:  number;
  radio_km?: number;
}