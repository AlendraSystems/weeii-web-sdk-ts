import type { WeeiiRecord, Id } from '../../types.js';

export interface EquipoChatUsr extends WeeiiRecord {
  id_equipo:                Id;
  id_chat:                  Id;
  id_usuario:               Id;
  n_mensajes:               number;
  id_ultimo_mensaje_visto:  Id | null;
  id_ultimo_mensaje_enviado: Id | null;
  // Own user only:
  silenciar?: boolean | null;
}

export interface EquipoChatUsrQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EquipoChatUsrSearchParams extends EquipoChatUsrQueryParams {
  texto_busqueda: string;
}
