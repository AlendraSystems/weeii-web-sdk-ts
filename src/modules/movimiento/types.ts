import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Movimiento extends WeeiiRecord {
  id_usuario:   Id;
  oid_relacionado: string | null;
  monto:        number;
  in_out:       'in' | 'out';
  favor_o_contra: 'favor' | 'contra';
  concepto:     string | null;
  insertado_en: Timestamp;
}

export interface MovimientoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface MovimientoSearchParams extends MovimientoQueryParams {
  texto_busqueda: string;
}
