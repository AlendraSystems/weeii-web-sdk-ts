import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface TicketChatMsj extends WeeiiRecord {
  id_chat:        Id;
  id_chat_usr:    Id;
  id_usuario:     Id;
  id_ticket:      Id | null;
  mensaje:        string;
  tiene_adjunto:  boolean;
  visto:          boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface TicketChatMsjQueryParams {
  id_chat:    Id;
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketChatMsjSearchParams extends TicketChatMsjQueryParams {
  texto_busqueda: string;
}
