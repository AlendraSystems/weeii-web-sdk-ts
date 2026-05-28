import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Orden extends WeeiiRecord {
  // Base (public):
  id_negocio:   Id | null;
  id_cliente:   Id | null;
  enviar_p:     boolean;
  tipo_vehiculo: number | null;
  id_paquete:   Id | null;
  id_entrega:   Id | null;
  id_repartidor: Id | null;
  cliente_nombre: string | null;
  latitud_destino:  number | null;
  longitud_destino: number | null;
  porcentaje_comision_conceptos: number;
  comision_conceptos: number;
  booking_fee:  number;
  cliente_img_1: number | null;
  cliente_img_2: number | null;
  cliente_img_3: number | null;
  negocio_img_1: number | null;
  negocio_img_2: number | null;
  negocio_img_3: number | null;
  // Extended (negocio/cliente/public):
  creacion_latitud:    number | null;
  creacion_longitud:   number | null;
  creacion_angulo:     number | null;
  creacion_mac_address: string | null;
  creada_por_negocio_p: boolean;
  notas:        string | null;
  descripcion:  string | null;
  estatus:      string | null;
  timestamp_estatus:              Timestamp | null;
  timestamp_en_cola_inicial:      Timestamp | null;
  timestamp_aceptada_inicial:     Timestamp | null;
  timestamp_en_cola:              Timestamp | null;
  timestamp_aceptada:             Timestamp | null;
  precio_conceptos:    number;
  precio_entrega:      number;
  comision_plataforma: number;
  subtotal:            number;
  iva_porcentaje:      number;
  iva:                 number;
  total:               number;
  ts_total:            Timestamp | null;
  total_vigente_p:     boolean;
  tipo_pago:           number | null;
  ie_pago:             number | null;
  id_pago:             Id | null;
  pagada_p:            boolean;
  timestamp_pagada:    Timestamp | null;
  cliente_telefono_prefijo: string | null;
  cliente_telefono_sufijo:  string | null;
  cliente_telefono:         string | null;
  // Negocio/negociante/admin (optional):
  id_negociante?:    Id | null;
  id_responsable?:   Id | null;
  precio_entrega_estimado?:           number | null;
  ts_precio_entrega_estimado?:        Timestamp | null;
  precio_entrega_estimado_vigente_p?: boolean | null;
  calificacion_negocio_a_repartidor?: number | null;
  calificacion_negocio_a_cliente?:    number | null;
  // Cliente (optional):
  token?:        string | null;
  codigo_acceso?: string | null;
  calificacion_cliente_a_negocio?:    number | null;
  calificacion_cliente_a_repartidor?: number | null;
  // Repartidor (optional):
  calificacion_repartidor_a_negocio?: number | null;
  calificacion_repartidor_a_cliente?: number | null;
}

export interface OrdenQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface OrdenSearchParams extends OrdenQueryParams {
  texto_busqueda: string;
}
