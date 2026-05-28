import type { WeeiiRecord, Id } from '../../types.js';

export interface Pago extends WeeiiRecord {
  id_tipo_pago:   Id;
  ie_pago:        number | null;
  id_pago:        Id | null;
  id_usuario:     Id;
  ie_relacionado: number | null;
  id_relacionado: Id | null;
}

export interface PagoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface PagoSearchParams extends PagoQueryParams {
  texto_busqueda: string;
}
