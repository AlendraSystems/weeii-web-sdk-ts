import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Validacion extends WeeiiRecord {
  id_tramite:     Id;
  facultad:       string;
  ie_relacionado: number | null;
  id_relacionado: Id | null;
  validado:       boolean;
  ts_validado:    Timestamp | null;
  id_validador:   Id | null;
}

export interface ValidacionQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface ValidacionSearchParams extends ValidacionQueryParams {
  texto_busqueda: string;
}
