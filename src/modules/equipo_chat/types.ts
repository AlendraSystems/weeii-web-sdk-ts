import type { WeeiiRecord, Id } from '../../types.js';

export interface EquipoChat extends WeeiiRecord {
  id_equipo: Id;
  nombre:    string;
}

export interface EquipoChatQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatSearchParams extends EquipoChatQueryParams {
  texto_busqueda: string;
}
