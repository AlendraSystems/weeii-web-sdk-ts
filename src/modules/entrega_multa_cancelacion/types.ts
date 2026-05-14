import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface EntregaMultaCancelacion extends WeeiiRecord {
  id_entrega:  Id;
  id_usuario:  Id;
  monto:       number;
  motivo:      string | null;
  id_adjunto:  Id | null;
  insertado_en: Timestamp;
}

export interface EntregaMultaCancelacionQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaMultaCancelacionSearchParams extends EntregaMultaCancelacionQueryParams {
  texto_busqueda: string;
}
