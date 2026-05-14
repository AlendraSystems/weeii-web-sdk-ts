/**
 * EntregaUsuarioCalificacion domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_usuario_calificacion/entrega_usuario_calificacion.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaUsuarioCalificacion,
  EntregaUsuarioCalificacionSearchParams,
} from './types.js';

export type { EntregaUsuarioCalificacion } from './types.js';

export function calificacionUsuario(
  params: { id_usuario: number },
): Promise<WeeiiIncomingMessage<{ entrega_usuario_calificacion: EntregaUsuarioCalificacion }>> {
  return request('entrega_usuario_calificacion_usuario', params);
}

export function entregaUsuarioCalificacionSearch(
  params: EntregaUsuarioCalificacionSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_usuario_calificacion: EntregaUsuarioCalificacion[] }>> {
  return request('entrega_usuario_calificacion_search', params);
}
