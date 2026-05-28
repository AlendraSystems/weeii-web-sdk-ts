import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaEvidencia extends WeeiiRecord {
  id_entrega:   Id;
  id_usuario:   Id;
  descripcion:  string | null;
  id_adjunto:   Id | null;
}

export interface EntregaEvidenciaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaEvidenciaSearchParams extends EntregaEvidenciaQueryParams {
  texto_busqueda: string;
}
