import type { WeeiiRecord, Id } from '../../types.js';

export interface Cliente extends WeeiiRecord {
  id_usuario:                        Id;
  latitud:                           number | null;
  longitud:                          number | null;
  orientacion:                       number | null;
  entrega_cotizacion_porcentaje:     number;
  entrega_precio_fijado:             boolean;
  entrega_precio_fijado_min:         number;
  entrega_precio_fijado_max:         number;
  entrega_efectivo_cuota_porcentaje: number;
  entrega_efectivo_cuota_min:        number;
}
