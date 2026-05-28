import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaEvidencia extends WeeiiRecord {
  id_entrega:   Id;
  id_usuario:   Id;
  id_adjunto:   Id | null;
  cuerpo:       string;
  latitud:      number | null;
  longitud:     number | null;
}

export interface EntregaEvidenciaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaEvidenciaSearchParams extends EntregaEvidenciaQueryParams {
  texto_busqueda: string;
}
