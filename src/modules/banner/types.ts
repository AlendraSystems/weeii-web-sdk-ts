import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Banner extends WeeiiRecord {
  titulo:         string;
  descripcion:    string | null;
  imagen:         string | null;
  url:            string | null;
  activo:         boolean;
  publicado:      boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
}

export interface BannerQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface BannerSearchParams extends BannerQueryParams {
  texto_busqueda: string;
}
