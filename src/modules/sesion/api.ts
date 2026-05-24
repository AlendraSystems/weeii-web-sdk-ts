/**
 * Session domain APIs.
 *
 * Replaces: `modulos/sesiones/sesion/sesion.js`
 */
import { request, fire } from '../../api.js';
import type { WeeiiIncomingMessage, WeeiiFireCallback } from '../../api.js';
import { saveSessionToken, clearSession, savePushToken } from '../../session-storage.js';
import type {
  Sesion,
  SesionQueryParams,
  SesionSearchParams,
  IniciarSesionConTelefonoParams,
  ConfirmarSesionParams,
  ResumirSesionParams,
  AsignarTokenPushParams,
} from './types.js';

export type { Sesion } from './types.js';
export type {
  IniciarSesionConTelefonoParams,
  IniciarSesionConTelefonoInternacionalParams,
  IniciarSesionConTelefonoPartsParams,
} from './types.js';
export type { WeeiiIncomingMessage, WeeiiFireCallback };

// ── Query ───────────────────────────────────────────────────────────────────

export function misSesiones(
  params: SesionQueryParams = {},
): Promise<WeeiiIncomingMessage<{ sesion: Sesion[] }>> {
  return request('mis_sesiones', params);
}

export function sesionSearch(
  params: SesionSearchParams,
): Promise<WeeiiIncomingMessage<{ sesion: Sesion[] }>> {
  return request('sesion_search', params);
}

export function sesionPorIdUsuario(
  params: SesionQueryParams & { id_usuario: number },
): Promise<WeeiiIncomingMessage<{ sesion: Sesion[] }>> {
  return request('sesion_q_id_usuario', params);
}

// ── Auth ────────────────────────────────────────────────────────────────────

export function iniciarSesionConTelefono(
  params: IniciarSesionConTelefonoParams,
  callback: WeeiiFireCallback<{ id_sesion: number }>,
): () => void {
  return fire('iniciar_sesion_con_telefono', params, callback);
}

export function iniciarSesionConTelefonoTesting(
  params: IniciarSesionConTelefonoParams,
  callback: WeeiiFireCallback<{ id_sesion: number }>,
): () => void {
  return fire('iniciar_sesion_con_telefono_testing', params, callback);
}

export function confirmarSesion(
  params: ConfirmarSesionParams,
  callback: WeeiiFireCallback<{ sesion: Sesion }>,
): () => void {
  return fire<{ sesion: Sesion }>('confirmar_sesion', params, (msg) => {
    if (!msg.isInterim) {
      const token = (msg.data?.sesion as Sesion | undefined)?.token;
      if (token) saveSessionToken(token);
    }
    return callback(msg);
  });
}

export async function resumirSesion(
  params: ResumirSesionParams,
): Promise<WeeiiIncomingMessage<{ sesion: Sesion }>> {
  const msg = await request<{ sesion: Sesion }>('resumir_sesion', params);
  const token = (msg.data.sesion as Sesion | undefined)?.token;
  if (token) saveSessionToken(token);
  return msg;
}

export async function terminarSesion(): Promise<WeeiiIncomingMessage> {
  const msg = await request('terminar_sesion');
  clearSession();
  return msg;
}

export async function asignarTokenPush(
  params: AsignarTokenPushParams,
): Promise<WeeiiIncomingMessage> {
  const msg = await request('asignar_token_push', params);
  savePushToken(params.token_push);
  return msg;
}
