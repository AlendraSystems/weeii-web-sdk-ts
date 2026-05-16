import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Prueba extends WeeiiRecord {
  id_validacion:  Id;
  id_usuario:     Id;
  datos:          Record<string, unknown> | null;
  aprobada:       boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface PruebaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PruebaSearchParams extends PruebaQueryParams {
  texto_busqueda: string;
}
