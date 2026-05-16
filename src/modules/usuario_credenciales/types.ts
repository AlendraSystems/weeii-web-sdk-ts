import type { WeeiiRecord, Id } from '../../types.js';

export interface UsuarioCredenciales extends WeeiiRecord {
  id_usuario: Id;
}

export interface CambiarClaveParams {
  clave_actual: string;
  clave_nueva:  string;
}

export interface UsuarioCredencialesSearchParams {
  id_ultimo?: Id;
  filas?:     number;
  texto_busqueda: string;
}
