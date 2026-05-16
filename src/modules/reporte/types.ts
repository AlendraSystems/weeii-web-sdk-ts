import type { WeeiiRecord } from '../../types.js';

// TODO: add typed fields
export interface Reporte extends WeeiiRecord {
  [key: string]: unknown;
}
