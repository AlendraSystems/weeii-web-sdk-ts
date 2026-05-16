import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EquipoChatUsr extends WeeiiRecord {
  id_chat:        Id;
  id_usuario:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface EquipoChatUsrQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatUsrSearchParams extends EquipoChatUsrQueryParams {
  texto_busqueda: string;
}
