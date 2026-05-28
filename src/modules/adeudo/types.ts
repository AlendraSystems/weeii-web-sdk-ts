import type { WeeiiRecord, Id } from '../../types.js';

export interface Adeudo extends WeeiiRecord {
  id_usuario:          Id;
  id_saldo:            Id;
  id_responsable:      Id | null;
  monto:               number;
  saldo_previo:        number;
  saldo_posterior:     number;
  id_forma_pago_origen: number | null;
  nombre_origen:       string | null;
  folio_1:             string | null;
  folio_2:             string | null;
  evidencia_1:         string | null;
  evidencia_2:         string | null;
  motivo:              string | null;
  notas:               string | null;
}

export interface AdeudoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface AdeudoSearchParams extends AdeudoQueryParams {
  texto_busqueda: string;
}
