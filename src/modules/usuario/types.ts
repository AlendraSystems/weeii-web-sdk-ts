import type { WeeiiRecord, Id } from '../../types.js';

export interface Usuario extends WeeiiRecord {
  // Public:
  id_rol:                   Id;
  nombre:                   string;
  alias:                    string | null;
  foto:                     string | null;
  foto_publica:             boolean;
  telefono_codigo_pais:     string | null;
  telefono_nacional:        string | null;
  telefono_internacional:   string | null;
  negociante:               boolean;
  id_tipo_vehiculo_asignado: number | null;
  // Self/admin only:
  apellido?:                string | null;
  email?:                   string | null;
  direccion?:               string | null;
  email_validado?:          boolean | null;
  telefono_validado?:       boolean | null;
  direccion_validada?:      boolean | null;
  autorizado_entrega?:      boolean | null;
  clabe?:                   string | null;
  caratula_estado_de_cuenta?: string | null;
  creacion_latitud?:        number | null;
  creacion_longitud?:       number | null;
  creacion_angulo?:         number | null;
  creacion_mac_address?:    string | null;
}

export interface UsuarioQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface UsuarioSearchParams extends UsuarioQueryParams {
  texto_busqueda: string;
}

export interface RegistrarClienteParams {
  nombre:               string;
  telefono_codigo_pais: string;
  telefono_nacional:    string;
  email?:               string;
}

export interface RegistrarRepartidorParams {
  nombre:               string;
  telefono_codigo_pais: string;
  telefono_nacional:    string;
  email?:               string;
}

export interface RegistrarInternoParams {
  nombre:   string;
  email:    string;
  id_rol:   number;
}

export interface EditarUsuarioParams {
  nombre?:   string;
  apellido?: string;
  email?:    string;
}
