import type { WeeiiRecord } from '../../types.js';

// TODO: add typed fields
export interface Tarjeta extends WeeiiRecord {
  [key: string]: unknown;
}
