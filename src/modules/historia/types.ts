import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Historia extends WeeiiRecord {
  titulo:         string;
  descripcion:    string | null;
  imagen:         string | null;
  publicado:      boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface HistoriaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface HistoriaSearchParams extends HistoriaQueryParams {
  texto_busqueda: string;
}
