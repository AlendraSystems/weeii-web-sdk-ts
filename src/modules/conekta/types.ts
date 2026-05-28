import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Conekta extends WeeiiRecord {
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
  reembolsado:           boolean;
  cantidad_reembolsada:  number;
  timestamp_reembolso:   Timestamp | null;
  devuelto:              boolean;
  cantidad_devuelta:     number;
  timestamp_devolucion:  Timestamp | null;
  id_cliente_conekta:    string | null;
  id_token:              string | null;
  id_tarjeta:            string | null;
  descripcion:           string | null;
  id_orden:              string | null;
  id_cargo:              string | null;
}

export interface ConektaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface ConektaSearchParams extends ConektaQueryParams {
  texto_busqueda: string;
}
