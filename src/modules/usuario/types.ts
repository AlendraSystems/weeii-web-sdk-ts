import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Usuario extends WeeiiRecord {
  nombre:         string;
  apellido:       string | null;
  email:          string | null;
  telefono:       string | null;
  pais:           string | null;
  avatar:         string | null;
  email_validado: boolean;
  tel_validado:   boolean;
  insertado_en:   Timestamp;
  actualizado_en: Timestamp;
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
  nombre:    string;
  telefono:  string;
  pais?:     string;
  email?:    string;
}

export interface EditarUsuarioParams {
  nombre?:   string;
  apellido?: string;
  email?:    string;
}
