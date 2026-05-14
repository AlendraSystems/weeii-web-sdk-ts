import type { WeeiiRecord, Timestamp } from '../../types.js';

export interface Rol extends WeeiiRecord {
  nombre:        string;
  descripcion:   string | null;
  insertado_en:  Timestamp;
}
