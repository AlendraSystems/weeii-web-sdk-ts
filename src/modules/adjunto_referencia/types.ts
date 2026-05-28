import type { WeeiiRecord, Id } from '../../types.js';

export interface AdjuntoReferencia extends WeeiiRecord {
  id_adjunto:           Id;
  id_entidad_referente: number;
  id_referente:         Id;
  referencias:          Record<string, unknown> | null;
}

export interface AdjuntoReferenciaSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
  profundidad?:   number[];
}
