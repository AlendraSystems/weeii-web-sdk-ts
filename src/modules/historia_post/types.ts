import type { WeeiiRecord, Id } from '../../types.js';

export interface HistoriaPost extends WeeiiRecord {
  id_historia: Id;
  cuerpo:      string | null;
  id_adjunto:  number | null;
  link:        string | null;
  // Live counters (default 0):
  vistas:      number;
  clics:       number;
  likes:       number;
  usuarios:    number;
  // Viewer-specific (only present when authenticated):
  like?:       boolean;
  visto?:      boolean;
}

export interface HistoriaPostQueryParams {
  id_historia: Id;
  id_ultimo?:  Id;
  filas?:      number;
}
