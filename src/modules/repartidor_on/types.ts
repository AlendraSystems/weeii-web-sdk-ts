import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface RepartidorOn extends WeeiiRecord {
  id_usuario:    Id;
  id_equipo:     Id | null;
  latitud:       number | null;
  longitud:      number | null;
  disponible:    boolean;
  visible:       boolean;
  insertado_en:  Timestamp;
  actualizado_en: Timestamp;
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
