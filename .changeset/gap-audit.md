---
"@silasdevs/sdk": major
---

**Breaking changes**

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
