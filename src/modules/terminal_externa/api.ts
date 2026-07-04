/**
 * TerminalExterna domain APIs.
 *
 * Replaces: `modulos/pagos/terminal_externa/terminal_externa.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  TerminalExterna,
  TerminalExternaQueryParams,
  TerminalExternaSearchParams,
} from './types.js';

export type { TerminalExterna } from './types.js';

export function terminalExternas(
  params: TerminalExternaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ terminal_externa: TerminalExterna[] }>> {
  return request('terminal_externa', params);
}

export function terminalExternaSearch(
  params: TerminalExternaSearchParams,
): Promise<WeeiiIncomingMessage<{ terminal_externa: TerminalExterna[] }>> {
  return request('terminal_externa_search', params);
}

export function terminalExternaPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ terminal_externa: TerminalExterna }>> {
  return request('terminal_externa_q_id', params);
}

export function terminalExternaPorEstatus(
  params: { estatus: number } & TerminalExternaQueryParams,
): Promise<WeeiiIncomingMessage<{ terminal_externa: TerminalExterna[] }>> {
  return request('terminal_externa_q_estatus', params);
}

export function misPagosTerminalExterna(
  params: TerminalExternaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ terminal_externa: TerminalExterna[] }>> {
  return request('terminal_externa_mis_pagos', params);
}
