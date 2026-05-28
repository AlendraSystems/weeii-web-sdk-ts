import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaUsuarioCalificacion extends WeeiiRecord {
  id_usuario:                  Id;
  calificaciones_cliente:      number;
  calificaciones_sum_cliente:  number;
  calificacion_cliente:        number;
  calificaciones_repartidor:   number;
  calificaciones_sum_repartidor: number;
  calificacion_repartidor:     number;
}

export interface EntregaUsuarioCalificacionSearchParams {
  texto_busqueda: string;
  id_ultimo?:     Id;
  filas?:         number;
  profundidad?:   number[];
}
