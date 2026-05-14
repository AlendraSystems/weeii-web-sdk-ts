/**
 * Weeii wire protocol field names and response codes.
 *
 * The server uses Spanish field names — this file is the single source of truth
 * for those mappings so the rest of the codebase can use the typed schema.
 */
import type { ProtocolSchema } from '@silasdevs/transport';

export const WEEII_PROTOCOL: ProtocolSchema = {
  fields: {
    requestChannel:  'interfaz',
    responseChannel: 'interfaz',
    messageId:       'id_mensaje',
    code:            'codigo',
    description:     'descripcion',
    payload:         'datos',
    body:            'datos',
  },
  codes: {
    success: 'OK',
    interim: 'PROCESANDO',
    error:   ['ERROR', 'NO_AUTORIZADO', 'NO_ENCONTRADO', 'CONFLICTO'],
  },
};
