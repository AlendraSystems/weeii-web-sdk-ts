import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Orden extends WeeiiRecord {
  id_entrega:     Id | null;
  id_negocio:     Id | null;
  id_usuario:     Id;
  total:          number;
  estado:         string;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}
