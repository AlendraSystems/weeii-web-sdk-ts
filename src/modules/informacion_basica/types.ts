import type { WeeiiRecord, Timestamp } from '../../types.js';

export interface InformacionBasica extends WeeiiRecord {
  clave:        string;
  valor:        string | null;
  insertado_en: Timestamp;
}
