import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EntregaMultaAborcion extends WeeiiRecord {
  id_entrega:  Id;
  id_usuario:  Id;
  monto:       number;
  motivo:      string | null;
  id_adjunto:  Id | null;
  insertado_en: Timestamp;
}

export interface EntregaMultaAborcionQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaMultaAborcionSearchParams extends EntregaMultaAborcionQueryParams {
  texto_busqueda: string;
}
