# Changelog

## 2.0.1

### Patch Changes

- [#5](https://github.com/AlendraSystems/weeii-web-sdk-ts/pull/5) [`6566a0d`](https://github.com/AlendraSystems/weeii-web-sdk-ts/commit/6566a0dedd63f0646c791a7404eaa52a53113e6f) Thanks [@maldonadoj8](https://github.com/maldonadoj8)! - Full server-parity audit

## 2.0.0

### Major Changes

- [#2](https://github.com/AlendraSystems/weeii-web-sdk-ts/pull/2) [`1665f9f`](https://github.com/AlendraSystems/weeii-web-sdk-ts/commit/1665f9fae8f3c9a0ada661c00acead71eb227ddd) Thanks [@maldonadoj8](https://github.com/maldonadoj8)! - **Breaking changes**

  - Removed `marcarTodasVistas` from `notificacion` — the channel `notificacion_todas_vistas` does not exist on the server. Re-add once the server handler is implemented.
  - Removed `cerrarOrden` from `orden` — the channel `orden_cerrar` does not exist on the server. Re-add once the server handler is implemented.

  **Bug fixes**

  - Fixed `asignarTokenPush` in `sesion` — was sending to `asignar_token_push`; now correctly sends to `sesion_asignar_token_push`.
  - Fixed `historiaPostPublicoGeneral` in `historia_post` — was sending to legacy `historia_post_publico_general`; now correctly sends to `historia_post_q_publico_general`.

  **New functions**

  - `notificacion`: `notificacionSearch`
  - `orden`: `ordenEditParms`
  - `openpay`: `registrarTarjetaOpenpay`
  - `link_pago`: `linkPagoEditParms`
  - `usuario`: `usuarioDarseDeBaja`, `eliminarUsuario`
  - `entrega_usuario_calificacion`: `calificacionesPorIdUsuario`
  - `historia_post`: `historiaPostsPorIdHistoria`
  - `entrega_plantilla`: `entregaPlantillaQIdClienteClienteBool1/2/3`, `entregaPlantillaQIdClienteAdmonBool1/2/3`

  **Server routing (api_apis.erl)**

  - Registered `cliente_*` channels (`cliente`, `cliente_search`, `cliente_q_id`, `cliente_q_id_usuario`, `cliente_mio`, `cliente_editar`, `cliente_actualizar_ubicacion`) — server code existed but was not reachable via WebSocket.
  - Registered `solicitar_subida_de_archivo` — server code existed but was not reachable via WebSocket.

All notable changes to `@weeii/sdk` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2025-01-01

### Added — Full TypeScript SDK (112 modules)

#### New domain modules (31 added)

| Domain                  | Modules                                                                           |
| ----------------------- | --------------------------------------------------------------------------------- |
| Applications & Platform | `aplicacion`, `plataforma`, `usuario_credenciales`                                |
| Content                 | `banner`, `historia`, `historia_post`                                             |
| Commerce                | `paquete`, `seguro`                                                               |
| Payment methods         | `efectivo`, `saldo`, `terminal_externa`, `conekta`, `openpay`                     |
| Teams                   | `equipo`, `lider`, `miembro`, `equipo_chat`, `equipo_chat_usr`, `equipo_chat_msj` |
| Support tickets         | `ticket`, `ticket_chat`, `ticket_chat_msj`, `ticket_chat_usr`                     |
| Workflows               | `tramite`, `requisito`, `validacion`, `prueba`, `solicitud`                       |
| Notifications           | `notificacion_draft`, `notificacion_obj`                                          |
| Configuration           | `pagos_edit_parms`                                                                |

#### Test suite — 256 tests (7 new test files)

- `tests/modules/teams.test.ts`
- `tests/modules/tickets.test.ts`
- `tests/modules/workflows.test.ts`
- `tests/modules/payments.test.ts`
- `tests/modules/content.test.ts`
- `tests/modules/platform.test.ts`
- `tests/modules/notifications.test.ts`

### Fixed — Channel name bugs (15 corrections)

| Module               | Wrong channel               | Correct channel                             |
| -------------------- | --------------------------- | ------------------------------------------- |
| `equipo`             | `equipo_registrar`          | `registrar_equipo`                          |
| `equipo`             | `equipo_editar`             | `editar_equipo`                             |
| `equipo`             | `equipo_tomar`              | `tomar_equipo`                              |
| `equipo`             | `equipo_soltar`             | `soltar_equipo`                             |
| `notificacion_draft` | `notificacion_draft_q_tipo` | `notificacion_draft_q_id_tipo_notificacion` |
| `conekta`            | `conekta_mios`              | `conekta_q_mios`                            |
| `conekta`            | `conekta_tokenizar`         | `conekta_tokenizar_tarjeta`                 |
| `conekta`            | `conekta_guardar`           | `conekta_guardar_tarjeta`                   |
| `conekta`            | `conekta_eliminar`          | `conekta_eliminar_tarjeta`                  |
| `openpay`            | `openpay_mios`              | `openpay_q_mios`                            |
| `openpay`            | `openpay_tokenizar`         | `openpay_tokenizar_tarjeta`                 |
| `openpay`            | `openpay_guardar`           | `openpay_guardar_tarjeta`                   |
| `openpay`            | `openpay_eliminar`          | `openpay_eliminar_tarjeta`                  |
| `paquete`            | `paquete_permitido`         | `paquete_q_permitido`                       |

### Removed

- `openpayNuevoTokenVacio` function removed — no corresponding Erlang handler exists.

### Improved — Schema entity IDs

All 31 new modules upgraded from name-based resolution (`named()`) to
prop-based resolution (`entity(N)`) using confirmed Erlang entity IDs:

| Table                  | Entity ID |
| ---------------------- | --------- |
| `aplicacion`           | 21        |
| `plataforma`           | 20        |
| `usuario_credenciales` | 91        |
| `banner`               | 130       |
| `historia`             | 110       |
| `historia_post`        | 111       |
| `paquete`              | 50        |
| `seguro`               | 70        |
| `efectivo`             | 42        |
| `saldo`                | 43        |
| `terminal_externa`     | 46        |
| `conekta`              | 45        |
| `openpay`              | 47        |
| `equipo`               | 140       |
| `lider`                | 141       |
| `miembro`              | 142       |
| `equipo_chat`          | 143       |
| `equipo_chat_usr`      | 144       |
| `equipo_chat_msj`      | 145       |
| `ticket`               | 150       |
| `ticket_chat`          | 151       |
| `ticket_chat_msj`      | 153       |
| `ticket_chat_usr`      | 152       |
| `tramite`              | 120       |
| `requisito`            | 121       |
| `validacion`           | 122       |
| `prueba`               | 123       |
| `solicitud`            | 124       |
| `notificacion_draft`   | 171       |
| `notificacion_obj`     | 173       |

### Improved — `pagos_edit_parms` return type

Return type updated to reflect the actual Erlang response shape:

```typescript
{
  parametros: {
    por_modulo: {
      pagos: {
        pagos: PagosEditParmsResult;
      }
    }
  }
}
```

---

## [0.1.0] — 2025 (initial)

- Initial TypeScript SDK with 81 modules
- Reactive store, React hooks, session storage, protocol utilities
- Build: tsup + tsc declarations
- Tests: vitest (34 tests)
