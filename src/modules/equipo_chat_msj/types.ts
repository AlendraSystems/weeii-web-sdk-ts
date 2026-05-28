import type { WeeiiRecord, Id } from '../../types.js';

export interface EquipoChatMsj extends WeeiiRecord {
  id_equipo:      Id;
  id_chat:        Id;
  id_usuario:     Id;
  n_mensaje_chat: number;
  n_mensaje_usr:  number;
  cuerpo:         string | null;
  id_adjunto:     Id | null;
  latitud:        number | null;
  longitud:       number | null;
}

export interface EquipoChatMsjQueryParams {
  id_chat:    Id;
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatMsjSearchParams extends EquipoChatMsjQueryParams {
  texto_busqueda: string;
}
