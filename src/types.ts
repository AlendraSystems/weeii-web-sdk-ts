/**
 * Shared base types used across all Weeii domain modules.
 */

/** Numeric primary key. */
export type Id = number;

/** ISO 8601 datetime string as returned by the server. */
export type Timestamp = string;

/** Base shape that every Weeii entity carries after classification. */
export interface WeeiiRecord {
  id:         Id;
  id_entidad: number;
  version:    number;
  activo:     boolean;
  // Returned only to record owners and privileged roles:
  timestamp_creacion?:     Timestamp | null;
  timestamp_modificacion?: Timestamp | null;
  timestamp_eliminacion?:  Timestamp | null;
  id_creador?:             Id | null;
  id_entidad_creador?:     number | null;
  id_eliminador?:          Id | null;
  id_entidad_eliminador?:  number | null;
  creacion_activa?:        boolean | null;
}

/**
 * Wrapper around a server response body after classification.
 * `data` holds the typed payload; `changes` describes what the store mutated.
 */
export interface WeeiiResponse<T = Record<string, unknown>> {
  data:    T;
  raw:     Record<string, unknown>;
}

/** Standard server error shape. */
export interface WeeiiError {
  codigo:      string;
  descripcion: string;
}
