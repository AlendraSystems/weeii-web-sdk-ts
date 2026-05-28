import type { WeeiiRecord, Timestamp, Id } from '../../types.js';

export interface Uvt extends WeeiiRecord {
  id_usuario:             Id;
  token:                  string | null;
  telefono_codigo_pais:   number;
  telefono_nacional:      string;
  telefono_internacional: string;
  duracion:               number;
  timestamp_caducidad:    Timestamp | null;
}

export interface UvtSearchParams {
  texto_busqueda: string;
  id_ultimo?:     number;
  filas?:         number;
}
