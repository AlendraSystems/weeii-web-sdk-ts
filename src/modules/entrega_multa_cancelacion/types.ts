import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaMultaCancelacion extends WeeiiRecord {
  id_entrega:        Id;
  id_cliente:        Id;
  id_repartidor:     Id;
  id_estatus_entrega: number;
  // Client/admin (optional):
  monto_base?:       number | null;
  multa_porcentaje?: number | null;
  multa_fija?:       number | null;
  multa_aplicada?:   number | null;
  // Driver/admin (optional):
  cuota_repartidor_porcentaje?: number | null;
  cuota_repartidor?:            number | null;
}

export interface EntregaMultaCancelacionQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaMultaCancelacionSearchParams extends EntregaMultaCancelacionQueryParams {
  texto_busqueda: string;
}
