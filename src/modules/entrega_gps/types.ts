import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EntregaGps extends WeeiiRecord {
  id_entrega:   Id;
  id_usuario:   Id;
  latitud:      number;
  longitud:     number;
  insertado_en: Timestamp;
}

export interface EntregaGpsQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaGpsSearchParams extends EntregaGpsQueryParams {
  texto_busqueda: string;
}
