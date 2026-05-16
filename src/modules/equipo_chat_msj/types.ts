import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EquipoChatMsj extends WeeiiRecord {
  id_chat:        Id;
  id_chat_usr:    Id;
  id_usuario:     Id;
  mensaje:        string;
  visto:          boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface EquipoChatMsjQueryParams {
  id_chat:    Id;
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatMsjSearchParams extends EquipoChatMsjQueryParams {
  texto_busqueda: string;
}
