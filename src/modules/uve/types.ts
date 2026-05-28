import type { WeeiiRecord, Timestamp } from '../../types.js';

export interface Uve extends WeeiiRecord {
  id_usuario: number;
  token:      string | null;
  expira_en:  Timestamp | null;
}

export interface UveSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
}
