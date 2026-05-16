import type { WeeiiRecord } from '../../types.js';

// TODO: add typed fields
export interface ProductoVariante extends WeeiiRecord {
  [key: string]: unknown;
}
