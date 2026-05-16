# @weeii/sdk

TypeScript SDK for the Weeii platform. Provides a fully-typed, reactive client that communicates over a persistent WebSocket connection.

## Installation

```bash
npm install @weeii/sdk
# or
pnpm add @weeii/sdk
```

## Quick Start

```typescript
import { configureWeeii, conectarYResumir } from '@weeii/sdk';

// 1. Configure once at app startup
configureWeeii({
  url: 'wss://api.weeii.io/ws',
  negocio: 'my-business-id',
});

// 2. Connect and resume the session
await conectarYResumir({ token: 'user-jwt-token' });

// 3. Import and call any module
import { pedidos } from '@weeii/sdk/orden';

const { data } = await pedidos({ id_ultimo: 0, filas: 20 });
```

## Connection & Transport

The SDK maintains a single long-lived WebSocket connection. Use the connection primitives from the root export to manage lifecycle:

```typescript
import {
  configureWeeii,
  conectarYResumir,
  desconectar,
  onConnected,
  onDisconnected,
} from '@weeii/sdk';

// Listen for connection state changes
onConnected(() => console.log('connected'));
onDisconnected(() => console.log('disconnected'));

// Disconnect explicitly
desconectar();
```

## TypeScript Patterns

Every module exports its entity type and parameter interfaces for use in your own code:

```typescript
import type { Orden, OrdenQueryParams } from '@weeii/sdk/orden';

function renderOrden(order: Orden) { /* ... */ }

async function fetchOrders(params: OrdenQueryParams) {
  const { data } = await pedidos(params);
  return data.orden;
}
```

All API functions return `Promise<WeeiiIncomingMessage<T>>` where `T` is the typed response payload.

## React Hooks

The `@weeii/sdk/react` sub-package provides React hooks powered by a reactive store:

```typescript
import { useWeeiiStore, useWeeiiSelector } from '@weeii/sdk/react';

// Subscribe to the entire store
const store = useWeeiiStore();

// Subscribe to a slice with a selector
const orders = useWeeiiSelector((s) => s.orden);
```

## Module Reference

112 modules are available as individual subpath exports (`@weeii/sdk/<module>`).

### Core

| Module | Export path | Description |
|---|---|---|
| `sesion` | `@weeii/sdk/sesion` | Session management |
| `usuario` | `@weeii/sdk/usuario` | Users |
| `informacion_basica` | `@weeii/sdk/informacion_basica` | Profile / basic info |
| `negocio` | `@weeii/sdk/negocio` | Business entity |
| `negocio_cliente` | `@weeii/sdk/negocio_cliente` | Business ↔ client relations |
| `cliente` | `@weeii/sdk/cliente` | Clients |
| `ubicacion` | `@weeii/sdk/ubicacion` | Addresses / locations |

### Aplicaciones & Plataforma

| Module | Export path | Description |
|---|---|---|
| `aplicacion` | `@weeii/sdk/aplicacion` | Applications |
| `plataforma` | `@weeii/sdk/plataforma` | Platforms |
| `usuario_credenciales` | `@weeii/sdk/usuario_credenciales` | User credentials |

### Pedidos & Entregas

| Module | Export path | Description |
|---|---|---|
| `orden` | `@weeii/sdk/orden` | Orders |
| `orden_linea` | `@weeii/sdk/orden_linea` | Order lines |
| `orden_pago` | `@weeii/sdk/orden_pago` | Order payments |
| `entrega` | `@weeii/sdk/entrega` | Deliveries |
| `entrega_estatus` | `@weeii/sdk/entrega_estatus` | Delivery status |
| `entrega_evidencia` | `@weeii/sdk/entrega_evidencia` | Delivery evidence |
| `entrega_gps` | `@weeii/sdk/entrega_gps` | Delivery GPS tracking |
| `entrega_mensaje` | `@weeii/sdk/entrega_mensaje` | Delivery messages |
| `entrega_repartidor` | `@weeii/sdk/entrega_repartidor` | Delivery ↔ courier |
| `entrega_usuario_calificacion` | `@weeii/sdk/entrega_usuario_calificacion` | Delivery ratings |
| `entrega_plantilla` | `@weeii/sdk/entrega_plantilla` | Delivery templates |
| `entrega_multa_aborcion` | `@weeii/sdk/entrega_multa_aborcion` | Abandonment penalties |
| `entrega_multa_cancelacion` | `@weeii/sdk/entrega_multa_cancelacion` | Cancellation penalties |
| `estatus_entrega` | `@weeii/sdk/estatus_entrega` | Delivery status catalogue |

### Repartidores

| Module | Export path | Description |
|---|---|---|
| `repartidor` | `@weeii/sdk/repartidor` | Couriers |
| `repartidor_on` | `@weeii/sdk/repartidor_on` | Courier online status |
| `repartidor_zona` | `@weeii/sdk/repartidor_zona` | Courier zones |
| `repartidor_disponibilidad` | `@weeii/sdk/repartidor_disponibilidad` | Courier availability |
| `jornada` | `@weeii/sdk/jornada` | Work shifts |

### Catálogo

| Module | Export path | Description |
|---|---|---|
| `categoria` | `@weeii/sdk/categoria` | Categories |
| `producto` | `@weeii/sdk/producto` | Products |
| `producto_variante` | `@weeii/sdk/producto_variante` | Product variants |
| `producto_presentacion` | `@weeii/sdk/producto_presentacion` | Product presentations |
| `inventario` | `@weeii/sdk/inventario` | Inventory |
| `precio` | `@weeii/sdk/precio` | Prices |
| `descuento` | `@weeii/sdk/descuento` | Discounts |
| `promocion` | `@weeii/sdk/promocion` | Promotions |
| `etiqueta` | `@weeii/sdk/etiqueta` | Tags |
| `etiqueta_producto` | `@weeii/sdk/etiqueta_producto` | Product tags |

### Comercio

| Module | Export path | Description |
|---|---|---|
| `paquete` | `@weeii/sdk/paquete` | Packages / bundles |
| `seguro` | `@weeii/sdk/seguro` | Insurance products |
| `link_pago` | `@weeii/sdk/link_pago` | Payment links |

### Pagos & Finanzas

| Module | Export path | Description |
|---|---|---|
| `pago` | `@weeii/sdk/pago` | Payments |
| `estatus_pago` | `@weeii/sdk/estatus_pago` | Payment status catalogue |
| `tipo_pago` | `@weeii/sdk/tipo_pago` | Payment type catalogue |
| `metodo_pago` | `@weeii/sdk/metodo_pago` | Payment methods |
| `movimiento` | `@weeii/sdk/movimiento` | Balance movements |
| `abono` | `@weeii/sdk/abono` | Credits / payments applied |
| `adeudo` | `@weeii/sdk/adeudo` | Debts |
| `deposito` | `@weeii/sdk/deposito` | Deposits |
| `retiro` | `@weeii/sdk/retiro` | Withdrawals |
| `concepto` | `@weeii/sdk/concepto` | Payment concepts |
| `saldo_usuario` | `@weeii/sdk/saldo_usuario` | User balance |
| `saldo_negocio` | `@weeii/sdk/saldo_negocio` | Business balance |
| `tarjeta` | `@weeii/sdk/tarjeta` | Cards |

### Métodos de Pago Legados

| Module | Export path | Description |
|---|---|---|
| `efectivo` | `@weeii/sdk/efectivo` | Cash payments |
| `saldo` | `@weeii/sdk/saldo` | Balance payments |
| `terminal_externa` | `@weeii/sdk/terminal_externa` | External terminal payments |
| `conekta` | `@weeii/sdk/conekta` | Conekta card payments |
| `openpay` | `@weeii/sdk/openpay` | OpenPay card payments |
| `pagos_edit_parms` | `@weeii/sdk/pagos_edit_parms` | Payment edit parameters |

### Contenido

| Module | Export path | Description |
|---|---|---|
| `banner` | `@weeii/sdk/banner` | Banners |
| `historia` | `@weeii/sdk/historia` | Stories |
| `historia_post` | `@weeii/sdk/historia_post` | Story posts |

### Zonas & Horarios

| Module | Export path | Description |
|---|---|---|
| `zona` | `@weeii/sdk/zona` | Delivery zones |
| `zona_negocio` | `@weeii/sdk/zona_negocio` | Business zones |
| `zona_repartidor` | `@weeii/sdk/zona_repartidor` | Courier zones |
| `horario` | `@weeii/sdk/horario` | Schedules |
| `horario_negocio` | `@weeii/sdk/horario_negocio` | Business schedules |

### Configuración

| Module | Export path | Description |
|---|---|---|
| `configuracion` | `@weeii/sdk/configuracion` | Configuration |
| `configuracion_negocio` | `@weeii/sdk/configuracion_negocio` | Business configuration |

### Equipos

| Module | Export path | Description |
|---|---|---|
| `equipo` | `@weeii/sdk/equipo` | Teams |
| `lider` | `@weeii/sdk/lider` | Team leaders |
| `miembro` | `@weeii/sdk/miembro` | Team members |
| `equipo_chat` | `@weeii/sdk/equipo_chat` | Team chats |
| `equipo_chat_usr` | `@weeii/sdk/equipo_chat_usr` | Team chat users |
| `equipo_chat_msj` | `@weeii/sdk/equipo_chat_msj` | Team chat messages |

### Tickets de Soporte

| Module | Export path | Description |
|---|---|---|
| `ticket` | `@weeii/sdk/ticket` | Support tickets |
| `ticket_chat` | `@weeii/sdk/ticket_chat` | Ticket chats |
| `ticket_chat_msj` | `@weeii/sdk/ticket_chat_msj` | Ticket chat messages |
| `ticket_chat_usr` | `@weeii/sdk/ticket_chat_usr` | Ticket chat users |

### Trámites y Flujos de Trabajo

| Module | Export path | Description |
|---|---|---|
| `tramite` | `@weeii/sdk/tramite` | Procedures / workflows |
| `requisito` | `@weeii/sdk/requisito` | Workflow requirements |
| `validacion` | `@weeii/sdk/validacion` | Validations |
| `prueba` | `@weeii/sdk/prueba` | Tests / verifications |
| `solicitud` | `@weeii/sdk/solicitud` | Requests / applications |

### Notificaciones

| Module | Export path | Description |
|---|---|---|
| `notificacion` | `@weeii/sdk/notificacion` | Notifications |
| `notificacion_usuario` | `@weeii/sdk/notificacion_usuario` | User notifications |
| `notificacion_draft` | `@weeii/sdk/notificacion_draft` | Notification drafts |
| `notificacion_obj` | `@weeii/sdk/notificacion_obj` | Notification objects |
| `tipo_notificacion` | `@weeii/sdk/tipo_notificacion` | Notification type catalogue |

### Permisos & Roles

| Module | Export path | Description |
|---|---|---|
| `rol` | `@weeii/sdk/rol` | Roles |
| `permiso` | `@weeii/sdk/permiso` | Permissions |
| `rol_permiso` | `@weeii/sdk/rol_permiso` | Role ↔ permission relations |
| `usuario_rol` | `@weeii/sdk/usuario_rol` | User roles |

### Adjuntos

| Module | Export path | Description |
|---|---|---|
| `adjunto` | `@weeii/sdk/adjunto` | Attachments |
| `adjunto_referencia` | `@weeii/sdk/adjunto_referencia` | Attachment references |
| `tipo_adjunto` | `@weeii/sdk/tipo_adjunto` | Attachment type catalogue |

### Reportes & Auditoría

| Module | Export path | Description |
|---|---|---|
| `reporte` | `@weeii/sdk/reporte` | Reports |
| `log_actividad` | `@weeii/sdk/log_actividad` | Activity logs |
| `busqueda` | `@weeii/sdk/busqueda` | Search logs |

### Plantillas

| Module | Export path | Description |
|---|---|---|
| `plantilla` | `@weeii/sdk/plantilla` | Templates |
| `plantilla_mensaje` | `@weeii/sdk/plantilla_mensaje` | Message templates |

### Catálogos de Tipos

| Module | Export path | Description |
|---|---|---|
| `tipo_ubicacion` | `@weeii/sdk/tipo_ubicacion` | Location types |
| `tipo_movimiento` | `@weeii/sdk/tipo_movimiento` | Movement types |
| `tipo_producto` | `@weeii/sdk/tipo_producto` | Product types |
| `tipo_descuento` | `@weeii/sdk/tipo_descuento` | Discount types |
| `tipo_promocion` | `@weeii/sdk/tipo_promocion` | Promotion types |
| `tipo_reporte` | `@weeii/sdk/tipo_reporte` | Report types |

### Utilidades Internas

| Module | Export path | Description |
|---|---|---|
| `uccc` | `@weeii/sdk/uccc` | UCCC utility |
| `uve` | `@weeii/sdk/uve` | UVE utility |
| `uvt` | `@weeii/sdk/uvt` | UVT utility |

## Build & Test

```bash
# Type check (no output)
pnpm typecheck

# Build (ESM + declarations)
pnpm build

# Run tests
pnpm test

# Watch mode tests
pnpm test:watch

# Coverage report
pnpm test:coverage
```

## License

MIT
