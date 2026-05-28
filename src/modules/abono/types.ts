import type { WeeiiRecord, Id } from '../../types.js';

export interface Abono extends WeeiiRecord {
  id_usuario:     Id;
  id_responsable: Id | null;
  monto:          number;
  concepto:       string | null;
}

export interface AbonoQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface AbonoSearchParams extends AbonoQueryParams {
  texto_busqueda: string;
}
