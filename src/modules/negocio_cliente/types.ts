import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface NegocioCliente extends WeeiiRecord {
  id_negocio:     Id;
  id_cliente:     Id;
  id_usuario:     Id;
  notas:          string | null;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface NegocioClienteQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface NegocioClienteSearchParams extends NegocioClienteQueryParams {
  texto_busqueda: string;
}
