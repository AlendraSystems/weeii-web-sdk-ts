import type { WeeiiRecord, Id } from '../../types.js';

export interface TicketChatMsj extends WeeiiRecord {
  id_sender:       Id;
  id_chat:         Id;
  id_chat_usr:     Id | null;
  id_usuario_canal: Id;
  id_reply:        Id | null;
  cuerpo:          string | null;
  id_adjunto:      Id | null;
  latitud:         number | null;
  longitud:        number | null;
}

export interface TicketChatMsjQueryParams {
  id_chat:    Id;
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketChatMsjSearchParams extends TicketChatMsjQueryParams {
  texto_busqueda: string;
}
