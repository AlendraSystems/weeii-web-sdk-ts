import type { WeeiiRecord } from '../../types.js';

// TODO: add typed fields
export interface Etiqueta extends WeeiiRecord {
  [key: string]: unknown;
}
