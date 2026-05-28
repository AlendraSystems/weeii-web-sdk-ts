import type { WeeiiRecord, Id } from '../../types.js';

export interface NotificacionObj extends WeeiiRecord {
  id_usuario:      Id;
  id_notificacion: Id;
  ie_obj:          number | null;
  id_obj:          Id | null;
}

export interface NotificacionObjQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}
