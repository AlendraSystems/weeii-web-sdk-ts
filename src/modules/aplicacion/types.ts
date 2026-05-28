import type { WeeiiRecord, Id } from '../../types.js';

export interface Aplicacion extends WeeiiRecord {
  id_plataforma:                   Id;
  nombre:                          string;
  descripcion:                     string | null;
  // Admin-only:
  id_proyecto_firebase?:           string | null;
  clave_autorizacion_firebase?:    string | null;
}

export interface AplicacionQueryParams {
  id_ultimo?: Id;
  filas?:     number;
}

export interface AplicacionSearchParams extends AplicacionQueryParams {
  texto_busqueda: string;
}
