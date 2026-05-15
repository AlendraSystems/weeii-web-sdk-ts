/**
 * Weeii domain schema.
 *
 * Entity IDs come from the Erlang backend's ENTIDAD registry
 * (modelo_de_datos.js → ENTIDAD constant).
 *
 * Tables with a confirmed Erlang entity ID use prop-based resolution:
 * the store matches the record's `id_entidad` field against `resolverValue`.
 *
 * Tables without a confirmed entity ID (newer or unnamed relations) use
 * name-based resolution — the server payload key maps directly to the table.
 */
import { defineSchema } from '@silasdevs/core/store';
import type { SchemaConfig } from '@silasdevs/core/store';

// ---------------------------------------------------------------------------
// Helper — table with a known Erlang entity ID.
//   primary key : 'id'
//   version     : 'version'
//   soft-delete : 'eliminado'
//   resolver    : 'id_entidad' matched against the given integer value
// ---------------------------------------------------------------------------
function entity(id: number): SchemaConfig['tables'][string] {
  return {
    key:           'id',
    version:       'version',
    softDelete:    'eliminado',
    resolverProp:  'id_entidad',
    resolverValue: id,
  };
}

// ---------------------------------------------------------------------------
// Helper — table without a confirmed entity ID (name-based resolution).
// ---------------------------------------------------------------------------
function named(): SchemaConfig['tables'][string] {
  return {
    key:        'id',
    version:    'version',
    softDelete: 'eliminado',
  };
}

export const WEEII_SCHEMA_CONFIG: SchemaConfig = {
  tables: {
    // ── Adjuntos ────────────────────────────────────────────────────────────
    tipo_adjunto:                      entity(10),
    adjunto:                           entity(11),
    adjunto_referencia:                entity(12),

    // ── Entregas ────────────────────────────────────────────────────────────
    estatus_entrega:                   entity(30),
    entrega:                           entity(31),
    entrega_repartidor:                entity(32),
    entrega_gps:                       entity(33),
    entrega_usuario_calificacion:      entity(34),
    entrega_mensaje:                   entity(35),
    entrega_multa_cancelacion:         entity(36),
    entrega_multa_aborcion:            entity(37),
    entrega_evidencia:                 entity(38),
    entrega_estatus:                   entity(39),
    entrega_plantilla:                 entity(190),

    // ── Pagos ────────────────────────────────────────────────────────────────
    tipo_pago:                         entity(40),
    estatus_pago:                      entity(41),
    saldo_usuario:                     entity(44),
    pago:                              entity(48),
    movimiento:                        entity(49),
    retiro:                            entity(180),
    adeudo:                            entity(181),
    deposito:                          entity(183),
    abono:                             entity(184),

    // ── Roles & Acceso ───────────────────────────────────────────────────────
    rol:                               entity(60),

    // ── Sesiones ─────────────────────────────────────────────────────────────
    sesion:                            entity(80),

    // ── Usuarios ─────────────────────────────────────────────────────────────
    usuario:                           entity(90),
    uccc:                              entity(92),
    uvt:                               entity(93),
    uve:                               entity(94),

    // ── Repartidores ─────────────────────────────────────────────────────────
    repartidor_on:                     entity(100),

    // ── Notificaciones ───────────────────────────────────────────────────────
    tipo_notificacion:                 entity(170),
    notificacion:                      entity(172),

    // ── Ubicaciones ──────────────────────────────────────────────────────────
    ubicacion:                         entity(160),

    // ── Negocios, Productos & Órdenes ────────────────────────────────────────
    negocio:                           entity(200),
    categoria:                         entity(201),
    producto:                          entity(202),
    orden:                             entity(204),
    concepto:                          entity(205),
    negocio_cliente:                   entity(206),

    // ── Jornadas ─────────────────────────────────────────────────────────────
    jornada:                           entity(220),

    // ── Clientes ─────────────────────────────────────────────────────────────
    cliente:                           entity(230),

    // ── Tables without a confirmed Erlang entity ID (name-based resolution) ──
    producto_variante:                 named(),
    producto_presentacion:             named(),
    inventario:                        named(),
    precio:                            named(),
    descuento:                         named(),
    promocion:                         named(),
    orden_linea:                       named(),
    orden_pago:                        named(),
    repartidor:                        named(),
    repartidor_zona:                   named(),
    repartidor_disponibilidad:         named(),
    saldo_negocio:                     named(),
    tarjeta:                           named(),
    metodo_pago:                       named(),
    zona:                              named(),
    zona_negocio:                      named(),
    zona_repartidor:                   named(),
    horario:                           named(),
    horario_negocio:                   named(),
    configuracion:                     named(),
    configuracion_negocio:             named(),
    notificacion_usuario:              named(),
    permiso:                           named(),
    rol_permiso:                       named(),
    usuario_rol:                       named(),
    etiqueta:                          named(),
    etiqueta_producto:                 named(),
    busqueda:                          named(),
    reporte:                           named(),
    log_actividad:                     named(),
    plantilla:                         named(),
    plantilla_mensaje:                 named(),
    tipo_ubicacion:                    named(),
    tipo_movimiento:                   named(),
    tipo_producto:                     named(),
    tipo_descuento:                    named(),
    tipo_promocion:                    named(),
    tipo_reporte:                      named(),
  },
};

export const weeiiSchema = defineSchema(WEEII_SCHEMA_CONFIG);
