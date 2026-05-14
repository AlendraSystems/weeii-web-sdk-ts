/**
 * Shared base types used across all Weeii domain modules.
 */

/** Numeric primary key. */
export type Id = number;

/** ISO 8601 datetime string as returned by the server. */
export type Timestamp = string;

/** Base shape that every Weeii entity carries after classification. */
export interface WeeiiRecord {
  id:        Id;
  version:   number;
  eliminado: boolean | null;
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
