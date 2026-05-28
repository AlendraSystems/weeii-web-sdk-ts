import type { WeeiiRecord, Id } from '../../types.js';

export interface Movimiento extends WeeiiRecord {
  // Creation geo:
  creacion_latitud:    number | null;
  creacion_longitud:   number | null;
  creacion_angulo:     number | null;
  creacion_mac_address: string | null;
  // Fields:
  id_usuario:     Id;
  id_saldo:       Id;
  ie_relacionado: number | null;
  id_relacionado: Id | null;
  favor_o_contra: 'favor' | 'contra';
  in_out:         'in' | 'out';
  cantidad:       number;
  descripcion:    string | null;
  saldo_a_favor_previo:       number;
  saldo_a_favor_posterior:    number;
  saldo_en_contra_previo:     number;
  saldo_en_contra_posterior:  number;
  saldo_reservado_previo:     number;
  saldo_reservado_posterior:  number;
}

export interface MovimientoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface MovimientoSearchParams extends MovimientoQueryParams {
  texto_busqueda: string;
}
