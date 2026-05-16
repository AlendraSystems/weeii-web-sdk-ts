import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface HistoriaPost extends WeeiiRecord {
  id_historia:    Id;
  contenido:      string | null;
  imagen:         string | null;
  publicado:      boolean;
  likes:          number;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface HistoriaPostQueryParams {
  id_historia: Id;
  id_ultimo?:  Id;
  filas?:      number;
}
