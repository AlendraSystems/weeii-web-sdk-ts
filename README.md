# @silasdevs/sdk

TypeScript SDK for the Weeii platform. Provides a fully-typed, reactive client that communicates over a persistent WebSocket connection with automatic session resumption, a normalised entity store, and React hooks.

---

## Table of Contents

- [Architecture](#architecture)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Connection Lifecycle](#connection-lifecycle)
- [Making Requests](#making-requests)
- [Reactive Store](#reactive-store)
- [Session Management](#session-management)
- [Error Handling](#error-handling)
- [React Integration](#react-integration)
  - [WeeiiProvider](#weeii-provider)
  - [useWeeiiContext](#useweeiicontext)
  - [useWeeiiConnection](#useweeiiconnection)
  - [useWeeiiQuery](#useweeiiquery)
  - [useWeeiiMutation](#useweeiimutation)
  - [useWeeiiCollection](#useweeiiicollection)
  - [useWeeiiRecord](#useweeiirecord)
  - [useWeeiiPaginatedCollection](#useweeiiipaginatedcollection)
- [Vanilla / Framework-agnostic Usage](#vanilla--framework-agnostic-usage)
- [Example App](#example-app)
- [Module Reference](#module-reference)
- [Build & Test](#build--test)

---

## Architecture

```
Your App
  │
  ├── configureWeeii()       — one-time init: URL, env, global error callbacks
  │
  ├─── Transport (singleton) ─────────────────────────────────────────────────
  │         WebSocket  ←──────────────────── wss://api.weeii.app/ws
  │         │  WEEII_PROTOCOL             (Erlang/Phoenix backend)
  │         │  request(channel, data)  →  { interfaz, id_mensaje, datos }
  │         │  response                ←  { codigo, descripcion, datos }
  │         │  auto-reconnect (5 s, ∞ retries)
  │
  ├─── Store (singleton) ─────────────────────────────────────────────────────
  │         Normalised entity tables  (e.g.  ticket[1], ticket[2], ...)
  │         Schema:  112 tables, entity IDs for prop-based resolution
  │         classifyData()  called after every response — auto-hydrates tables
  │
  ├─── Session Storage ────────────────────────────────────────────────────────
  │         localStorage key: "weeii_sdk"
  │         Stores: { token, token_push }
  │         Loaded on connect → resumirSesion() called automatically
  │
  └─── Domain Modules  (@silasdevs/sdk/<module>) ──────────────────────────────────
            request('channel_name', params)
            Returns: WeeiiIncomingMessage<{ entity: T }>
                       .data     — typed payload
                       .changes  — what changed in the store
```

Every domain API call follows the same path:

1. `request(channel, params)` sends a message over the WebSocket with a unique `id_mensaje`.
2. The transport awaits a matching response.
3. `classifyData()` normalises the `datos` payload into the store tables.
4. The enriched message (`data` + `changes`) is returned to the caller.
5. Any React components subscribed to affected store tables re-render.

---

## Installation

```bash
npm install @silasdevs/sdk
# or
pnpm add @silasdevs/sdk
```

React hooks require React 18+:

```bash
pnpm add react react-dom @types/react @types/react-dom
```

---

## Quick Start

```typescript
import { configureWeeii, conectarYResumir } from '@silasdevs/sdk';
import { iniciarSesionConTelefono, saveSessionToken } from '@silasdevs/sdk/sesion';
import { pedidos } from '@silasdevs/sdk/orden';

// 1. Configure once at app startup (idempotent — safe to call multiple times)
configureWeeii({
  url: 'wss://api.weeii.app/ws',
  onAlert: (msg) => alert(msg),
  onError: (msg) => console.error(msg),
});

// 2. Connect and attempt to resume a stored session
conectarYResumir({
  onConnected:  () => console.log('socket open'),
  onSession:    (msg) => console.log('resumed as', msg.data.sesion.usuario),
  onNoSession:  () => navigateTo('/login'),
  onFailed:     () => navigateTo('/login'),
});

// 3. Log in (after the socket is open)
const res = await iniciarSesionConTelefono({ telefono: '5512345678', clave: 'secret' });
saveSessionToken(res.data.sesion.token);   // persists to localStorage

// 4. Call any domain module
const { data, changes } = await pedidos({ id_ultimo: 0, filas: 20 });
console.log(data.orden);    // Orden[]
console.log(changes);       // { upserted: { orden: [...] }, deleted: {} }
```

---

## Configuration

`configureWeeii(config)` must be called once before any API call. It is **idempotent** — subsequent calls are silently ignored, so it is safe to call inside a component.

```typescript
import { configureWeeii } from '@silasdevs/sdk';
import type { WeeiiConfig } from '@silasdevs/sdk';

const config: WeeiiConfig = {
  // Required ─────────────────────────────────────────────────────────────────
  url: 'wss://api.weeii.app/ws',

  // Optional ──────────────────────────────────────────────────────────────────
  env:   'production',   // 'production' | 'staging' | 'testing' | 'development'
  debug: false,          // enables verbose transport logging

  // Server-push callbacks (no active request matched these responses) ─────────
  onAlert:   (description) => showToast(description, 'info'),
  onMessage: (description) => showToast(description, 'success'),
  onError:   (description) => showToast(description, 'error'),
};

configureWeeii(config);
```

`configureWeeii` internally calls:
- `initStore()` — creates the singleton normalised entity store.
- `initTransport(url)` — opens the WebSocket connection with auto-reconnect.

---

## Connection Lifecycle

The transport connects automatically when `configureWeeii` is called and reconnects indefinitely with a 5-second delay after any disconnect.

`conectarYResumir` listens for the first `connected` event and then attempts session resumption using a token from `localStorage`. It is the recommended way to bootstrap your app.

```typescript
import { conectarYResumir } from '@silasdevs/sdk';

conectarYResumir({
  /**
   * Called as soon as the WebSocket opens.
   * Return `false` to skip session resumption (e.g. if you want manual login only).
   */
  onConnected: () => {
    setConnectionStatus('connected');
    // return false;  // uncomment to skip resume
  },

  /** No token in localStorage — user needs to log in. */
  onNoSession: () => navigate('/login'),

  /** Server accepted the stored token — session is live. */
  onSession: (msg) => {
    const { sesion } = msg.data;
    setCurrentUser(sesion.usuario);
    navigate('/dashboard');
  },

  /** Server rejected the token (expired or invalidated). */
  onFailed: () => navigate('/login'),
});
```

You can also listen to transport events directly for granular connection state tracking:

```typescript
import { getTransport } from '@silasdevs/sdk';

const transport = getTransport();

transport.on('connected',    () => setStatus('online'));
transport.on('disconnected', () => setStatus('offline'));
transport.on('reconnecting', () => setStatus('reconnecting'));
```

---

## Making Requests

Every domain module exposes typed async functions. They all return `Promise<WeeiiIncomingMessage<T>>`.

```typescript
import { pedidoPorId, editarOrden } from '@silasdevs/sdk/orden';
import type { Orden } from '@silasdevs/sdk/orden';
import type { WeeiiIncomingMessage } from '@silasdevs/sdk';

// Query
const res: WeeiiIncomingMessage<{ orden: Orden }> = await pedidoPorId({ id: 42 });
const order = res.data.orden;       // fully typed Orden

// Mutation
const { data, changes } = await editarOrden({ id: 42, estatus: 'entregado' });
//    data     — { orden: Orden }   the updated entity
//    changes  — what changed in the normalised store
//              { upserted: { orden: [{ id: 42, ... }] }, deleted: {} }
```

`WeeiiIncomingMessage<T>` extends the transport `IncomingMessage<T>` with a `changes` field:

```typescript
interface WeeiiIncomingMessage<BData = Record<string, unknown>> {
  code:        string;       // 'OK', 'ERROR', etc.
  description: string;       // human-readable server message
  data:        BData;        // typed payload (e.g. { orden: Orden })
  changes:     ClassifyResult; // { upserted, deleted } store changes
}
```

### Pagination

Paginated queries accept `id_ultimo` (cursor) and `filas` (page size):

```typescript
import { pedidos } from '@silasdevs/sdk/orden';

// First page
const page1 = await pedidos({ id_ultimo: 0, filas: 20 });

// Next page — id_ultimo is the id of the last record in the previous page
const lastId = page1.data.orden.at(-1)?.id ?? 0;
const page2  = await pedidos({ id_ultimo: lastId, filas: 20 });
```

---

## Reactive Store

The SDK maintains a singleton normalised entity store. After every successful API call, `classifyData()` runs automatically and merges the response payload into the store tables. React hooks subscribe to these tables and re-render only when their slice changes.

### How classification works

The server sends responses containing one or more entity arrays (e.g. `{ orden: [...], concepto: [...] }`). `classifyData()` inspects each array, identifies the target table using either:

- **Entity ID resolution** — if a record has an `id_entidad` field, the store schema matches it to the correct table regardless of the key name. This is how the Erlang backend broadcasts polymorphic payloads.
- **Name resolution** — the payload key (`"orden"`, `"concepto"`) maps directly to the table of the same name.

```typescript
// The schema entry for 'orden' uses entity ID 204:
//   entity(204) → resolverProp: 'id_entidad', resolverValue: 204
// So a payload { registros: [{ id_entidad: 204, id: 1, ... }] }
// will land in the 'orden' table automatically.
```

### Accessing the store directly

```typescript
import { getStore } from '@silasdevs/sdk';

const store = getStore();

// Get all records in a table
const all = store.getCollection('ticket');   // { items: Ticket[], count: number }

// Get a single record by ID
const one = store.getRecord('ticket', 42);   // Ticket | undefined
```

---

## Session Management

Session tokens are persisted in `localStorage` under the key `"weeii_sdk"`.

```typescript
import {
  saveSessionToken,
  loadSessionToken,
  savePushToken,
  loadPushToken,
  clearSession,
  clearAll,
} from '@silasdevs/sdk';

// After a successful login
const { data } = await iniciarSesionConTelefono({ telefono: '55...', clave: '...' });
saveSessionToken(data.sesion.token);

// Save a push notification token (optional)
savePushToken(fcmToken);

// On logout
clearSession();   // removes token but keeps token_push
clearAll();       // removes everything including token_push
```

On the next page load, `conectarYResumir()` will automatically read the stored token and call `resumirSesion()` before your app renders. If the token is valid, `onSession` fires with the full session payload. If it is expired, `onFailed` fires so you can redirect to login.

---

## Error Handling

### Transport errors

If the server returns an error code (`ERROR`, `NO_AUTORIZADO`, `NO_ENCONTRADO`, `CONFLICTO`) for a specific request, the promise rejects with a `TransportError`:

```typescript
import { registrarTicket } from '@silasdevs/sdk/ticket';

try {
  const { data } = await registrarTicket({ titulo: 'Mi problema' });
} catch (err) {
  // err.code        → 'ERROR' | 'NO_AUTORIZADO' | ...
  // err.description → human-readable message from the server
  // err.data        → partial response data (if any), already in the store
  console.error(err.code, err.description);
}
```

### Server-push errors

Unmatched server messages (broadcast errors with no pending request) are routed to the `onAlert` / `onMessage` / `onError` callbacks you provided in `configureWeeii`. Wire them to your notification system:

```typescript
configureWeeii({
  url: '...',
  onAlert:   (d) => toast.info(d),
  onMessage: (d) => toast.success(d),
  onError:   (d) => toast.error(d),
});
```

### Wire protocol error codes

| Code | Meaning |
|---|---|
| `OK` | Request succeeded |
| `PROCESANDO` | Interim response — more data coming |
| `ERROR` | General server error |
| `NO_AUTORIZADO` | Authentication required or token invalid |
| `NO_ENCONTRADO` | Requested resource does not exist |
| `CONFLICTO` | Business rule violation or state conflict |

---

## React Integration

All React utilities live in `@silasdevs/sdk/react`. They require React 18+ and must be used inside a `<WeeiiProvider>`.

### WeeiiProvider

Wrap your entire app once. The provider calls `configureWeeii`, opens the WebSocket, and attempts session resumption. All child components have access to connection and auth state.

```tsx
import { WeeiiProvider } from '@silasdevs/sdk/react';

function Root() {
  return (
    <WeeiiProvider
      config={{
        url:      import.meta.env.VITE_WS_URL,
        onAlert:  (d) => toast.info(d),
        onError:  (d) => toast.error(d),
      }}
      onSession={({ data }) => setCurrentUser(data.sesion)}
      onNoSession={() => navigate('/login')}
      onFailed={() => navigate('/login')}
    >
      <App />
    </WeeiiProvider>
  );
}
```

### useWeeiiContext

Reads connection status and auth state from anywhere inside the provider.

```tsx
import { useWeeiiContext } from '@silasdevs/sdk/react';

function StatusBar() {
  const { connected, reconnecting, authState } = useWeeiiContext();

  if (reconnecting) return <Banner>Reconnecting…</Banner>;
  if (authState === 'pending') return <Spinner />;
  return <span>{connected ? '●' : '○'}</span>;
}
```

| Field | Type | Description |
|---|---|---|
| `status` | `'connecting' \| 'connected' \| 'disconnected' \| 'reconnecting'` | Raw status |
| `connected` | `boolean` | `true` when socket is open |
| `reconnecting` | `boolean` | `true` while trying to reconnect |
| `authState` | `'pending' \| 'authenticated' \| 'unauthenticated'` | Auth phase |

### useWeeiiConnection

Standalone hook (outside `WeeiiProvider`) to track the transport state.

```tsx
import { useWeeiiConnection } from '@silasdevs/sdk/react';

function Indicator() {
  const { connected, reconnecting } = useWeeiiConnection();
  return <div className={connected ? 'green' : reconnecting ? 'yellow' : 'red'} />;
}
```

### useWeeiiQuery

Fetches data on mount (or when deps change) and manages `isLoading` / `error` state. Mirrors the React Query `useQuery` API.

```tsx
import { useWeeiiQuery } from '@silasdevs/sdk/react';
import { tickets, ticketsAbiertos } from '@silasdevs/sdk/ticket';
import type { Ticket } from '@silasdevs/sdk/ticket';

function TicketList({ showAll }: { showAll: boolean }) {
  const { data, isLoading, error, refetch } = useWeeiiQuery(
    () => (showAll ? tickets() : ticketsAbiertos()),
    [showAll],   // re-fetch when showAll changes
  );

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  const items = data?.data.ticket ?? [];

  return (
    <ul>
      {items.map((t: Ticket) => (
        <li key={t.id}>{t.titulo}</li>
      ))}
    </ul>
  );
}
```

`useWeeiiQuery` options:

| Option | Type | Description |
|---|---|---|
| `onSuccess` | `(data) => void` | Called after a successful fetch |
| `onError` | `(err) => void` | Called if the request throws |
| `enabled` | `boolean` | Set to `false` to skip the initial fetch |

### useWeeiiMutation

Provides `mutate` and `mutateAsync` functions for write operations (create, edit, delete). Does not run automatically.

```tsx
import { useWeeiiMutation } from '@silasdevs/sdk/react';
import { registrarTicket } from '@silasdevs/sdk/ticket';

function CreateTicketButton() {
  const { mutate, isLoading, error } = useWeeiiMutation(
    (params: { titulo: string; descripcion?: string }) => registrarTicket(params),
    {
      onSuccess: ({ data }) => {
        toast.success(`Ticket #${data.ticket.id} creado`);
      },
      onError: (err) => toast.error(err.description),
    },
  );

  return (
    <button disabled={isLoading} onClick={() => mutate({ titulo: 'Problema de acceso' })}>
      {isLoading ? 'Creando…' : 'Nuevo ticket'}
    </button>
  );
}
```

`useWeeiiMutation` returns:

| Field | Type | Description |
|---|---|---|
| `mutate` | `(params) => void` | Fire-and-forget, errors swallowed |
| `mutateAsync` | `(params) => Promise<T>` | Returns the result or throws |
| `isLoading` | `boolean` | `true` while the request is in-flight |
| `error` | `unknown \| null` | Last error, reset on next call |

### useWeeiiCollection

Subscribes to an entire table in the store. Re-renders automatically when any record in that table is upserted or deleted.

```tsx
import { useWeeiiCollection } from '@silasdevs/sdk/react';
import type { Ticket } from '@silasdevs/sdk/ticket';

function TicketCounter() {
  const { items, count } = useWeeiiCollection<Ticket>('ticket');
  return <span>{count} tickets in store</span>;
}
```

> **Note**: `useWeeiiCollection` reflects whatever is currently in the store — you still need to fetch data first with `useWeeiiQuery` or a direct API call. The hook just subscribes to updates.

### useWeeiiRecord

Subscribes to a single record by ID. Returns `undefined` until the record is fetched.

```tsx
import { useWeeiiRecord } from '@silasdevs/sdk/react';
import type { Ticket } from '@silasdevs/sdk/ticket';

function TicketDetail({ id }: { id: number }) {
  const ticket = useWeeiiRecord<Ticket>('ticket', id);

  if (!ticket) return <Spinner />;
  return <h1>{ticket.titulo}</h1>;
}
```

### useWeeiiPaginatedCollection

Bidirectional paginated list powered by a cursor. Keeps loaded pages in memory and lets you append at either end.

```tsx
import { useEffect } from 'react';
import { useWeeiiPaginatedCollection } from '@silasdevs/sdk/react';
import { tickets } from '@silasdevs/sdk/ticket';
import type { Ticket } from '@silasdevs/sdk/ticket';

const PAGE_SIZE = 20;

function PaginatedTickets() {
  const { items, count, hasMore, cursorFor, addPage, clear } =
    useWeeiiPaginatedCollection<Ticket>('ticket');

  // Load first page on mount
  useEffect(() => {
    tickets({ id_ultimo: 0, filas: PAGE_SIZE }).then((res) =>
      addPage(res.data.ticket, 'end'),
    );
  }, []);

  const loadMore = async () => {
    const cursor = cursorFor('end');   // id of the last loaded record
    const res = await tickets({ id_ultimo: cursor, filas: PAGE_SIZE });
    addPage(res.data.ticket, 'end');
  };

  return (
    <>
      <ul>
        {items.map((t) => <li key={t.id}>{t.titulo}</li>)}
      </ul>
      {hasMore && (
        <button onClick={loadMore}>Load more ({count} loaded)</button>
      )}
    </>
  );
}
```

---

## Vanilla / Framework-agnostic Usage

The SDK works without React. Use the store directly and subscribe to transport events for reactive updates.

```typescript
import { configureWeeii, conectarYResumir, getStore, getTransport } from '@silasdevs/sdk';
import { tickets } from '@silasdevs/sdk/ticket';

configureWeeii({ url: 'wss://api.weeii.app/ws' });
const store     = getStore();
const transport = getTransport();

conectarYResumir({
  onSession: async () => {
    const { data } = await tickets({ id_ultimo: 0, filas: 50 });
    render(data.ticket);
  },
});

// Re-render when the store changes
store.subscribe('ticket', () => {
  const { items } = store.getCollection('ticket');
  render(items);
});
```

---

## Example App

An annotated minimal app demonstrating the full lifecycle (session, listing, pagination, mutations) lives in the [`example/`](./example/) folder. See [example/README.md](./example/README.md) for setup instructions.

---

## Module Reference

112 modules are available as individual subpath exports (`@silasdevs/sdk/<module>`).

### Core

| Module | Export path | Description |
|---|---|---|
| `sesion` | `@silasdevs/sdk/sesion` | Session management |
| `usuario` | `@silasdevs/sdk/usuario` | Users |
| `informacion_basica` | `@silasdevs/sdk/informacion_basica` | Profile / basic info |
| `negocio` | `@silasdevs/sdk/negocio` | Business entity |
| `negocio_cliente` | `@silasdevs/sdk/negocio_cliente` | Business ↔ client relations |
| `cliente` | `@silasdevs/sdk/cliente` | Clients |
| `ubicacion` | `@silasdevs/sdk/ubicacion` | Addresses / locations |

### Aplicaciones & Plataforma

| Module | Export path | Description |
|---|---|---|
| `aplicacion` | `@silasdevs/sdk/aplicacion` | Applications |
| `plataforma` | `@silasdevs/sdk/plataforma` | Platforms |
| `usuario_credenciales` | `@silasdevs/sdk/usuario_credenciales` | User credentials |

### Pedidos & Entregas

| Module | Export path | Description |
|---|---|---|
| `orden` | `@silasdevs/sdk/orden` | Orders |
| `orden_linea` | `@silasdevs/sdk/orden_linea` | Order lines |
| `orden_pago` | `@silasdevs/sdk/orden_pago` | Order payments |
| `entrega` | `@silasdevs/sdk/entrega` | Deliveries |
| `entrega_estatus` | `@silasdevs/sdk/entrega_estatus` | Delivery status |
| `entrega_evidencia` | `@silasdevs/sdk/entrega_evidencia` | Delivery evidence |
| `entrega_gps` | `@silasdevs/sdk/entrega_gps` | Delivery GPS tracking |
| `entrega_mensaje` | `@silasdevs/sdk/entrega_mensaje` | Delivery messages |
| `entrega_repartidor` | `@silasdevs/sdk/entrega_repartidor` | Delivery ↔ courier |
| `entrega_usuario_calificacion` | `@silasdevs/sdk/entrega_usuario_calificacion` | Delivery ratings |
| `entrega_plantilla` | `@silasdevs/sdk/entrega_plantilla` | Delivery templates |
| `entrega_multa_aborcion` | `@silasdevs/sdk/entrega_multa_aborcion` | Abandonment penalties |
| `entrega_multa_cancelacion` | `@silasdevs/sdk/entrega_multa_cancelacion` | Cancellation penalties |
| `estatus_entrega` | `@silasdevs/sdk/estatus_entrega` | Delivery status catalogue |

### Repartidores

| Module | Export path | Description |
|---|---|---|
| `repartidor` | `@silasdevs/sdk/repartidor` | Couriers |
| `repartidor_on` | `@silasdevs/sdk/repartidor_on` | Courier online status |
| `repartidor_zona` | `@silasdevs/sdk/repartidor_zona` | Courier zones |
| `repartidor_disponibilidad` | `@silasdevs/sdk/repartidor_disponibilidad` | Courier availability |
| `jornada` | `@silasdevs/sdk/jornada` | Work shifts |

### Catálogo

| Module | Export path | Description |
|---|---|---|
| `categoria` | `@silasdevs/sdk/categoria` | Categories |
| `producto` | `@silasdevs/sdk/producto` | Products |
| `producto_variante` | `@silasdevs/sdk/producto_variante` | Product variants |
| `producto_presentacion` | `@silasdevs/sdk/producto_presentacion` | Product presentations |
| `inventario` | `@silasdevs/sdk/inventario` | Inventory |
| `precio` | `@silasdevs/sdk/precio` | Prices |
| `descuento` | `@silasdevs/sdk/descuento` | Discounts |
| `promocion` | `@silasdevs/sdk/promocion` | Promotions |
| `etiqueta` | `@silasdevs/sdk/etiqueta` | Tags |
| `etiqueta_producto` | `@silasdevs/sdk/etiqueta_producto` | Product tags |

### Comercio

| Module | Export path | Description |
|---|---|---|
| `paquete` | `@silasdevs/sdk/paquete` | Packages / bundles |
| `seguro` | `@silasdevs/sdk/seguro` | Insurance products |
| `link_pago` | `@silasdevs/sdk/link_pago` | Payment links |

### Pagos & Finanzas

| Module | Export path | Description |
|---|---|---|
| `pago` | `@silasdevs/sdk/pago` | Payments |
| `estatus_pago` | `@silasdevs/sdk/estatus_pago` | Payment status catalogue |
| `tipo_pago` | `@silasdevs/sdk/tipo_pago` | Payment type catalogue |
| `metodo_pago` | `@silasdevs/sdk/metodo_pago` | Payment methods |
| `movimiento` | `@silasdevs/sdk/movimiento` | Balance movements |
| `abono` | `@silasdevs/sdk/abono` | Credits / payments applied |
| `adeudo` | `@silasdevs/sdk/adeudo` | Debts |
| `deposito` | `@silasdevs/sdk/deposito` | Deposits |
| `retiro` | `@silasdevs/sdk/retiro` | Withdrawals |
| `concepto` | `@silasdevs/sdk/concepto` | Payment concepts |
| `saldo_usuario` | `@silasdevs/sdk/saldo_usuario` | User balance |
| `saldo_negocio` | `@silasdevs/sdk/saldo_negocio` | Business balance |
| `tarjeta` | `@silasdevs/sdk/tarjeta` | Cards |

### Métodos de Pago Legados

| Module | Export path | Description |
|---|---|---|
| `efectivo` | `@silasdevs/sdk/efectivo` | Cash payments |
| `saldo` | `@silasdevs/sdk/saldo` | Balance payments |
| `terminal_externa` | `@silasdevs/sdk/terminal_externa` | External terminal payments |
| `conekta` | `@silasdevs/sdk/conekta` | Conekta card payments |
| `openpay` | `@silasdevs/sdk/openpay` | OpenPay card payments |
| `pagos_edit_parms` | `@silasdevs/sdk/pagos_edit_parms` | Payment edit parameters |

### Contenido

| Module | Export path | Description |
|---|---|---|
| `banner` | `@silasdevs/sdk/banner` | Banners |
| `historia` | `@silasdevs/sdk/historia` | Stories |
| `historia_post` | `@silasdevs/sdk/historia_post` | Story posts |

### Zonas & Horarios

| Module | Export path | Description |
|---|---|---|
| `zona` | `@silasdevs/sdk/zona` | Delivery zones |
| `zona_negocio` | `@silasdevs/sdk/zona_negocio` | Business zones |
| `zona_repartidor` | `@silasdevs/sdk/zona_repartidor` | Courier zones |
| `horario` | `@silasdevs/sdk/horario` | Schedules |
| `horario_negocio` | `@silasdevs/sdk/horario_negocio` | Business schedules |

### Configuración

| Module | Export path | Description |
|---|---|---|
| `configuracion` | `@silasdevs/sdk/configuracion` | Configuration |
| `configuracion_negocio` | `@silasdevs/sdk/configuracion_negocio` | Business configuration |

### Equipos

| Module | Export path | Description |
|---|---|---|
| `equipo` | `@silasdevs/sdk/equipo` | Teams |
| `lider` | `@silasdevs/sdk/lider` | Team leaders |
| `miembro` | `@silasdevs/sdk/miembro` | Team members |
| `equipo_chat` | `@silasdevs/sdk/equipo_chat` | Team chats |
| `equipo_chat_usr` | `@silasdevs/sdk/equipo_chat_usr` | Team chat users |
| `equipo_chat_msj` | `@silasdevs/sdk/equipo_chat_msj` | Team chat messages |

### Tickets de Soporte

| Module | Export path | Description |
|---|---|---|
| `ticket` | `@silasdevs/sdk/ticket` | Support tickets |
| `ticket_chat` | `@silasdevs/sdk/ticket_chat` | Ticket chats |
| `ticket_chat_msj` | `@silasdevs/sdk/ticket_chat_msj` | Ticket chat messages |
| `ticket_chat_usr` | `@silasdevs/sdk/ticket_chat_usr` | Ticket chat users |

### Trámites y Flujos de Trabajo

| Module | Export path | Description |
|---|---|---|
| `tramite` | `@silasdevs/sdk/tramite` | Procedures / workflows |
| `requisito` | `@silasdevs/sdk/requisito` | Workflow requirements |
| `validacion` | `@silasdevs/sdk/validacion` | Validations |
| `prueba` | `@silasdevs/sdk/prueba` | Tests / verifications |
| `solicitud` | `@silasdevs/sdk/solicitud` | Requests / applications |

### Notificaciones

| Module | Export path | Description |
|---|---|---|
| `notificacion` | `@silasdevs/sdk/notificacion` | Notifications |
| `notificacion_usuario` | `@silasdevs/sdk/notificacion_usuario` | User notifications |
| `notificacion_draft` | `@silasdevs/sdk/notificacion_draft` | Notification drafts |
| `notificacion_obj` | `@silasdevs/sdk/notificacion_obj` | Notification objects |
| `tipo_notificacion` | `@silasdevs/sdk/tipo_notificacion` | Notification type catalogue |

### Permisos & Roles

| Module | Export path | Description |
|---|---|---|
| `rol` | `@silasdevs/sdk/rol` | Roles |
| `permiso` | `@silasdevs/sdk/permiso` | Permissions |
| `rol_permiso` | `@silasdevs/sdk/rol_permiso` | Role ↔ permission relations |
| `usuario_rol` | `@silasdevs/sdk/usuario_rol` | User roles |

### Adjuntos

| Module | Export path | Description |
|---|---|---|
| `adjunto` | `@silasdevs/sdk/adjunto` | Attachments |
| `adjunto_referencia` | `@silasdevs/sdk/adjunto_referencia` | Attachment references |
| `tipo_adjunto` | `@silasdevs/sdk/tipo_adjunto` | Attachment type catalogue |

### Reportes & Auditoría

| Module | Export path | Description |
|---|---|---|
| `reporte` | `@silasdevs/sdk/reporte` | Reports |
| `log_actividad` | `@silasdevs/sdk/log_actividad` | Activity logs |
| `busqueda` | `@silasdevs/sdk/busqueda` | Search logs |

### Plantillas

| Module | Export path | Description |
|---|---|---|
| `plantilla` | `@silasdevs/sdk/plantilla` | Templates |
| `plantilla_mensaje` | `@silasdevs/sdk/plantilla_mensaje` | Message templates |

### Catálogos de Tipos

| Module | Export path | Description |
|---|---|---|
| `tipo_ubicacion` | `@silasdevs/sdk/tipo_ubicacion` | Location types |
| `tipo_movimiento` | `@silasdevs/sdk/tipo_movimiento` | Movement types |
| `tipo_producto` | `@silasdevs/sdk/tipo_producto` | Product types |
| `tipo_descuento` | `@silasdevs/sdk/tipo_descuento` | Discount types |
| `tipo_promocion` | `@silasdevs/sdk/tipo_promocion` | Promotion types |
| `tipo_reporte` | `@silasdevs/sdk/tipo_reporte` | Report types |

### Utilidades Internas

| Module | Export path | Description |
|---|---|---|
| `uccc` | `@silasdevs/sdk/uccc` | UCCC utility |
| `uve` | `@silasdevs/sdk/uve` | UVE utility |
| `uvt` | `@silasdevs/sdk/uvt` | UVT utility |

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
