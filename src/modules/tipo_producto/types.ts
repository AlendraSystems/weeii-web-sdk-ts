import type { WeeiiRecord } from '../../types.js';

// TODO: add typed fields
export interface TipoProducto extends WeeiiRecord {
  [key: string]: unknown;
}
