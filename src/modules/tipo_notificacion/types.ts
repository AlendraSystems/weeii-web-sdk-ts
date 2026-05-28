import type { WeeiiRecord } from '../../types.js';

export interface TipoNotificacion extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
}

export interface TipoNotificacionQueryParams {
  id_ultimo?:   number;
  filas?:       number;
  profundidad?: number[];
}

export interface TipoNotificacionSearchParams extends TipoNotificacionQueryParams {
  texto_busqueda: string;
}

export interface EditarTipoNotificacionParams {
  id:           number;
  nombre?:      string;
  clave?:       string;
  descripcion?: string | null;
  orden?:       number | null;
}
