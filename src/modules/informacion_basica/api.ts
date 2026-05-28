import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { InformacionBasicaResponse } from './types.js';

export type { InformacionBasicaResponse } from './types.js';

export function informacionBasica(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<InformacionBasicaResponse>> {
  return request('informacion_basica', params);
}
