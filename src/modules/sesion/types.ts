import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Sesion extends WeeiiRecord {
  id_usuario:    Id;
  token:         string;
  activa:        boolean;
  ip:            string | null;
  agente:        string | null;
  insertado_en:  Timestamp;
  actualizado_en: Timestamp;
}

// ── Query params ────────────────────────────────────────────────────────────

export interface SesionQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface SesionSearchParams extends SesionQueryParams {
  texto_busqueda: string;
}

export interface IniciarSesionConTelefonoParams {
  telefono_nacional: string;
  telefono_codigo_pais?: string;
}

export interface ConfirmarSesionParams {
  codigo:  string;
  telefono: string;
}

export interface ResumirSesionParams {
  token: string;
}

export interface AsignarTokenPushParams {
  token_push:   string;
  plataforma?:  string;
}
