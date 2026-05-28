import type { WeeiiRecord } from '../../types.js';

export interface InformacionBasica extends WeeiiRecord {
  clave: string;
  valor: string | null;
}
