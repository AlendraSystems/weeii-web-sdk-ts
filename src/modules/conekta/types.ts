import type { WeeiiRecord, Id } from '../../types.js';

export interface Conekta extends WeeiiRecord {
  id_usuario: Id;
  monto:      number;
  referencia: string | null;
  token:      string | null;
  id_estatus: Id;
}

export interface ConektaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface ConektaSearchParams extends ConektaQueryParams {
  texto_busqueda: string;
}
