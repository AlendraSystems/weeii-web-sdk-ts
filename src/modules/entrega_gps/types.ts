import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaGps extends WeeiiRecord {
  id_entrega:   Id;
  id_usuario:   Id;
  latitud:      number;
  longitud:     number;
  orientacion:  number | null;
}

export interface EntregaGpsQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaGpsSearchParams extends EntregaGpsQueryParams {
  texto_busqueda: string;
}
