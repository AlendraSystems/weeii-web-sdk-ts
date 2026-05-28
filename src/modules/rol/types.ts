import type { WeeiiRecord } from '../../types.js';

export interface Rol extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
}
