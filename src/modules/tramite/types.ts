import type { WeeiiRecord, Id } from '../../types.js';

export interface Tramite extends WeeiiRecord {
  facultad:    string;
  nombre:      string;
  descripcion: string | null;
  id_img_1:    string | null;
  id_img_2:    string | null;
  id_img_3:    string | null;
  id_img_4:    string | null;
}

export interface TramiteQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface TramiteSearchParams extends TramiteQueryParams {
  texto_busqueda: string;
}
