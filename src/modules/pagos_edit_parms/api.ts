/**
 * PagosEditParms — payment method edit parameters.
 *
 * Single-channel module; returns editable parameters for payment methods.
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { PagosEditParmsResponse } from './types.js';

export function pagosEditParms(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<PagosEditParmsResponse>> {
  return request('pagos_edit_parms', params);
}
