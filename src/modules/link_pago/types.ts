import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface LinkPago extends WeeiiRecord {
  // Base (public):
  id_negocio:            Id | null;
  id_negociante:         Id | null;
  concepto:              string | null;
  ie_objetivo:           number | null;
  id_objetivo:           Id | null;
  objetivo_monto:        number;
  subtotal:              number;
  iva_porcentaje:        number;
  iva:                   number;
  total:                 number;
  estatus:               string | null;
  timestamp_estatus:     Timestamp | null;
  capturado_p:           boolean;
  timestamp_capturado:   Timestamp | null;
  devuelto_p:            boolean;
  timestamp_devuelto:    Timestamp | null;
  tipo_pago:             number | null;
  ie_pago:               number | null;
  id_pago:               Id | null;
  token:                 string;
  codigo:                string | null;
  requiere_codigo_p:     boolean;
  pagador_nombre:        string | null;
  pagador_email:         string | null;
  pagador_telefono_prefijo: string | null;
  pagador_telefono_sufijo:  string | null;
  pagador_telefono:      string | null;
  // Conditional (when not negocio-linked):
  id_emisor?:            Id | null;
  // Emisor/negocio/admin (optional):
  id_comisionado?:       Id | null;
  admon_p?:              boolean | null;
  comisionado_monto?:    number | null;
  emisor_monto?:         number | null;
  id_responsable?:       Id | null;
}

export interface LinkPagoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface LinkPagoSearchParams extends LinkPagoQueryParams {
  texto_busqueda: string;
}

export interface LinkPagoGeoParams {
  latitud:   number;
  longitud:  number;
  radio_km?: number;
}
