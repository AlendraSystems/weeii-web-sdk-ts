import type { WeeiiRecord, Id } from '../../types.js';

export interface Usuario extends WeeiiRecord {
  nombre:         string;
  apellido:       string | null;
  email:          string | null;
  telefono:       string | null;
  pais:           string | null;
  avatar:         string | null;
  email_validado: boolean;
  tel_validado:   boolean;
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
