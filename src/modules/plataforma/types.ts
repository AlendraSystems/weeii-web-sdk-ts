import type { WeeiiRecord, Id } from '../../types.js';

export interface Plataforma extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
}

export interface PlataformaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PlataformaSearchParams extends PlataformaQueryParams {
  texto_busqueda: string;
}
