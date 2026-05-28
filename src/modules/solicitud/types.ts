import type { WeeiiRecord, Id } from '../../types.js';

export interface Solicitud extends WeeiiRecord {
  id_tramite:   Id;
  id_usuario:   Id;
  id_validador: Id | null;
  facultad:     string;
  validado:     boolean;
}

export interface SolicitudQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SolicitudSearchParams extends SolicitudQueryParams {
  texto_busqueda: string;
}
