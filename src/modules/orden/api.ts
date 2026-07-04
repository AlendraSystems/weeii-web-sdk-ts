import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type { Orden, OrdenQueryParams, OrdenSearchParams } from './types.js';

export type { Orden } from './types.js';

// ── Query (all / admin) ───────────────────────────────────────────────────────

export function ordenes(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden', params);
}

export function ordenSearch(
  params: OrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search', params);
}

export function ordenSearchEstatus(
  params: { estatus: number } & OrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search_estatus', params);
}

export function ordenSearchIdCliente(
  params: { id_cliente: number } & OrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search_id_cliente', params);
}

export function ordenSearchIdClienteEstatus(
  params: { id_cliente: number; estatus: number } & OrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search_id_cliente_estatus', params);
}

export function ordenSearchIdNegocio(
  params: { id_negocio: number } & OrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search_id_negocio', params);
}

export function ordenSearchIdNegocioEstatus(
  params: { id_negocio: number; estatus: number } & OrdenSearchParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_search_id_negocio_estatus', params);
}

export function ordenPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_q_id', params);
}

export function ordenesPorIdCliente(
  params: { id_cliente: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_id_cliente', params);
}

export function ordenesPorIdClienteEstatus(
  params: { id_cliente: number; estatus: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_id_cliente_estatus', params);
}

export function ordenesPorIdNegocio(
  params: { id_negocio: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_id_negocio', params);
}

export function ordenesPorIdNegocioEstatus(
  params: { id_negocio: number; estatus: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_id_negocio_estatus', params);
}

export function ordenesPorEstatus(
  params: { estatus: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_estatus', params);
}

export function ordenesCreadasPorNegocio(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_creada_por_negocio_p', params);
}

// ── Geo queries ───────────────────────────────────────────────────────────────

export function ordenesSinCreacionLatLon(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_sin_creacion_lat_lon', params);
}

export function ordenesCreacionLatLonCent(
  params: { latitud: number; longitud: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_creacion_lat_lon_cent', params);
}

export function ordenesCreacionLatLonDec(
  params: { latitud: number; longitud: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_creacion_lat_lon_dec', params);
}

export function ordenesSinCreacionMacAddress(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_sin_creacion_mac_address', params);
}

export function ordenesCreacionMacAddress(
  params: { mac_address: string } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_creacion_mac_address', params);
}

// ── My orders ────────────────────────────────────────────────────────────────

export function misOrdenes(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_mias', params);
}

export function misOrdenesPorEstatus(
  params: { estatus: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_mias_estatus', params);
}

export function misVentas(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_mis_ventas', params);
}

export function misVentasSinPresupuestosExternos(
  params: OrdenQueryParams = {},
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_mis_ventas_sin_presupuestos_externos', params);
}

export function misVentasPorEstatus(
  params: { estatus: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_mis_ventas_estatus', params);
}

export function misVentasPorEstatusSinPresupuestosExternos(
  params: { estatus: number } & OrdenQueryParams,
): Promise<WeeiiIncomingMessage<{ orden: Orden[] }>> {
  return request('orden_q_mis_ventas_estatus_sin_presupuestos_externos', params);
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export function registrarOrden(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_registrar', params);
}

export function editarOrden(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_editar', params);
}

export function accederConToken(
  params: { token: string },
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_acceder_con_token', params);
}

export function cotizarEntrega(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ orden: Orden }>> {
  return request('orden_cotizar_entrega', params);
}

// ── Status transitions ────────────────────────────────────────────────────────

export function ordenEnCola(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_en_cola', params);
}

export function ordenRechazada(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('orden_rechazada', params);
}

export function ordenAbortada(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('orden_abortada', params);
}

export function ordenAceptada(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_aceptada', params);
}

export function ordenEnProceso(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_en_proceso', params);
}

export function ordenLista(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_lista', params);
}

export function ordenEnviando(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_enviando', params);
}

export function ordenEnviada(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_enviada', params);
}

export function ordenEntregada(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_entregada', params);
}

export function ordenExitosa(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('orden_exitosa', params);
}

export function ordenFallida(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('orden_fallida', params);
}

export function cancelarOrden(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('orden_cancelada', params);
}

export function ordenEditParms(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage> {
  return request('orden_edit_parms', params);
}
