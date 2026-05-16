/**
 * EquipoChat domain APIs.
 *
 * Replaces: `modulos/equipos/equipo_chat/equipo_chat.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EquipoChat,
  EquipoChatQueryParams,
  EquipoChatSearchParams,
} from './types.js';

export type { EquipoChat } from './types.js';

export function equipoChatPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ equipo_chat: EquipoChat }>> {
  return request('equipo_chat_q_id', params);
}

export function equipoChatSearch(
  params: EquipoChatSearchParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat: EquipoChat[] }>> {
  return request('equipo_chat_search', params);
}

export function equipoChatPorIdEquipo(
  params: { id_equipo: number } & EquipoChatQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat: EquipoChat[] }>> {
  return request('equipo_chat_q_id_equipo', params);
}

export function equipoChatPorIdUsuarioMiembro(
  params: { id_usuario: number } & EquipoChatQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat: EquipoChat[] }>> {
  return request('equipo_chat_q_id_usuario_miembro', params);
}

export function registrarEquipoChat(
  params: { id_equipo: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ equipo_chat: EquipoChat }>> {
  return request('equipo_chat_registrar', params);
}
