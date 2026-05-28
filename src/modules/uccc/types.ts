import type { WeeiiRecord, Timestamp, Id } from '../../types.js';

export interface Uccc extends WeeiiRecord {
  id_usuario:          Id;
  token:               string | null;
  duracion:            number;
  timestamp_caducidad: Timestamp | null;
}

export interface UcccSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
}
