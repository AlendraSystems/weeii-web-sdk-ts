import type { WeeiiRecord, Id } from '../../types.js';

export interface EntregaPlantilla extends WeeiiRecord {
  id_cliente:    Id;
  id_entrega:    Id | null;
  id_paquete:    Id | null;
  id_seguro:     Id | null;
  id_tipo_pago:  Id | null;
  id_tarjeta:    Id | null;
  enviar_recibir: boolean;
  default:       boolean;
  usos:          number;
  nombre:        string | null;
  // Origin:
  nombre_origen:    string | null;
  direccion_origen: string | null;
  latitud_origen:   number | null;
  longitud_origen:  number | null;
  // Destination:
  nombre_destino:    string | null;
  direccion_destino: string | null;
  latitud_destino:   number | null;
  longitud_destino:  number | null;
  // Contacts:
  contacto_nombre_origen:                    string | null;
  contacto_telefono_codigo_pais_origen:      number | null;
  contacto_telefono_nacional_origen:         string | null;
  contacto_telefono_origen:                  string | null;
  contacto_nombre_destino:                   string | null;
  contacto_telefono_codigo_pais_destino:     number | null;
  contacto_telefono_nacional_destino:        string | null;
  contacto_telefono_destino:                 string | null;
  // Notes & instructions:
  descripcion_paquete:               string | null;
  indicaciones_repartidor:           string | null;
  indicaciones_repartidor_origen:    string | null;
  indicaciones_repartidor_destino:   string | null;
  comentarios_repartidor:            string | null;
  comentarios_repartidor_origen:     string | null;
  comentarios_repartidor_destino:    string | null;
  // Custom data slots:
  cliente_bool_1:         boolean | null;
  cliente_bool_2:         boolean | null;
  cliente_bool_3:         boolean | null;
  admon_bool_1:           boolean | null;
  admon_bool_2:           boolean | null;
  admon_bool_3:           boolean | null;
  cliente_nombre_1:       string | null;
  cliente_nombre_2:       string | null;
  admon_nombre_1:         string | null;
  admon_nombre_2:         string | null;
  cliente_descripcion_1:  string | null;
  cliente_descripcion_2:  string | null;
  admon_descripcion_1:    string | null;
  admon_descripcion_2:    string | null;
  cliente_id_img_1:       number | null;
  cliente_id_img_2:       number | null;
  cliente_id_img_3:       number | null;
  admon_id_img_1:         number | null;
  admon_id_img_2:         number | null;
  admon_id_img_3:         number | null;
}

export interface EntregaPlantillaQueryParams {
  id_ultimo?:   Id;
  filas?:       number;
  profundidad?: number[];
}

export interface EntregaPlantillaSearchParams extends EntregaPlantillaQueryParams {
  texto_busqueda: string;
}

export interface EntregaPlantillaGeoParams {
  latitud:  number;
  longitud: number;
}
