import type { WeeiiRecord, Timestamp } from '../../types.js';

export interface Uvt extends WeeiiRecord {
  id_usuario:   number;
  token:        string | null;
  expira_en:    Timestamp | null;
  insertado_en: Timestamp;
}

export interface UvtSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
}
