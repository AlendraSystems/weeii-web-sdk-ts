import type { WeeiiRecord, Id } from '../../types.js';

export interface TicketChat extends WeeiiRecord {
  id_usuario:  Id;
  id_asignado: Id | null;
  id_ticket:   Id | null;
}

export interface TicketChatQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketChatSearchParams extends TicketChatQueryParams {
  texto_busqueda: string;
}
