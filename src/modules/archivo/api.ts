import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { ArchivoSubidaParams, ArchivoSubidaResponse } from './types.js';

export type { ArchivoSubidaParams, ArchivoSubidaResponse } from './types.js';

export function solicitarSubidaDeArchivo(
  params: ArchivoSubidaParams = {},
): Promise<WeeiiIncomingMessage<ArchivoSubidaResponse>> {
  return request('solicitar_subida_de_archivo', params);
}
