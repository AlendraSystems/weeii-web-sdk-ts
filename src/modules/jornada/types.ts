import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Jornada extends WeeiiRecord {
  id_usuario:    Id;
  tipo_vehiculo: string | null;
  conclusa:      boolean;
  inicio:        Timestamp;
  fin:           Timestamp | null;
}

export interface JornadaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface JornadaSearchParams extends JornadaQueryParams {
  texto_busqueda: string;
}
