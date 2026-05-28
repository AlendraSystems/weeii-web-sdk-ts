import type { WeeiiRecord } from '../../types.js';

export interface EntregaEstatus extends WeeiiRecord {
  // Creation geo:
  creacion_latitud:     number | null;
  creacion_longitud:    number | null;
  creacion_angulo:      number | null;
  creacion_mac_address: string | null;
  // Fields:
  id_entrega:        number;
  id_estatus_previo: number;
  id_estatus_nuevo:  number;
  latitud:           number | null;
  longitud:          number | null;
}

export interface EntregaEstatusQueryParams {
  id_entrega:  number;
  id_ultimo?:  number;
  filas?:      number;
  profundidad?: number[];
}

export interface EntregaEstatusSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
  profundidad?:   number[];
}
