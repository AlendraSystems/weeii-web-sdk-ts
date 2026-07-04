/**
 * Validacion domain APIs.
 *
 * Replaces: `modulos/tramites/validacion/validacion.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Validacion,
  ValidacionQueryParams,
  ValidacionSearchParams,
} from './types.js';

export type { Validacion } from './types.js';

export function validaciones(
  params: ValidacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion', params);
}

export function validacionSearch(
  params: ValidacionSearchParams,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_search', params);
}

export function validacionPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ validacion: Validacion }>> {
  return request('validacion_q_id', params);
}

export function validacionPorIdTramite(
  params: { id_tramite: number } & ValidacionQueryParams,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_q_id_tramite', params);
}

export function validacionPorFacultad(
  params: { facultad: string } & ValidacionQueryParams,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_q_facultad', params);
}

export function validacionPorIdUsuario(
  params: { id_usuario: number } & ValidacionQueryParams,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_q_id_usuario', params);
}

export function validacionPorFacultadIdUsuario(
  params: { facultad: string; id_usuario: number } & ValidacionQueryParams,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_q_facultad_id_usuario', params);
}

export function validacionPorFacultadIdUsuarioValidada(
  params: { facultad: string; id_usuario: number } & ValidacionQueryParams,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_q_facultad_id_usuario_validada', params);
}

export function misValidaciones(
  params: ValidacionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ validacion: Validacion[] }>> {
  return request('validacion_mis_validaciones', params);
}

export function registrarValidacion(
  params: { id_tramite: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ validacion: Validacion }>> {
  return request('validacion_registrar', params);
}

export function validar(
  params: { id_validacion: number; estatus: boolean },
): Promise<WeeiiIncomingMessage<{ validacion: Validacion }>> {
  return request('validacion_validar', params);
}

export function validarUsuarioFacultadTesting(
  params: { facultad: string; id_usuario: number },
): Promise<WeeiiIncomingMessage<{ validacion: Validacion }>> {
  return request('validacion_validar_usuario_facultad_testing', params);
}
