import type { WeeiiRecord } from '../../types.js';

export interface Adjunto extends WeeiiRecord {
  id_tipo_adjunto: number;
  url:             string;
  nombre:          string | null;
  mime:            string | null;
  tamano:          number | null;
}

export interface AdjuntoSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
  profundidad?:   number[];
}
