import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Cliente extends WeeiiRecord {
  id_usuario:     Id;
  id_negocio:     Id | null;
  notas:          string | null;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}
