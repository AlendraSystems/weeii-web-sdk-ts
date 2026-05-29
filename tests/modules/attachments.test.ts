/**
 * Phase 5: Attachments / Other modules
 *
 * Covers: adjunto, adjunto_referencia, archivo, tipo_adjunto,
 *         cliente, notificacion, tipo_notificacion, rol
 *
 * NOTE: `notificacion_todas_vistas` has no matching server handler in
 *       notificacion_interfaz.erl — kept as-is pending server implementation.
 * NOTE: `editarRol` was fixed: 'rol_editar' → 'editar_rol' to match server.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn(), fire: vi.fn() }));

import { request } from '../../src/api.js';

import { adjuntoSearch } from '../../src/modules/adjunto/api.js';
import { adjuntoReferenciaSearch } from '../../src/modules/adjunto_referencia/api.js';
import { solicitarSubidaDeArchivo } from '../../src/modules/archivo/api.js';
import {
  tipoAdjunto,
  tipoAdjuntoSearch,
  editarTipoAdjunto,
} from '../../src/modules/tipo_adjunto/api.js';
import {
  clienteMio,
  clientePorId,
  clientePorIdUsuario,
  clienteSearch,
  editarCliente,
  actualizarUbicacionCliente,
} from '../../src/modules/cliente/api.js';
import {
  misNotificaciones,
  marcarNotificacionVista,
  marcarTodasVistas,
  eliminarNotificacion,
} from '../../src/modules/notificacion/api.js';
import {
  tipoNotificacion,
  tipoNotificacionSearch,
  editarTipoNotificacion,
} from '../../src/modules/tipo_notificacion/api.js';
import {
  roles,
  rolSearch,
  editarRol,
} from '../../src/modules/rol/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => {
  vi.mocked(request).mockResolvedValue(OK as never);
});

// ---------------------------------------------------------------------------
// adjunto
// ---------------------------------------------------------------------------
describe('adjunto', () => {
  it('adjuntoSearch → adjunto_search', async () => {
    await adjuntoSearch({ id_referencia: 1, tipo: 'foto' } as never);
    expect(request).toHaveBeenCalledWith('adjunto_search', { id_referencia: 1, tipo: 'foto' });
  });

  it('adjuntoSearch — minimal params', async () => {
    await adjuntoSearch({} as never);
    expect(request).toHaveBeenCalledWith('adjunto_search', {});
  });
});

// ---------------------------------------------------------------------------
// adjunto_referencia
// ---------------------------------------------------------------------------
describe('adjunto_referencia', () => {
  it('adjuntoReferenciaSearch → adjunto_referencia_search', async () => {
    await adjuntoReferenciaSearch({ id_adjunto: 5 } as never);
    expect(request).toHaveBeenCalledWith('adjunto_referencia_search', { id_adjunto: 5 });
  });

  it('adjuntoReferenciaSearch — minimal params', async () => {
    await adjuntoReferenciaSearch({} as never);
    expect(request).toHaveBeenCalledWith('adjunto_referencia_search', {});
  });
});

// ---------------------------------------------------------------------------
// archivo
// ---------------------------------------------------------------------------
describe('archivo', () => {
  it('solicitarSubidaDeArchivo → solicitar_subida_de_archivo', async () => {
    await solicitarSubidaDeArchivo({ nombre: 'foto.jpg', tipo: 'image/jpeg' } as never);
    expect(request).toHaveBeenCalledWith('solicitar_subida_de_archivo', { nombre: 'foto.jpg', tipo: 'image/jpeg' });
  });

  it('solicitarSubidaDeArchivo — no params (default {})', async () => {
    await solicitarSubidaDeArchivo();
    expect(request).toHaveBeenCalledWith('solicitar_subida_de_archivo', {});
  });
});

// ---------------------------------------------------------------------------
// tipo_adjunto
// ---------------------------------------------------------------------------
describe('tipo_adjunto', () => {
  it('tipoAdjunto → tipo_adjunto', async () => {
    await tipoAdjunto({ id_aplicacion: 2 });
    expect(request).toHaveBeenCalledWith('tipo_adjunto', { id_aplicacion: 2 });
  });

  it('tipoAdjunto — no params (default {})', async () => {
    await tipoAdjunto();
    expect(request).toHaveBeenCalledWith('tipo_adjunto', {});
  });

  it('tipoAdjuntoSearch → tipo_adjunto_search', async () => {
    await tipoAdjuntoSearch({ texto_busqueda: 'foto' });
    expect(request).toHaveBeenCalledWith('tipo_adjunto_search', { texto_busqueda: 'foto' });
  });

  it('tipoAdjuntoSearch — with pagination', async () => {
    await tipoAdjuntoSearch({ texto_busqueda: 'doc', id_ultimo: 10, filas: 5 });
    expect(request).toHaveBeenCalledWith('tipo_adjunto_search', { texto_busqueda: 'doc', id_ultimo: 10, filas: 5 });
  });

  it('editarTipoAdjunto → tipo_adjunto_editar', async () => {
    await editarTipoAdjunto({ id: 3, nombre: 'Comprobante' } as never);
    expect(request).toHaveBeenCalledWith('tipo_adjunto_editar', { id: 3, nombre: 'Comprobante' });
  });
});

// ---------------------------------------------------------------------------
// cliente
// ---------------------------------------------------------------------------
describe('cliente', () => {
  it('clienteMio → cliente_mio', async () => {
    await clienteMio();
    expect(request).toHaveBeenCalledWith('cliente_mio', {});
  });

  it('clienteMio — with params', async () => {
    await clienteMio({ id_aplicacion: 1 });
    expect(request).toHaveBeenCalledWith('cliente_mio', { id_aplicacion: 1 });
  });

  it('clientePorId → cliente_q_id', async () => {
    await clientePorId({ id: 7 });
    expect(request).toHaveBeenCalledWith('cliente_q_id', { id: 7 });
  });

  it('clientePorIdUsuario → cliente_q_id_usuario', async () => {
    await clientePorIdUsuario({ id_usuario: 42 });
    expect(request).toHaveBeenCalledWith('cliente_q_id_usuario', { id_usuario: 42 });
  });

  it('clienteSearch → cliente_search', async () => {
    await clienteSearch({ texto_busqueda: 'Juan' });
    expect(request).toHaveBeenCalledWith('cliente_search', { texto_busqueda: 'Juan' });
  });

  it('clienteSearch — with pagination', async () => {
    await clienteSearch({ texto_busqueda: 'Maria', id_ultimo: 5, filas: 20 });
    expect(request).toHaveBeenCalledWith('cliente_search', { texto_busqueda: 'Maria', id_ultimo: 5, filas: 20 });
  });

  it('editarCliente → cliente_editar', async () => {
    await editarCliente({ id: 1, nombre: 'Carlos' });
    expect(request).toHaveBeenCalledWith('cliente_editar', { id: 1, nombre: 'Carlos' });
  });

  it('actualizarUbicacionCliente → cliente_actualizar_ubicacion', async () => {
    await actualizarUbicacionCliente({ id: 1, latitud: 19.4, longitud: -99.1 });
    expect(request).toHaveBeenCalledWith('cliente_actualizar_ubicacion', { id: 1, latitud: 19.4, longitud: -99.1 });
  });
});

// ---------------------------------------------------------------------------
// notificacion
// ---------------------------------------------------------------------------
describe('notificacion', () => {
  it('misNotificaciones → notificacion_q_mias', async () => {
    await misNotificaciones();
    expect(request).toHaveBeenCalledWith('notificacion_q_mias', {});
  });

  it('misNotificaciones — with params', async () => {
    await misNotificaciones({ id_ultimo: 10, filas: 15 });
    expect(request).toHaveBeenCalledWith('notificacion_q_mias', { id_ultimo: 10, filas: 15 });
  });

  it('marcarNotificacionVista → notificacion_vista', async () => {
    await marcarNotificacionVista({ id: 5 });
    expect(request).toHaveBeenCalledWith('notificacion_vista', { id: 5 });
  });

  it('marcarTodasVistas → notificacion_todas_vistas', async () => {
    await marcarTodasVistas();
    expect(request).toHaveBeenCalledWith('notificacion_todas_vistas', {});
  });

  it('eliminarNotificacion → notificacion_eliminar', async () => {
    await eliminarNotificacion({ id: 8 });
    expect(request).toHaveBeenCalledWith('notificacion_eliminar', { id: 8 });
  });
});

// ---------------------------------------------------------------------------
// tipo_notificacion
// ---------------------------------------------------------------------------
describe('tipo_notificacion', () => {
  it('tipoNotificacion → tipo_notificacion', async () => {
    await tipoNotificacion({ id_aplicacion: 1 });
    expect(request).toHaveBeenCalledWith('tipo_notificacion', { id_aplicacion: 1 });
  });

  it('tipoNotificacion — no params (default {})', async () => {
    await tipoNotificacion();
    expect(request).toHaveBeenCalledWith('tipo_notificacion', {});
  });

  it('tipoNotificacionSearch → tipo_notificacion_search', async () => {
    await tipoNotificacionSearch({ texto_busqueda: 'alerta' });
    expect(request).toHaveBeenCalledWith('tipo_notificacion_search', { texto_busqueda: 'alerta' });
  });

  it('tipoNotificacionSearch — with pagination', async () => {
    await tipoNotificacionSearch({ texto_busqueda: 'push', id_ultimo: 3, filas: 10 });
    expect(request).toHaveBeenCalledWith('tipo_notificacion_search', { texto_busqueda: 'push', id_ultimo: 3, filas: 10 });
  });

  it('editarTipoNotificacion → tipo_notificacion_editar', async () => {
    await editarTipoNotificacion({ id: 2, titulo: 'Alerta' } as never);
    expect(request).toHaveBeenCalledWith('tipo_notificacion_editar', { id: 2, titulo: 'Alerta' });
  });
});

// ---------------------------------------------------------------------------
// rol
// ---------------------------------------------------------------------------
describe('rol', () => {
  it('roles → rol', async () => {
    await roles();
    expect(request).toHaveBeenCalledWith('rol', {});
  });

  it('roles — with params', async () => {
    await roles({ id_aplicacion: 1 });
    expect(request).toHaveBeenCalledWith('rol', { id_aplicacion: 1 });
  });

  it('rolSearch → rol_search', async () => {
    await rolSearch({ texto_busqueda: 'admin' });
    expect(request).toHaveBeenCalledWith('rol_search', { texto_busqueda: 'admin' });
  });

  it('rolSearch — with pagination', async () => {
    await rolSearch({ texto_busqueda: 'repartidor', id_ultimo: 5, filas: 10 });
    expect(request).toHaveBeenCalledWith('rol_search', { texto_busqueda: 'repartidor', id_ultimo: 5, filas: 10 });
  });

  it('editarRol → editar_rol (fixed: was rol_editar)', async () => {
    await editarRol({ id: 1, nombre: 'Super Admin' });
    expect(request).toHaveBeenCalledWith('editar_rol', { id: 1, nombre: 'Super Admin' });
  });
});
