import type { WeeiiRecord, Id } from '../../types.js';

export interface Entrega extends WeeiiRecord {
  id_orden:      Id;
  id_repartidor: Id | null;
  id_estatus:    Id;
  direccion:     string;
  latitud:       number | null;
  longitud:      number | null;
  costo:         number;
  notas:         string | null;
}

export interface EntregaEstadisticas {
  total:          number;
  exitosas:       number;
  fallidas:       number;
  canceladas:     number;
  en_proceso:     number;
}

export interface EntregaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaSearchParams extends EntregaQueryParams {
  texto_busqueda: string;
}
