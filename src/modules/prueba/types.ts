import type { WeeiiRecord, Id } from '../../types.js';

export interface Prueba extends WeeiiRecord {
  id_validacion: Id;
  id_usuario:    Id;
  datos:         Record<string, unknown> | null;
  aprobada:      boolean;
}

export interface PruebaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PruebaSearchParams extends PruebaQueryParams {
  texto_busqueda: string;
}
