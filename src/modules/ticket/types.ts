import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Ticket extends WeeiiRecord {
  id_usuario:                   Id;
  id_asignado:                  Id | null;
  id_chat:                      Id | null;
  ie_relacionado:               number | null;
  id_relacionado:               Id | null;
  abierto:                      boolean;
  ts_abierto:                   Timestamp | null;
  asignado_resuelto:            boolean;
  solicitante_resuelto:         boolean;
  descripcion:                  string | null;
  id_img_1:                     number | null;
  id_img_2:                     number | null;
  id_img_3:                     number | null;
  id_img_4:                     number | null;
  solicitante_califica_asignado: number | null;
  solicitante_comentarios:      string | null;
}

export interface TicketQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketSearchParams extends TicketQueryParams {
  texto_busqueda: string;
}
