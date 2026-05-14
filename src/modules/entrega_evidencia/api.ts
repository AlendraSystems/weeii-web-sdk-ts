/**
 * EntregaEvidencia domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_evidencia/entrega_evidencia.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaEvidencia,
  EntregaEvidenciaQueryParams,
  EntregaEvidenciaSearchParams,
} from './types.js';

export type { EntregaEvidencia } from './types.js';

export function registrarEvidencia(
  params: {
    cuerpo: string;
    id_entrega?: number;
    id_adjunto?: number | Record<string, unknown> | null;
    latitud?: number;
    longitud?: number;
  },
): Promise<WeeiiIncomingMessage<{ entrega_evidencia: EntregaEvidencia }>> {
  return request('entrega_evidencia_registrar', params);
}

export function entregaEvidenciaSearch(
  params: EntregaEvidenciaSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_evidencia: EntregaEvidencia[] }>> {
  return request('entrega_evidencia_search', params);
}

export function evidenciasEntrega(
  params: { id_entrega: number } & EntregaEvidenciaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_evidencia: EntregaEvidencia[] }>> {
  return request('entrega_evidencia_evidencias_entrega', params);
}
