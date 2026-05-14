/**
 * EntregaPlantilla domain APIs.
 *
 * Replaces: `modulos/entregas/entrega_plantilla/entrega_plantilla.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  EntregaPlantilla,
  EntregaPlantillaQueryParams,
  EntregaPlantillaSearchParams,
  EntregaPlantillaGeoParams,
} from './types.js';

export type { EntregaPlantilla } from './types.js';

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

export function entregaPlantillaTodas(
  params: EntregaPlantillaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla', params);
}

export function entregaPlantillaSearch(
  params: EntregaPlantillaSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_search', params);
}

export function entregaPlantillaSearchIdCliente(
  params: { id_cliente: number } & EntregaPlantillaSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_search_id_cliente', params);
}

export function entregaPlantillaQId(
  params: { id: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla }>> {
  return request('entrega_plantilla_q_id', params);
}

export function entregaPlantillaQIdCliente(
  params: { id_cliente: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_cliente', params);
}

export function entregaPlantillaQMias(
  params: EntregaPlantillaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_mias', params);
}

export function entregaPlantillaQIdClienteCodigoGrupo(
  params: { id_cliente: number; codigo_grupo: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_cliente_codigo_grupo', params);
}

export function entregaPlantillaQCodigoGrupoAdmon(
  params: { codigo_grupo: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_codigo_grupo_admon', params);
}

export function entregaPlantillaQIdClienteCodigoGrupoAdmon(
  params: { id_cliente: number; codigo_grupo: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_cliente_codigo_grupo_admon', params);
}

export function entregaPlantillaQIdEntrega(
  params: { id_entrega: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_entrega', params);
}

export function entregaPlantillaQIdPaquete(
  params: { id_paquete: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_paquete', params);
}

export function entregaPlantillaQIdSeguro(
  params: { id_seguro: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_seguro', params);
}

export function entregaPlantillaQIdTipoPago(
  params: { id_tipo_pago: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_tipo_pago', params);
}

export function entregaPlantillaQIdTarjeta(
  params: { id_tarjeta: number } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_id_tarjeta', params);
}

export function entregaPlantillaQEnviarRecibir(
  params: { enviar_recibir: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_enviar_recibir', params);
}

export function entregaPlantillaQDefault(
  params: EntregaPlantillaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_default', params);
}

export function entregaPlantillaQLatLonOrigen(
  params: EntregaPlantillaGeoParams & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_lat_lon_origen', params);
}

export function entregaPlantillaQLatLonDestino(
  params: EntregaPlantillaGeoParams & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_lat_lon_destino', params);
}

export function entregaPlantillaQContactoTelefonoCodigoPaisOrigen(
  params: { telefono: string; codigo_pais: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_contacto_telefono_codigo_pais_origen', params);
}

export function entregaPlantillaQContactoTelefonoOrigen(
  params: { telefono: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_contacto_telefono_origen', params);
}

export function entregaPlantillaQContactoTelefonoCodigoPaisDestino(
  params: { telefono: string; codigo_pais: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_contacto_telefono_codigo_pais_destino', params);
}

export function entregaPlantillaQContactoTelefonoDestino(
  params: { telefono: string } & EntregaPlantillaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla[] }>> {
  return request('entrega_plantilla_q_contacto_telefono_destino', params);
}

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

export function registrarPlantilla(
  params: Partial<EntregaPlantilla>,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla }>> {
  return request('entrega_plantilla_registrar', params);
}

export function editarPlantilla(
  params: { id: number } & Partial<EntregaPlantilla>,
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla }>> {
  return request('entrega_plantilla_editar', params);
}

export function eliminarPlantilla(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ entrega_plantilla: EntregaPlantilla }>> {
  return request('entrega_plantilla_eliminar', params);
}
