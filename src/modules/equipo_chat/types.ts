import type { WeeiiRecord, Id } from '../../types.js';

export interface EquipoChat extends WeeiiRecord {
  id_equipo:   Id;
  id_miembro:  Id | null;
  id_lider:    Id | null;
  n_mensajes:  number;
}

export interface EquipoChatQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatSearchParams extends EquipoChatQueryParams {
  texto_busqueda: string;
}
