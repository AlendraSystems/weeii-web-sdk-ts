/**
 * TicketChatUsr domain APIs.
 *
 * Replaces: `modulos/tickets/ticket_chat_usr/ticket_chat_usr.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { TicketChatUsr, TicketChatUsrSearchParams } from './types.js';

export type { TicketChatUsr } from './types.js';

export function ticketChatUsrSearch(
  params: TicketChatUsrSearchParams,
): Promise<WeeiiIncomingMessage<{ ticket_chat_usr: TicketChatUsr[] }>> {
  return request('ticket_chat_usr_search', params);
}
