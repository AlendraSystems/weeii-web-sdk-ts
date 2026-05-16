import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface TerminalExterna extends WeeiiRecord {
  id_usuario:     Id;
  monto:          number;
  referencia:     string | null;
  id_estatus:     Id;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface TerminalExternaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TerminalExternaSearchParams extends TerminalExternaQueryParams {
  texto_busqueda: string;
}
