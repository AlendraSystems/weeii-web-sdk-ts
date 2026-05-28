import type { WeeiiRecord, Id } from '../../types.js';

export interface Orden extends WeeiiRecord {
  id_entrega: Id | null;
  id_negocio: Id | null;
  id_usuario: Id;
  total:      number;
  estado:     string;
}

export interface OrdenQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface OrdenSearchParams extends OrdenQueryParams {
  texto_busqueda: string;
}
