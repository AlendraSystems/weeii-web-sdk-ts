import type { WeeiiRecord, Id } from '../../types.js';

export interface Requisito extends WeeiiRecord {
  id_tramite:   Id;
  facultad:     string;
  tipo:         string;
  nombre:       string;
  descripcion:  string | null;
  permitir_otro: boolean;
  opciones:     string[] | null;
  id_img_1:     string | null;
  id_img_2:     string | null;
  id_img_3:     string | null;
  id_img_4:     string | null;
}

export interface RequisitoQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface RequisitoSearchParams extends RequisitoQueryParams {
  texto_busqueda: string;
}
