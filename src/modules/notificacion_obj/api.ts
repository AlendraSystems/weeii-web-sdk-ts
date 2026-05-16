/**
 * NotificacionObj domain APIs.
 *
 * Replaces: `modulos/notificaciones/notificacion_obj/notificacion_obj.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { NotificacionObj, NotificacionObjQueryParams } from './types.js';

export type { NotificacionObj } from './types.js';

export function misNotificaciones(
  params: NotificacionObjQueryParams = {},
): Promise<WeeiiIncomingMessage<{ notificacion_obj: NotificacionObj[] }>> {
  return request('notificacion_obj_q_mias', params);
}
