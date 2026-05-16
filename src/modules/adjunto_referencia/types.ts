import type { WeeiiRecord } from '../../types.js';

export interface AdjuntoReferencia extends WeeiiRecord {
  id_adjunto:   number;
  id_entidad:   number;
  id_referencia: number;
}

export interface AdjuntoReferenciaSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
  profundidad?:   number[];
}
