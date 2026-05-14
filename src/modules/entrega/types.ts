import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Entrega extends WeeiiRecord {
  id_orden:       Id;
  id_repartidor:  Id | null;
  id_estatus:     Id;
  direccion:      string;
  latitud:        number | null;
  longitud:       number | null;
  costo:          number;
  notas:          string | null;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface EntregaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaSearchParams extends EntregaQueryParams {
  texto_busqueda: string;
}
