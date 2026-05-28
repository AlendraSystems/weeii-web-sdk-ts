import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaRepartidor extends WeeiiRecord {
  id_entrega:        Id;
  id_cliente:        Id;
  id_repartidor:     Id;
  id_estatus_entrega: number;
}

export interface EntregaRepartidorSearchParams {
  texto_busqueda: string;
  id_ultimo?:     Id;
  filas?:         number;
  profundidad?:   number[];
}
