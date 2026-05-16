/**
 * TipoNotificacion domain APIs.
 *
 * Replaces: `modulos/notificaciones/tipo_notificacion/tipo_notificacion.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  TipoNotificacion,
  TipoNotificacionQueryParams,
  TipoNotificacionSearchParams,
  EditarTipoNotificacionParams,
} from './types.js';

export type { TipoNotificacion } from './types.js';

export function tipoNotificacion(
  params: TipoNotificacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ tipo_notificacion: TipoNotificacion[] }>> {
  return request('tipo_notificacion', params);
}

export function tipoNotificacionSearch(
  params: TipoNotificacionSearchParams,
): Promise<WeeiiIncomingMessage<{ tipo_notificacion: TipoNotificacion[] }>> {
  return request('tipo_notificacion_search', params);
}

export function editarTipoNotificacion(
  params: EditarTipoNotificacionParams,
): Promise<WeeiiIncomingMessage<{ tipo_notificacion: TipoNotificacion }>> {
  return request('tipo_notificacion_editar', params);
}
