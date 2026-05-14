import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaUsuarioCalificacion extends WeeiiRecord {
  id_usuario:          Id;
  calificacion_promedio: number;
  total_calificaciones: number;
}

export interface EntregaUsuarioCalificacionSearchParams {
  texto_busqueda: string;
  id_ultimo?:     Id;
  filas?:         number;
  profundidad?:   number[];
}
