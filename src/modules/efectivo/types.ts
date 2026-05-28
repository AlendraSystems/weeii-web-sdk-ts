import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Efectivo extends WeeiiRecord {
  id_usuario:            Id;
  id_entidad_relacionado: number | null;
  id_relacionado:        Id | null;
  cantidad:              number;
  estatus:               string | null;
  capturado:             boolean;
  cantidad_capturada:    number;
  timestamp_captura:     Timestamp | null;
  reembolsado:           boolean;
  cantidad_reembolsada:  number;
  timestamp_reembolso:   Timestamp | null;
  devuelto:              boolean;
  cantidad_devuelta:     number;
  timestamp_devolucion:  Timestamp | null;
}

export interface EfectivoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EfectivoSearchParams extends EfectivoQueryParams {
  texto_busqueda: string;
}
