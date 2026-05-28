import type { WeeiiRecord, Id } from '../../types.js';

export interface Pago extends WeeiiRecord {
  id_usuario:      Id;
  id_tipo_pago:    Id;
  oid:             string | null;
  oid_relacionado: string | null;
  monto:           number;
}

export interface PagoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface PagoSearchParams extends PagoQueryParams {
  texto_busqueda: string;
}
