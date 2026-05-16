import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface TicketChatUsr extends WeeiiRecord {
  id_chat:        Id;
  id_usuario:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface TicketChatUsrQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketChatUsrSearchParams extends TicketChatUsrQueryParams {
  texto_busqueda: string;
}
