/**
 * TicketChat domain APIs.
 *
 * Replaces: `modulos/tickets/ticket_chat/ticket_chat.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  TicketChat,
  TicketChatQueryParams,
  TicketChatSearchParams,
} from './types.js';

export type { TicketChat } from './types.js';

export function ticketChats(
  params: TicketChatQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat[] }>> {
  return request('ticket_chat', params);
}

export function ticketChatSearch(
  params: TicketChatSearchParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat[] }>> {
  return request('ticket_chat_search', params);
}

export function ticketChatPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat }>> {
  return request('ticket_chat_q_id', params);
}

export function ticketChatPorIdTicket(
  params: { id_ticket: number } & TicketChatQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat[] }>> {
  return request('ticket_chat_q_id_ticket', params);
}

export function ticketChatsSinAsignar(
  params: TicketChatQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat[] }>> {
  return request('ticket_chat_q_sin_asignar', params);
}

export function ticketChatsSinTicket(
  params: TicketChatQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat[] }>> {
  return request('ticket_chat_q_sin_ticket', params);
}

export function ticketChatPorIdUsuario(
  params: { id_usuario: number } & TicketChatQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat[] }>> {
  return request('ticket_chat_q_id_usuario', params);
}

export function miTicketChat(
  params: TicketChatQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket_chat: TicketChat }>> {
  return request('ticket_chat_q_mi_chat', params);
}
