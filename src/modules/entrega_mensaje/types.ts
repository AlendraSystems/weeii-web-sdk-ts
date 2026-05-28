import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaMensaje extends WeeiiRecord {
  id_entrega:    Id;
  id_usuario:    Id | null;
  nombre_usuario: string | null;
  cuerpo:        string;
  id_adjunto:    Id | null;
}

export interface EntregaMensajeQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaMensajeSearchParams extends EntregaMensajeQueryParams {
  texto_busqueda: string;
}
