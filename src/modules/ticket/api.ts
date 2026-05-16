/**
 * Ticket (support ticket) domain APIs.
 *
 * Replaces: `modulos/tickets/ticket/ticket.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Ticket,
  TicketQueryParams,
  TicketSearchParams,
} from './types.js';

export type { Ticket } from './types.js';

export function tickets(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket', params);
}

export function ticketSearch(
  params: TicketSearchParams,
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_search', params);
}

export function ticketPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_q_id', params);
}

export function ticketPorIdUsuario(
  params: { id_usuario: number } & TicketQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_id_usuario', params);
}

export function ticketPorIdUsuarioAbierto(
  params: { id_usuario: number } & TicketQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_id_usuario_abierto', params);
}

export function ticketPorIdChat(
  params: { id_chat: number },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_q_id_chat', params);
}

export function ticketPorIdAsignado(
  params: { id_asignado: number } & TicketQueryParams,
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_id_asignado', params);
}

export function ticketsAsignados(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_asignado', params);
}

export function ticketsSinAsignar(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_sin_asignar', params);
}

export function ticketsAbiertos(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_abierto', params);
}

export function ticketsCerrados(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_cerrado', params);
}

export function ticketsAsignadosAbiertos(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_asignado_abierto', params);
}

export function ticketsAsignadosCerrados(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_asignado_cerrado', params);
}

export function ticketsSinAsignarAbiertos(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_sin_asignar_abierto', params);
}

export function ticketsSinAsignarCerrados(
  params: TicketQueryParams = {},
): Promise<WeeiiIncomingMessage<{ ticket: Ticket[] }>> {
  return request('ticket_q_sin_asignar_cerrado', params);
}

export function registrarTicket(
  params: { titulo: string; descripcion?: string },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_registrar', params);
}

export function ticketAutoAsignar(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_auto_asignar', params);
}

export function soltarTicket(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_soltar', params);
}

export function cerrarTicket(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_cerrar', params);
}

export function calificarTicket(
  params: { id: number; calificacion: number },
): Promise<WeeiiIncomingMessage<{ ticket: Ticket }>> {
  return request('ticket_calificacion', params);
}
