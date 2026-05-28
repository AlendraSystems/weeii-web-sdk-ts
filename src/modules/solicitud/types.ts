import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Solicitud extends WeeiiRecord {
  id_tramite:     Id;
  facultad:       string;
  id_validacion:  Id | null;
  ie_relacionado: number | null;
  id_relacionado: Id | null;
  validado:       boolean;
  ts_validado:    Timestamp | null;
  id_validador:   Id | null;
  notas:          string | null;
}

export interface SolicitudQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SolicitudSearchParams extends SolicitudQueryParams {
  texto_busqueda: string;
}
