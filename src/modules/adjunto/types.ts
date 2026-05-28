import type { WeeiiRecord, Id } from '../../types.js';

export interface Adjunto extends WeeiiRecord {
  id_tipo_adjunto: Id;
  titulo:          string | null;
  contenido:       string | null;
  public_id:       string | null;
  url:             string | null;
}

export interface AdjuntoSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
  profundidad?:   number[];
}
