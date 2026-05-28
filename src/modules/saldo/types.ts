import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface SaldoPago extends WeeiiRecord {
  id_usuario:            Id;
  id_entidad_relacionado: number | null;
  id_relacionado:        Id | null;
  cantidad:              number;
  estatus:               string | null;
  autorizado:            boolean;
  cantidad_autorizada:   number;
  timestamp_autorizado:  Timestamp | null;
  capturado:             boolean;
  cantidad_capturada:    number;
  timestamp_captura:     Timestamp | null;
  devuelto:              boolean;
  cantidad_devuelta:     number;
  timestamp_devolucion:  Timestamp | null;
}

export interface SaldoPagoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SaldoPagoSearchParams extends SaldoPagoQueryParams {
  texto_busqueda: string;
}
