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
  eliminacion_activa?:     boolean | null;
}

/** Real-world payment form used by an external transaction (cash, terminal, transfer, etc.). */
export const FormasPago = {
  Otro:          1,
  Efectivo:      2,
  Terminal:      3,
  Transferencia: 4,
  Link:          5,
  Envio:         6,
  Cheque:        7,
  Tienda:        8,
} as const;
export type FormaPago = typeof FormasPago[keyof typeof FormasPago];

/** Vehicle type for delivery drivers. `null` means on foot. */
export const TiposVehiculo = {
  Otro:    1,
  Bici:    2,
  Scooter: 3,
  Moto:    4,
  Coche:   5,
  Pickup:  6,
  Van:     7,
  Trailer: 8,
} as const;
export type TipoVehiculo = typeof TiposVehiculo[keyof typeof TiposVehiculo] | null;

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
