import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface NotificacionObj extends WeeiiRecord {
  id_notificacion: Id;
  id_usuario:      Id;
  leida:           boolean;
  insertado_en:    Timestamp;
  actualizado_en:  Timestamp;
}

export interface NotificacionObjQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}
