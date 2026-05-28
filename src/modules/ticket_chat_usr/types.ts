import type { WeeiiRecord, Id } from '../../types.js';

export interface TicketChatUsr extends WeeiiRecord {
  id_usuario:                Id;
  id_chat:                   Id;
  id_usuario_canal:          Id;
  n_mensajes:                number;
  id_ultimo_mensaje_visto:   Id | null;
  id_ultimo_mensaje_enviado: Id | null;
  // Own user only:
  silenciado?: boolean | null;
}

export interface TicketChatUsrQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketChatUsrSearchParams extends TicketChatUsrQueryParams {
  texto_busqueda: string;
}
