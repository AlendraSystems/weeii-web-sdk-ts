import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Entrega extends WeeiiRecord {
  // Core:
  id_cliente:                          Id;
  id_repartidor:                       Id | null;
  administrativa:                      boolean;
  id_paquete:                          Id | null;
  id_seguro:                           Id | null;
  cobertura_seguro:                    number | null;
  id_cupon:                            Id | null;
  codigo_cupon:                        string | null;
  id_estatus_entrega:                  number;
  timestamp_id_estatus_entrega:        Timestamp | null;
  timestamp_aceptada:                  Timestamp | null;
  // Creation geo:
  creacion_latitud:                    number | null;
  creacion_longitud:                   number | null;
  creacion_angulo:                     number | null;
  creacion_mac_address:                string | null;
  // Origin:
  latitud_origen:                      number | null;
  longitud_origen:                     number | null;
  direccion_origen:                    string | null;
  nombre_origen:                       string | null;
  // Destination:
  latitud_destino:                     number | null;
  longitud_destino:                    number | null;
  direccion_destino:                   string | null;
  nombre_destino:                      string | null;
  // Payment:
  id_tipo_pago:                        Id | null;
  id_pago:                             Id | null;
  pagada:                              boolean;
  timestamp_pagada:                    Timestamp | null;
  efectivo_requerido:                  number;
  cuota_manejo_efectivo:               number;
  // Distances & times:
  distancia_a_origen:                  number | null;
  distancia_extra_a_origen:            number | null;
  tiempo_a_origen:                     number | null;
  tiempo_extra_a_origen:               number | null;
  distancia_a_destino:                 number | null;
  distancia_extra_a_destino:           number | null;
  tiempo_a_destino:                    number | null;
  tiempo_extra_a_destino:              number | null;
  // Misc:
  requiere_confirmacion:               boolean;
  notas:                               string | null;
  descripcion:                         string | null;
  // Contact:
  contacto_nombre:                           string | null;
  contacto_telefono_codigo_pais:             number | null;
  contacto_telefono_nacional:                string | null;
  contacto_nombre_origen:                    string | null;
  contacto_telefono_codigo_pais_origen:      number | null;
  contacto_telefono_nacional_origen:         string | null;
  contacto_telefono_origen:                  string | null;
  contacto_nombre_destino:                   string | null;
  contacto_telefono_codigo_pais_destino:     number | null;
  contacto_telefono_nacional_destino:        string | null;
  contacto_telefono_destino:                 string | null;
  // Instructions:
  indicaciones_repartidor:             string | null;
  indicaciones_repartidor_origen:      string | null;
  indicaciones_repartidor_destino:     string | null;
  comentarios_repartidor:              string | null;
  comentarios_repartidor_origen:       string | null;
  comentarios_repartidor_destino:      string | null;
  // Pricing:
  precio_base_paquete:                 number;
  precio_viaje:                        number;
  descuento:                           number;
  precio_seguro:                       number;
  subtotal:                            number;
  iva_porcentaje:                      number;
  iva:                                 number;
  total:                               number;
  precio_distancia_extra_a_origen:     number;
  precio_tiempo_extra_a_origen:        number;
  precio_distancia_extra_a_destino:    number;
  precio_tiempo_extra_a_destino:       number;
  // Driver-specific (optional):
  corte_repartidor_precio_base?:                number | null;
  corte_repartidor_distancia_extra_a_origen?:   number | null;
  corte_repartidor_tiempo_extra_a_origen?:      number | null;
  corte_repartidor_tiempo_extra_a_destino?:     number | null;
  corte_repartidor_distancia_extra_a_destino?:  number | null;
  corte_repartidor?:                            number | null;
  repartidor_califica_cliente?:                 boolean | null;
  id_repartidor_sugerido?:                      Id | null;
  orden_sugerido?:                              number | null;
  // Client-specific (optional):
  token_chat?:                  string | null;
  codigo_acceso?:               string | null;
  id_plantilla?:                Id | null;
  enviar_recibir?:              boolean | null;
  timestamp_agenda?:            Timestamp | null;
  agendada_costo_maximo?:       number | null;
  cliente_califica_repartidor?: boolean | null;
  // Admin-only (optional):
  id_responsable?:              Id | null;
  total_estimado?:              number | null;
  total_manual?:                number | null;
  corte_repartidor_estimado?:   number | null;
  corte_repartidor_manual?:     number | null;
  // Conditional:
  timestamp_limite_propuesta?:  number | null;
}

export interface EntregaEstadisticas {
  total:          number;
  exitosas:       number;
  fallidas:       number;
  canceladas:     number;
  en_proceso:     number;
}

export interface EntregaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaSearchParams extends EntregaQueryParams {
  texto_busqueda: string;
}
