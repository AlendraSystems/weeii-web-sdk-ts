import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaRepartidor extends WeeiiRecord {
  id_entrega:    Id;
  id_repartidor: Id;
}

export interface EntregaRepartidorSearchParams {
  texto_busqueda: string;
  id_ultimo?:     Id;
  filas?:         number;
  profundidad?:   number[];
}
