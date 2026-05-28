import type { WeeiiRecord, Id } from '../../types.js';

export interface Seguro extends WeeiiRecord {
  nombre:      string;
  descripcion: string | null;
  permitido:   boolean;
  precio:      number;
  cobertura:   number;
  foto:        string | null;
  banner:      string | null;
}

export interface SeguroQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface SeguroSearchParams extends SeguroQueryParams {
  texto_busqueda: string;
}
