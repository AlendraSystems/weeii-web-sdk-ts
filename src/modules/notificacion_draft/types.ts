import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface NotificacionDraft extends WeeiiRecord {
  tipo:                    string;
  titulo:                  string;
  contenido:               string | null;
  descripcion:             string | null;
  id_rol:                  Id | null;
  destinatario_validado:   boolean;
  destinatario_autorizado: boolean;
  publicado:               boolean;
  ts_publicado:            Timestamp | null;
  destinatarios_alcanzados: number;
}

export interface NotificacionDraftQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface NotificacionDraftSearchParams extends NotificacionDraftQueryParams {
  texto_busqueda: string;
}
