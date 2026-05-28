import type { WeeiiRecord, Id } from '../../types.js';

export interface EstatusEntrega extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
}

export interface EstatusEntregaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EstatusEntregaSearchParams extends EstatusEntregaQueryParams {
  texto_busqueda: string;
}
