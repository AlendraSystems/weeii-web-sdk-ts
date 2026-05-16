/**
 * Solicitud (workflow request) domain APIs.
 *
 * Replaces: `modulos/tramites/solicitud/solicitud.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Solicitud,
  SolicitudQueryParams,
  SolicitudSearchParams,
} from './types.js';

export type { Solicitud } from './types.js';

export function solicitudes(
  params: SolicitudQueryParams = {},
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud', params);
}

export function solicitudSearch(
  params: SolicitudSearchParams,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_search', params);
}

export function misSolicitudes(
  params: SolicitudQueryParams = {},
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_mis_solicitudes', params);
}

export function misPendientesSolicitud(
  params: SolicitudQueryParams = {},
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_mis_pendientes', params);
}

export function solicitudPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud }>> {
  return request('solicitud_q_id', params);
}

export function solicitudPorIdTramite(
  params: { id_tramite: number } & SolicitudQueryParams,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_q_id_tramite', params);
}

export function solicitudPorFacultad(
  params: { facultad: string } & SolicitudQueryParams,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_q_facultad', params);
}

export function solicitudPorIdUsuario(
  params: { id_usuario: number } & SolicitudQueryParams,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_q_id_usuario', params);
}

export function solicitudPorIdValidador(
  params: { id_validador: number } & SolicitudQueryParams,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_q_id_validador', params);
}

export function solicitudValidadas(
  params: SolicitudQueryParams = {},
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud[] }>> {
  return request('solicitud_q_validado', params);
}

export function registrarSolicitud(
  params: { id_tramite: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud }>> {
  return request('solicitud_registrar', params);
}

export function tomarSolicitud(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud }>> {
  return request('solicitud_tomar', params);
}

export function solicitudAutoAsignar(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud }>> {
  return request('solicitud_auto_asignar', params);
}

export function validarSolicitud(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ solicitud: Solicitud }>> {
  return request('solicitud_validar', params);
}
