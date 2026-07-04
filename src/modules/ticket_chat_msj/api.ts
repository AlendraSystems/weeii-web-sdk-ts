/**
 * TicketChatMsj domain APIs.
 *
 * Replaces: `modulos/tickets/ticket_chat_msj/ticket_chat_msj.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  TicketChatMsj,
  TicketChatMsjQueryParams,
  TicketChatMsjSearchParams,
} from './types.js';

export type { TicketChatMsj } from './types.js';

export function ticketChatMsjPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj }>> {
  return request('ticket_chat_msj_q_id', params);
}

export function ticketChatMsjSearch(
  params: TicketChatMsjSearchParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_search', params);
}

export function ticketChatMsjPorIdSender(
  params: { id_sender: number } & TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_sender', params);
}

export function ticketChatMsjPorIdSenderConAdjunto(
  params: { id_sender: number } & TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_sender_con_adjunto', params);
}

export function ticketChatMsjPorIdTicket(
  params: { id_ticket: number } & TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_ticket', params);
}

export function ticketChatMsjPorIdTicketConAdjunto(
  params: { id_ticket: number } & TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_ticket_con_adjunto', params);
}

export function ticketChatMsjPorIdChat(
  params: TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_chat', params);
}

export function ticketChatMsjPorIdChatConAdjunto(
  params: TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_chat_con_adjunto', params);
}

export function ticketChatMsjPorIdChatUsr(
  params: { id_chat_usr: number } & TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_chat_usr', params);
}

export function ticketChatMsjPorIdUsuarioCanal(
  params: { id_usuario_canal: number } & TicketChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj[] }>> {
  return request('ticket_chat_msj_q_id_usuario_canal', params);
}

export function registrarTicketChatMsj(
  params: { id_chat: number; cuerpo: string },
): Promise<WeeiiIncomingMessage<{ ticket_chat_msj: TicketChatMsj }>> {
  return request('ticket_chat_msj_registrar', params);
}

export function ticketChatMsjVisto(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('ticket_chat_msj_visto', params);
}
