import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Validacion extends WeeiiRecord {
  id_tramite:     Id;
  id_usuario:     Id;
  facultad:       string;
  validada:       boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface ValidacionQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface ValidacionSearchParams extends ValidacionQueryParams {
  texto_busqueda: string;
}
