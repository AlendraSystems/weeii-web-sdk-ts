import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Prueba extends WeeiiRecord {
  id_tramite:     Id;
  facultad:       string;
  id_validacion:  Id | null;
  id_requisito:   Id;
  tipo_requisito: string;
  ie_relacionado: number | null;
  id_relacionado: Id | null;
  contenido:      string | null;
  id_contenido:   Id | null;
  validado:       boolean;
  ts_validado:    Timestamp | null;
  id_validador:   Id | null;
}

export interface PruebaQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface PruebaSearchParams extends PruebaQueryParams {
  texto_busqueda: string;
}
