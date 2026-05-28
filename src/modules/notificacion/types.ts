import type { WeeiiRecord, Id } from '../../types.js';

export interface Notificacion extends WeeiiRecord {
  tipo:                   string;
  id_draft:               Id | null;
  id_usuario:             Id;
  ie_relacionado_1:       number | null;
  id_relacionado_1:       Id | null;
  ie_relacionado_2:       number | null;
  id_relacionado_2:       Id | null;
  vista:                  boolean;
  titulo:                 string;
  contenido:              string | null;
  id_usuario_relacionado_1: Id | null;
  id_usuario_relacionado_2: Id | null;
}
