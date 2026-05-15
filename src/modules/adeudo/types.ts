import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Adeudo extends WeeiiRecord {
  id_usuario:     Id;
  id_responsable: Id | null;
  monto:          number;
  concepto:       string | null;
  insertado_en:   Timestamp;
}

export interface AdeudoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface AdeudoSearchParams extends AdeudoQueryParams {
  texto_busqueda: string;
}
