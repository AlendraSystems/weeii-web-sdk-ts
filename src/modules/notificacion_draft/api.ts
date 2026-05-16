/**
 * NotificacionDraft domain APIs.
 *
 * Replaces: `modulos/notificaciones/notificacion_draft/notificacion_draft.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  NotificacionDraft,
  NotificacionDraftQueryParams,
  NotificacionDraftSearchParams,
} from './types.js';

export type { NotificacionDraft } from './types.js';

export function notificacionesDraft(
  params: NotificacionDraftQueryParams = {},
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft[] }>> {
  return request('notificacion_draft', params);
}

export function notificacionDraftSearch(
  params: NotificacionDraftSearchParams,
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft[] }>> {
  return request('notificacion_draft_search', params);
}

export function notificacionDraftPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft }>> {
  return request('notificacion_draft_q_id', params);
}

export function notificacionDraftPorTipo(
  params: { id_tipo_notificacion: number } & NotificacionDraftQueryParams,
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft[] }>> {
  return request('notificacion_draft_q_tipo', params);
}

export function notificacionesDraftPublicadas(
  params: NotificacionDraftQueryParams = {},
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft[] }>> {
  return request('notificacion_draft_q_publicado', params);
}

export function notificacionesDraftNoPublicadas(
  params: NotificacionDraftQueryParams = {},
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft[] }>> {
  return request('notificacion_draft_q_no_publicado', params);
}

export function registrarNotificacionDraft(
  params: { id_tipo_notificacion: number; titulo: string; cuerpo: string },
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft }>> {
  return request('notificacion_draft_registrar', params);
}

export function editarNotificacionDraft(
  params: { id: number } & Partial<Pick<NotificacionDraft, 'titulo' | 'cuerpo' | 'datos'>>,
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft }>> {
  return request('notificacion_draft_editar', params);
}

export function eliminarNotificacionDraft(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('notificacion_draft_eliminar', params);
}

export function publicarNotificacionDraft(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ notificacion_draft: NotificacionDraft }>> {
  return request('notificacion_draft_publicar', params);
}
