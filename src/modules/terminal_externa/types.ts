import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface TerminalExterna extends WeeiiRecord {
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
  folio:                 string | null;
}

export interface TerminalExternaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TerminalExternaSearchParams extends TerminalExternaQueryParams {
  texto_busqueda: string;
}
