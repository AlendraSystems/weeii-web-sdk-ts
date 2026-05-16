import type { WeeiiRecord } from '../../types.js';

// TODO: add typed fields
export interface TipoMovimiento extends WeeiiRecord {
  [key: string]: unknown;
}
