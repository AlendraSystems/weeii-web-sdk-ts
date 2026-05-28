import type { WeeiiRecord, Id } from '../../types.js';

export interface Banner extends WeeiiRecord {
  titulo:      string;
  descripcion: string | null;
  id_img:      number | null;
  link:        string | null;
  // Live counters (default 0):
  vistas:      number;
  clics:       number;
  likes:       number;
  usuarios:    number;
}

export interface BannerQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface BannerSearchParams extends BannerQueryParams {
  texto_busqueda: string;
}
