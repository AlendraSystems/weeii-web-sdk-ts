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
//   soft-delete : 'activo' (falsy = deleted)
//   resolver    : 'id_entidad' matched against the given integer value
// ---------------------------------------------------------------------------
function entity(id: number): SchemaConfig['tables'][string] {
  return {
    key:           'id',
    version:       'version',
    softDelete:    'activo',
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
    softDelete: 'activo',
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
    estatus_orden:                     entity(203),
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
    tarjeta:                           named(),
    metodo_pago:                       named(),
    horario:                           named(),
    horario_negocio:                   named(),
    notificacion_usuario:              named(),
    etiqueta:                          named(),
    etiqueta_producto:                 named(),
    tipo_ubicacion:                    named(),
    tipo_movimiento:                   named(),
    tipo_producto:                     named(),
    tipo_descuento:                    named(),
    tipo_promocion:                    named(),
    tipo_reporte:                      named(),

    // ── Aplicaciones & Plataforma ─────────────────────────────────────────
    aplicacion:                        entity(21),
    plataforma:                        entity(20),

    // ── Usuario Credenciales ──────────────────────────────────────────────
    usuario_credenciales:              entity(91),

    // ── Contenido (Banners, Historias) ────────────────────────────────────
    banner:                            entity(130),
    historia:                          entity(110),
    historia_post:                     entity(111),

    // ── Comercio (Paquetes, Seguros) ──────────────────────────────────────
    paquete:                           entity(50),
    seguro:                            entity(70),

    // ── Métodos de Pago Legados ───────────────────────────────────────────
    efectivo:                          entity(42),
    saldo:                             entity(43),
    terminal_externa:                  entity(46),
    conekta:                           entity(45),
    openpay:                           entity(47),

    // ── Equipos ───────────────────────────────────────────────────────────
    equipo:                            entity(140),
    lider:                             entity(141),
    miembro:                           entity(142),
    equipo_chat:                       entity(143),
    equipo_chat_usr:                   entity(144),
    equipo_chat_msj:                   entity(145),

    // ── Tickets de Soporte ────────────────────────────────────────────────
    ticket:                            entity(150),
    ticket_chat:                       entity(151),
    ticket_chat_msj:                   entity(153),
    ticket_chat_usr:                   entity(152),

    // ── Trámites y Flujos de Trabajo ──────────────────────────────────────
    tramite:                           entity(120),
    requisito:                         entity(121),
    validacion:                        entity(122),
    prueba:                            entity(123),
    solicitud:                         entity(124),

    // ── Notificaciones Extendidas ─────────────────────────────────────────
    notificacion_draft:                entity(171),
    notificacion_obj:                  entity(173),
  },
};

export const weeiiSchema = defineSchema(WEEII_SCHEMA_CONFIG);
