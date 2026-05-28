import type { WeeiiRecord, Id } from '../../types.js';

export interface NotificacionDraft extends WeeiiRecord {
  id_tipo_notificacion: Id;
  titulo:               string;
  cuerpo:               string;
  datos:                Record<string, unknown> | null;
  publicado:            boolean;
}

export interface NotificacionDraftQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface NotificacionDraftSearchParams extends NotificacionDraftQueryParams {
  texto_busqueda: string;
}
