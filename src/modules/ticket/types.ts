import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Ticket extends WeeiiRecord {
  titulo:         string;
  descripcion:    string | null;
  id_usuario:     Id;
  id_chat:        Id | null;
  id_asignado:    Id | null;
  abierto:        boolean;
  calificacion:   number | null;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface TicketQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TicketSearchParams extends TicketQueryParams {
  texto_busqueda: string;
}
