import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaPlantilla extends WeeiiRecord {
  id_cliente:   Id;
  nombre:       string;
  codigo_grupo: string | null;
  id_paquete:   Id | null;
  id_seguro:    Id | null;
  id_tipo_pago: Id | null;
  es_default:   boolean;
}

export interface EntregaPlantillaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaPlantillaSearchParams extends EntregaPlantillaQueryParams {
  texto_busqueda: string;
}

export interface EntregaPlantillaGeoParams {
  latitud:  number;
  longitud: number;
}
