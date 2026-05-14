/**
 * EntregaMensaje domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_mensaje/entrega_mensaje.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaMensaje,
  EntregaMensajeQueryParams,
  EntregaMensajeSearchParams,
} from './types.js';

export type { EntregaMensaje } from './types.js';

export function accederConversacion(
  params: { id_entrega?: number } = {},
): Promise<WeeiiIncomingMessage<{ entrega_mensaje: EntregaMensaje[] }>> {
  return request('entrega_mensaje_acceder_conversacion', params);
}

export function entregaMensajeSearch(
  params: EntregaMensajeSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_mensaje: EntregaMensaje[] }>> {
  return request('entrega_mensaje_search', params);
}

export function registrarMensaje(
  params: {
    cuerpo: string;
    id_entrega?: number;
    id_adjunto?: number | Record<string, unknown> | null;
  },
): Promise<WeeiiIncomingMessage<{ entrega_mensaje: EntregaMensaje }>> {
  return request('entrega_mensaje_registrar', params);
}

export function mensajesEntrega(
  params: { id_entrega: number } & EntregaMensajeQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_mensaje: EntregaMensaje[] }>> {
  return request('entrega_mensaje_mensajes_entrega', params);
}

export function ultimoMensajeEntrega(
  params: { id_entrega?: number } = {},
): Promise<WeeiiIncomingMessage<{ entrega_mensaje: EntregaMensaje }>> {
  return request('entrega_mensaje_ultimo_mensaje_entrega', params);
}
