import type { WeeiiRecord, Id } from '../../types.js';

export interface RepartidorOn extends WeeiiRecord {
  id_usuario:       Id;
  visible:          boolean;
  latitud:          number | null;
  longitud:         number | null;
  orientacion:      number | null;
  codigo_pais:      string | null;
  codigo_estado:    string | null;
  codigo_ciudad:    string | null;
  codigo_postal:    string | null;
  id_tipo_vehiculo: number | null;
  // Repartidor/entidad/admin only:
  id_entrega?:      Id | null;
  hacia_latitud?:   number | null;
  hacia_longitud?:  number | null;
  desde_latitud?:   number | null;
  desde_longitud?:  number | null;
  // Repartidor/admin only:
  efectivo?:             number | null;
  id_entrega_cadena?:    Id | null;
  id_entrega_candidato?: Id | null;
}

export interface RepartidorOnQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface RepartidorOnSearchParams extends RepartidorOnQueryParams {
  texto_busqueda: string;
}

export interface RepartidorOnGeoParams {
  latitud:  number;
  longitud: number;
  distancia?: number;
}
