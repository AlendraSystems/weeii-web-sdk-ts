/**
 * Entrega domain APIs.
 *
 * Replaces: `modulos/entregas/entrega/entrega.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Entrega,
  EntregaQueryParams,
  EntregaSearchParams,
  EntregaEstadisticas,
} from './types.js';

export type { Entrega, EntregaEstadisticas } from './types.js';

// ── Query ───────────────────────────────────────────────────────────────────

export function entregas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega', params);
}

export function entregaSearch(
  params: EntregaSearchParams,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_search', params);
}

export function entregaPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_q_id', params);
}

export function entregasConclusas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_q_conclusa', params);
}

export function entregasInconclusas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_q_inconclusa', params);
}

export function entregasPorEstatus(
  params: { estatus: number } & EntregaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_q_estatus', params);
}

export function entregasPorIdUsuario(
  params: { id_usuario: number } & EntregaQueryParams,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_q_id_usuario', params);
}

export function misEntregas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_mis_entregas', params);
}

export function misEntregasActivas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_mis_entregas_activas', params);
}

export function misEncargos(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_mis_encargos', params);
}

export function misEncargosActivos(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_mis_encargos_activos', params);
}

// ── Cotizaciones ─────────────────────────────────────────────────────────────

export function cotizacionEfimera(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_cotizacion_efimera', params);
}

export function agendadaCotizacionEfimera(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_agendada_cotizacion_efimera', params);
}

export function cotizarRuta(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_cotizar_ruta', params);
}

export function recotizar(
  params: { id_entrega: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_recotizar', params);
}

export function descartarPresupuesto(
  params: { id_entrega?: number | null },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_descartar_presupuesto', params);
}

// ── Mutations ────────────────────────────────────────────────────────────────

export function registrarEntrega(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_registrar', params);
}

export function agendarEntrega(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_agendar', params);
}

export function editarEntrega(
  params: { id: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ entrega: Entrega }>> {
  return request('entrega_editar', params);
}

export function eliminarEntrega(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('eliminar_entrega', params);
}

// ── Status transitions ────────────────────────────────────────────────────────

export function entregaEnCola(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_en_cola', params);
}

export function aceptarEntrega(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_aceptada', params);
}

export function rechazarEntrega(
  params: { id_entrega: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_rechazada', params);
}

export function abortarEntrega(
  params: { id_entrega: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_abortada', params);
}

export function cancelarEntrega(
  params: { id_entrega: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_cancelada', params);
}

export function entregaAOrigen(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_a_origen', params);
}

export function entregaEnOrigen(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_en_origen', params);
}

export function entregaADestino(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_a_destino', params);
}

export function entregaEnDestino(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_en_destino', params);
}

export function entregaEntregada(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_entregada', params);
}

export function entregaExitosa(
  params: { id_entrega: number },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_exitosa', params);
}

export function entregaFallida(
  params: { id_entrega: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_fallida', params);
}

export function calificarEntrega(
  params: { id_entrega: number; calificacion: number; comentario?: string },
): Promise<WeeiiIncomingMessage> {
  return request('entrega_calificar', params);
}

// ── Reporting ─────────────────────────────────────────────────────────────────

export function estadisticasEntregas(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<{ estadisticas: EntregaEstadisticas }>> {
  return request('entrega_estadisticas', params);
}

export function estadisticasEntregasCliente(
  params: { id_cliente: number } & Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ estadisticas: EntregaEstadisticas }>> {
  return request('entrega_estadisticas_cliente', params);
}

export function clientesConEntregasExitosas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_clientes_con_exitosas', params);
}

export function repartidoresConEntregasExitosas(
  params: EntregaQueryParams = {},
): Promise<WeeiiIncomingMessage<{ entrega: Entrega[] }>> {
  return request('entrega_repartidores_con_exitosas', params);
}

export function ingresosEntregas(
  params: Record<string, unknown> = {},
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('entrega_ingresos', params);
}

export function editarParamsEntrega(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<Record<string, unknown>>> {
  return request('entrega_edit_parms', params);
}
