import type { WeeiiRecord, Timestamp, Id } from '../../types.js';

export interface Uve extends WeeiiRecord {
  id_usuario:          Id;
  token:               string | null;
  email:               string;
  duracion:            number;
  timestamp_caducidad: Timestamp | null;
}

export interface UveSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
}
