import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Jornada extends WeeiiRecord {
  id_usuario:                          Id;
  id_tipo_vehiculo:                    number | null;
  timestamp_inicio:                    Timestamp;
  timestamp_fin:                       Timestamp | null;
  timestamp_visible:                   Timestamp | null;
  tiempo_en_servicio:                  number;
  tiempo_libre:                        number;
  tiempo_visible:                      number;
  distancia_en_servicio:               number;
  distancia_libre:                     number;
  entregas_ofrecidas:                  number;
  entregas_aceptadas:                  number;
  entregas_rechazadas:                 number;
  entregas_rechazadas_timeout:         number;
  entregas_abortadas:                  number;
  entregas_abortadas_admon:            number;
  entregas_abortadas_concluidas:       number;
  entregas_abortadas_inconclusas:      number;
  entregas_abortadas_admon_concluidas:  number;
  entregas_abortadas_admon_inconclusas: number;
  entregas_canceladas:                 number;
  entregas_canceladas_cliente:         number;
  entregas_canceladas_admon:           number;
  entregas_exitosas:                   number;
  entregas_exitosas_admon:             number;
  entregas_fallidas:                   number;
  entregas_fallidas_timeout:           number;
  entregas_fallidas_admon:             number;
  ingresos_weeii:                      number;
  ingresos_repartidor:                 number;
}

export interface JornadaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface JornadaSearchParams extends JornadaQueryParams {
  texto_busqueda: string;
}
