import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Historia extends WeeiiRecord {
  titulo:   string;
  id_img:   number | null;
  // Admin-only:
  visible?:                           boolean | null;
  publicada?:                         boolean | null;
  vigente?:                           boolean | null;
  timestamp_vigencia_inicio?:         Timestamp | null;
  timestamp_vigencia_terminacion?:    Timestamp | null;
}

export interface HistoriaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface HistoriaSearchParams extends HistoriaQueryParams {
  texto_busqueda: string;
}
