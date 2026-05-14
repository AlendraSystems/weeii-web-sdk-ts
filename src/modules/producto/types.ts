import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Producto extends WeeiiRecord {
  id_negocio:   Id;
  nombre:       string;
  descripcion:  string | null;
  precio:       number;
  stock:        number | null;
  disponible:   boolean;
  insertado_en: Timestamp;
}
