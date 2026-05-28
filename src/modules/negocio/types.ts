import type { WeeiiRecord, Id, Timestamp } from '../../types.js';

export interface Negocio extends WeeiiRecord {
  // Identity:
  id_usuario:   Id;
  nombre:       string;
  razon_social: string | null;
  slogan:       string | null;
  descripcion:  string | null;
  // Location:
  direccion: string | null;
  latitud:   number | null;
  longitud:  number | null;
  // Status:
  autorizado:     boolean;
  abierto:        boolean;
  // General hours:
  horario_inicio: number | null;
  horario_fin:    number | null;
  // Media:
  logo:    string | null;
  foto:    string | null;
  banner:  string | null;
  id_img_1: number | null;
  id_img_2: number | null;
  id_img_3: number | null;
  id_img_4: number | null;
  id_img_5: number | null;
  id_img_6: number | null;
  // Contact:
  telefono_codigo_pais: number | null;
  telefono_nacional:    string | null;
  telefono:             string | null;
  email:                string | null;
  sitio_web:            string | null;
  facebook:             string | null;
  instagram:            string | null;
  twitter:              string | null;
  tiktok:               string | null;
  id_adjunto_fachada:   number | null;
  // Delivery instructions:
  instrucciones_repartidores:          string | null;
  instrucciones_repartidores_recojer:  string | null;
  instrucciones_repartidores_entregar: string | null;
  // Per-day hours:
  horario_inicio_lunes:     number | null;
  horario_fin_lunes:        number | null;
  horario_inicio_martes:    number | null;
  horario_fin_martes:       number | null;
  horario_inicio_miercoles: number | null;
  horario_fin_miercoles:    number | null;
  horario_inicio_jueves:    number | null;
  horario_fin_jueves:       number | null;
  horario_inicio_viernes:   number | null;
  horario_fin_viernes:      number | null;
  horario_inicio_sabado:    number | null;
  horario_fin_sabado:       number | null;
  horario_inicio_domingo:   number | null;
  horario_fin_domingo:      number | null;
  // Owner/admin promo & fees (optional):
  promo_autorizada?:              boolean | null;
  promo_precio?:                  number | null;
  promo_duracion?:                number | null;
  promo_inicio_vigencia?:         Timestamp | null;
  promo_fin_vigencia?:            Timestamp | null;
  promo_orden_porcentaje?:        number | null;
  promo_orden_fijo?:              number | null;
  promo_efectivo_cuota_porcentaje?: number | null;
  promo_efectivo_cuota_min?:      number | null;
  orden_porcentaje?:              number | null;
  orden_fijo?:                    number | null;
  efectivo_cuota_porcentaje?:     number | null;
  efectivo_cuota_min?:            number | null;
}

export interface NegocioQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface NegocioSearchParams extends NegocioQueryParams {
  texto_busqueda: string;
}

export interface NegocioGeoParams {
  latitud:   number;
  longitud:  number;
  radio_km?: number;
}
