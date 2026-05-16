import type { WeeiiRecord } from '../../types.js';

export interface EntregaEstatus extends WeeiiRecord {
  id_entrega:         number;
  id_estatus_entrega: number;
  descripcion:        string | null;
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
