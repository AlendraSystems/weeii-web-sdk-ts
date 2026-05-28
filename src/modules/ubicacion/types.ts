import type { WeeiiRecord, Id } from '../../types.js';

export interface Ubicacion extends WeeiiRecord {
  id_usuario:            Id;
  id_entrega:            number | null;
  guardada:              boolean;
  nombre:                string | null;
  direccion:             string;
  latitud:               number;
  longitud:              number;
  admon_origen_default:  boolean;
  admon_destino_default: boolean;
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