import type { WeeiiRecord, Id, TipoVehiculo } from '../../types.js';

export interface Paquete extends WeeiiRecord {
  id_tipo_vehiculo: TipoVehiculo;
  nombre:           string;
  descripcion:      string | null;
  permitido:        boolean;
  foto:             string | null;
  banner:           string | null;
  // Physical dimensions:
  alto:   number;
  ancho:  number;
  largo:  number;
  peso:   number;
  // Pricing:
  precio_minimo:                number;
  precio_base:                  number;
  corte_repartidor_precio_base: number;
  // Distance-based pricing:
  distancia_base_a_origen:    number;
  distancia_base_a_destino:   number;
  precio_kilometro_a_origen:  number;
  precio_kilometro_a_destino: number;
  // Candidate search radii:
  distancia_candidatos_origen_haversina: number;
  distancia_candidatos_origen_vial:      number;
  // Duration-based pricing:
  duracion_base_a_origen:  number;
  duracion_base_a_destino: number;
  precio_minuto_a_origen:  number;
  precio_minuto_a_destino: number;
  // Wait-time pricing:
  tiempo_espera_en_origen:             number;
  tiempo_espera_en_destino:            number;
  precio_minuto_espera_en_origen:      number;
  precio_minuto_espera_en_destino:     number;
  // Driver cut percentages:
  porcentaje_corte_repartidor_distancia_a_origen:  number;
  porcentaje_corte_repartidor_distancia_a_destino: number;
  porcentaje_corte_repartidor_duracion_a_origen:   number;
  porcentaje_corte_repartidor_duracion_a_destino:  number;
  porcentaje_corte_repartidor_espera_en_origen:    number;
  porcentaje_corte_repartidor_espera_en_destino:   number;
  // Cash handling surcharge:
  manejo_efectivo_cuota_porcentaje: number;
  manejo_efectivo_cuota_min:        number;
}

export interface PaqueteQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PaqueteSearchParams extends PaqueteQueryParams {
  texto_busqueda: string;
}
