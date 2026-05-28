import type { WeeiiRecord, Id } from '../../types.js';

export interface Concepto extends WeeiiRecord {
  id_negocio:          Id;
  id_cliente:          Id;
  creada_por_negocio_p: boolean;
  id_orden:            Id | null;
  id_producto:         Id | null;
  articulo:            string | null;
  notas:               string | null;
  descripcion:         string | null;
  precio_producto:     number;
  precio:              number;
  cantidad:            number;
  total_estimado:      number;
  total:               number;
  // Creation geo:
  creacion_latitud:    number | null;
  creacion_longitud:   number | null;
  creacion_angulo:     number | null;
  creacion_mac_address: string | null;
  // Negocio/admin (optional):
  id_negociante?:  Id | null;
  id_responsable?: Id | null;
}

export interface ConceptoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface ConceptoSearchParams extends ConceptoQueryParams {
  texto_busqueda: string;
}
