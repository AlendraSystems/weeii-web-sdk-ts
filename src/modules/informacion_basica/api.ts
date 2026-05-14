import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { InformacionBasica } from './types.js';

export type { InformacionBasica } from './types.js';

export function informacionBasica(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ informacion_basica: InformacionBasica[] }>> {
  return request('informacion_basica', params);
}
