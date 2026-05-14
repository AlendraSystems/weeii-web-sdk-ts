import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Notificacion extends WeeiiRecord {
  id_usuario:   Id;
  tipo:         string;
  titulo:       string;
  cuerpo:       string | null;
  leida:        boolean;
  insertado_en: Timestamp;
}
