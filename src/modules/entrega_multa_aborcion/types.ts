import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaMultaAborcion extends WeeiiRecord {
  id_entrega:        Id;
  id_cliente:        Id;
  id_repartidor:     Id;
  id_estatus_entrega: number;
  // Driver/admin (optional):
  monto_base?:       number | null;
  multa_porcentaje?: number | null;
  multa_fija?:       number | null;
  multa_aplicada?:   number | null;
  // Client/admin (optional):
  cuota_repartidor_porcentaje?: number | null;
  cuota_repartidor?:            number | null;
}

export interface EntregaMultaAborcionQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaMultaAborcionSearchParams extends EntregaMultaAborcionQueryParams {
  texto_busqueda: string;
}
