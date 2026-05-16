/**
 * EquipoChatMsj domain APIs.
 *
 * Replaces: `modulos/equipos/equipo_chat_msj/equipo_chat_msj.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EquipoChatMsj,
  EquipoChatMsjQueryParams,
  EquipoChatMsjSearchParams,
} from './types.js';

export type { EquipoChatMsj } from './types.js';

export function equipoChatMsjPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ equipo_chat_msj: EquipoChatMsj }>> {
  return request('equipo_chat_msj_q_id', params);
}

export function equipoChatMsjSearch(
  params: EquipoChatMsjSearchParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_msj: EquipoChatMsj[] }>> {
  return request('equipo_chat_msj_search', params);
}

export function equipoChatMsjPorIdChat(
  params: EquipoChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_msj: EquipoChatMsj[] }>> {
  return request('equipo_chat_msj_q_id_chat', params);
}

export function equipoChatMsjPorIdChatUsr(
  params: { id_chat_usr: number } & EquipoChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_msj: EquipoChatMsj[] }>> {
  return request('equipo_chat_msj_q_id_chat_usr', params);
}

export function equipoChatMsjPorIdUsuario(
  params: { id_usuario: number } & EquipoChatMsjQueryParams,
): Promise<WeeiiIncomingMessage<{ equipo_chat_msj: EquipoChatMsj[] }>> {
  return request('equipo_chat_msj_q_id_usuario', params);
}

export function registrarEquipoChatMsj(
  params: { id_chat: number; mensaje: string },
): Promise<WeeiiIncomingMessage<{ equipo_chat_msj: EquipoChatMsj }>> {
  return request('equipo_chat_msj_registrar', params);
}

export function equipoChatMsjVisto(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('equipo_chat_msj_visto', params);
}
