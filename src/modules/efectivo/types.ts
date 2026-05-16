import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Efectivo extends WeeiiRecord {
  id_usuario:     Id;
  monto:          number;
  referencia:     string | null;
  id_estatus:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface EfectivoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface EfectivoSearchParams extends EfectivoQueryParams {
  texto_busqueda: string;
}
