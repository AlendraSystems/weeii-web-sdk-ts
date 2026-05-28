import type { WeeiiRecord, Id } from '../../types.js';

export interface Notificacion extends WeeiiRecord {
  id_usuario: Id;
  tipo:       string;
  titulo:     string;
  cuerpo:     string | null;
  leida:      boolean;
}
