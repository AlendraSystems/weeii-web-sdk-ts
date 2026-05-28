import type { WeeiiRecord, Id } from '../../types.js';

export interface UsuarioCredenciales extends WeeiiRecord {
  id_usuario:             Id;
  id_rol:                 number[];
  email:                  string | null;
  telefono_internacional: string | null;
  email_validado:         boolean;
  telefono_validado:      boolean;
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
