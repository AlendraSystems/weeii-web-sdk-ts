import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EntregaRepartidor extends WeeiiRecord {
  id_entrega:    Id;
  id_repartidor: Id;
  insertado_en:  Timestamp;
}

export interface EntregaRepartidorSearchParams {
  texto_busqueda: string;
  id_ultimo?:     Id;
  filas?:         number;
  profundidad?:   number[];
}
