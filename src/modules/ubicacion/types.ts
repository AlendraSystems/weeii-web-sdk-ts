import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Ubicacion extends WeeiiRecord {
  id_usuario:   Id;
  id_negocio:   Id | null;
  alias:        string | null;
  direccion:    string;
  latitud:      number;
  longitud:     number;
  es_principal: boolean;
  insertado_en: Timestamp;
}
