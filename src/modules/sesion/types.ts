import type { WeeiiRecord, Id } from '../../types.js';

export interface Sesion extends WeeiiRecord {
  id_usuario:           Id;
  id_plataforma:        number | null;
  id_aplicacion:        number | null;
  telefono:             string | null;
  token?:               string | null;
  token_push:           string | null;
  user_agent:           string | null;
  creacion_latitud:     number | null;
  creacion_longitud:    number | null;
  creacion_angulo:      number | null;
  creacion_mac_address: string | null;
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

interface IniciarSesionConTelefonoBase {
  id_aplicacion?: number | null;
  token_push?:    string | null;
  user_agent?:    string;
}

/** Provide the full E.164 international number (e.g. "+521234567890"). */
export interface IniciarSesionConTelefonoInternacionalParams
  extends IniciarSesionConTelefonoBase {
  telefono: string;
}

/** Provide the country code and national number separately. */
export interface IniciarSesionConTelefonoPartsParams
  extends IniciarSesionConTelefonoBase {
  telefono_codigo_pais: string;
  telefono_nacional:    string;
}

/** Either a full international number or country-code + national number. */
export type IniciarSesionConTelefonoParams =
  | IniciarSesionConTelefonoInternacionalParams
  | IniciarSesionConTelefonoPartsParams;

export interface ConfirmarSesionParams {
  id_sesion: number;
  codigo_2fa: string;
}

export interface ResumirSesionParams {
  token: string;
}

export interface AsignarTokenPushParams {
  token_push:   string;
  plataforma?:  string;
}
