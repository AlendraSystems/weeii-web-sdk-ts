import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Plataforma extends WeeiiRecord {
  nombre:         string;
  descripcion:    string | null;
  activo:         boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface PlataformaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PlataformaSearchParams extends PlataformaQueryParams {
  texto_busqueda: string;
}
