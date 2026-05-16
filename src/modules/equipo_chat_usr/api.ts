/**
 * EquipoChatUsr domain APIs.
 *
 * Replaces: `modulos/equipos/equipo_chat_usr/equipo_chat_usr.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EquipoChatUsr,
  EquipoChatUsrQueryParams,
  EquipoChatUsrSearchParams,
} from './types.js';

export type { EquipoChatUsr } from './types.js';

export function equipoChatUsrPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ equipo_chat_usr: EquipoChatUsr }>> {
  return request('equipo_chat_usr_q_id', params);
}

export function equipoChatUsrSearch(
  params: EquipoChatUsrSearchParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_usr: EquipoChatUsr[] }>> {
  return request('equipo_chat_usr_search', params);
}

export function equipoChatUsrPorIdChat(
  params: { id_chat: number } & EquipoChatUsrQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_usr: EquipoChatUsr[] }>> {
  return request('equipo_chat_usr_q_id_chat', params);
}

export function equipoChatUsrPorIdUsuario(
  params: { id_usuario: number } & EquipoChatUsrQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_usr: EquipoChatUsr[] }>> {
  return request('equipo_chat_usr_q_id_usuario', params);
}
