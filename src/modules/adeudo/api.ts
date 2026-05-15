/**
 * Adeudo domain APIs.
 *
 * Replaces: `modulos/pagos/adeudo/adeudo.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Adeudo, AdeudoQueryParams, AdeudoSearchParams } from './types.js';

export type { Adeudo } from './types.js';

export function adeudos(
  params: AdeudoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo[] }>> {
  return request('adeudo', params);
}

export function adeudoSearch(
  params: AdeudoSearchParams,
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo[] }>> {
  return request('adeudo_search', params);
}

export function adeudoQId(
  params: { id: number } & AdeudoQueryParams,
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo }>> {
  return request('adeudo_q_id', params);
}

export function adeudoQIdUsuario(
  params: { id_usuario: number } & AdeudoQueryParams,
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo[] }>> {
  return request('adeudo_q_id_usuario', params);
}

export function adeudoQIdResponsable(
  params: { id_responsable: number } & AdeudoQueryParams,
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo[] }>> {
  return request('adeudo_q_id_responsable', params);
}

export function misAdeudos(
  params: AdeudoQueryParams = {},
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo[] }>> {
  return request('adeudo_q_mios', params);
}

export function editarAdeudo(
  params: { id: number } & Partial<Adeudo>,
): Promise<WeeiiIncomingMessage<{ adeudo: Adeudo }>> {
  return request('adeudo_editar', params);
}
