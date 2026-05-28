import type { WeeiiRecord, Id } from '../../types.js';

export interface HistoriaPost extends WeeiiRecord {
  id_historia: Id;
  contenido:   string | null;
  imagen:      string | null;
  publicado:   boolean;
  likes:       number;
}

export interface HistoriaPostQueryParams {
  id_historia: Id;
  id_ultimo?:  Id;
  filas?:      number;
}
