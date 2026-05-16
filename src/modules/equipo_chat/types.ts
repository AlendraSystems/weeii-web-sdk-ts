import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EquipoChat extends WeeiiRecord {
  id_equipo:      Id;
  nombre:         string;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface EquipoChatQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatSearchParams extends EquipoChatQueryParams {
  texto_busqueda: string;
}
