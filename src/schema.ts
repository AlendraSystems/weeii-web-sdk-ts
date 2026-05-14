/**
 * Weeii domain schema.
 *
 * Defines all 66 Erlang entity tables. Tables that are routed by `id_entidad`
 * (prop-based resolution) are declared with `resolverProp: 'id_entidad'` and
 * the matching `resolverValue`.
 *
 * Tables without an `id_entidad` (e.g. pure relational joins) use name-based
 * resolution — they appear as-is in server response payloads.
 */
import { defineSchema } from '@silasdevs/core/store';
import type { SchemaConfig } from '@silasdevs/core/store';

// ---------------------------------------------------------------------------
// Helper — most Weeii tables share the same shape:
//   primary key : 'id'
//   version     : 'version'
//   soft-delete : 'eliminado'
//   resolver    : 'id_entidad' with a specific integer value
// ---------------------------------------------------------------------------
function entity(_name: string, id: number): SchemaConfig['tables'][string] {
  return {
    key:           'id',
    version:       'version',
    softDelete:    'eliminado',
    resolverProp:  'id_entidad',
    resolverValue: id,
  };
}

export const WEEII_SCHEMA_CONFIG: SchemaConfig = {
  tables: {
    // ── Core entities ──────────────────────────────────────────────────────
    usuario:                           entity('usuario',                           1),
    sesion:                            entity('sesion',                            2),
    negocio:                           entity('negocio',                           3),
    cliente:                           entity('cliente',                           4),
    ubicacion:                         entity('ubicacion',                         5),
    adjunto:                           entity('adjunto',                           6),
    categoria_negocio:                 entity('categoria_negocio',                 7),
    producto:                          entity('producto',                          8),
    producto_variante:                 entity('producto_variante',                 9),
    producto_presentacion:             entity('producto_presentacion',             10),
    inventario:                        entity('inventario',                        11),
    precio:                            entity('precio',                            12),
    descuento:                         entity('descuento',                         13),
    promocion:                         entity('promocion',                         14),
    orden:                             entity('orden',                             15),
    orden_linea:                       entity('orden_linea',                       16),
    orden_pago:                        entity('orden_pago',                        17),
    entrega:                           entity('entrega',                           18),
    entrega_repartidor:                entity('entrega_repartidor',                19),
    entrega_estatus:                   entity('entrega_estatus',                   20),
    entrega_evidencia:                 entity('entrega_evidencia',                 21),
    entrega_gps:                       entity('entrega_gps',                       22),
    entrega_mensaje:                   entity('entrega_mensaje',                   23),
    entrega_plantilla:                 entity('entrega_plantilla',                 24),
    entrega_multa_cancelacion:         entity('entrega_multa_cancelacion',         25),
    entrega_multa_aborcion:            entity('entrega_multa_aborcion',            26),
    entrega_usuario_calificacion:      entity('entrega_usuario_calificacion',      27),
    repartidor:                        entity('repartidor',                        28),
    repartidor_zona:                   entity('repartidor_zona',                   29),
    repartidor_disponibilidad:         entity('repartidor_disponibilidad',         30),
    saldo_usuario:                     entity('saldo_usuario',                     31),
    saldo_negocio:                     entity('saldo_negocio',                     32),
    movimiento:                        entity('movimiento',                        33),
    pago:                              entity('pago',                              34),
    tarjeta:                           entity('tarjeta',                           35),
    metodo_pago:                       entity('metodo_pago',                       36),
    zona:                              entity('zona',                              37),
    zona_negocio:                      entity('zona_negocio',                      38),
    zona_repartidor:                   entity('zona_repartidor',                   39),
    horario:                           entity('horario',                           40),
    horario_negocio:                   entity('horario_negocio',                   41),
    configuracion:                     entity('configuracion',                     42),
    configuracion_negocio:             entity('configuracion_negocio',             43),
    notificacion:                      entity('notificacion',                      44),
    notificacion_usuario:              entity('notificacion_usuario',              45),
    rol:                               entity('rol',                               46),
    permiso:                           entity('permiso',                           47),
    rol_permiso:                       entity('rol_permiso',                       48),
    usuario_rol:                       entity('usuario_rol',                       49),
    etiqueta:                          entity('etiqueta',                          50),
    etiqueta_producto:                 entity('etiqueta_producto',                 51),
    busqueda:                          entity('busqueda',                          52),
    reporte:                           entity('reporte',                           53),
    log_actividad:                     entity('log_actividad',                     54),
    plantilla:                         entity('plantilla',                         55),
    plantilla_mensaje:                 entity('plantilla_mensaje',                 56),
    estatus_entrega:                   entity('estatus_entrega',                   57),
    tipo_ubicacion:                    entity('tipo_ubicacion',                    58),
    tipo_adjunto:                      entity('tipo_adjunto',                      59),
    tipo_movimiento:                   entity('tipo_movimiento',                   60),
    tipo_pago:                         entity('tipo_pago',                         61),
    tipo_producto:                     entity('tipo_producto',                     62),
    tipo_descuento:                    entity('tipo_descuento',                    63),
    tipo_promocion:                    entity('tipo_promocion',                    64),
    tipo_notificacion:                 entity('tipo_notificacion',                 65),
    tipo_reporte:                      entity('tipo_reporte',                      66),
  },
};

export const weeiiSchema = defineSchema(WEEII_SCHEMA_CONFIG);
