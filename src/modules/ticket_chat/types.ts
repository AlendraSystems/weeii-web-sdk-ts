import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface TicketChat extends WeeiiRecord {
  id_ticket:      Id | null;
  id_usuario:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface TicketChatQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketChatSearchParams extends TicketChatQueryParams {
  texto_busqueda: string;
}
