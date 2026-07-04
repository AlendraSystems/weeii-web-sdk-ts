import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  aplicaciones, aplicacionSearch, registrarAplicacion, editarAplicacion,
  aplicacionEditParms,
} from '../../src/modules/aplicacion/api.js';
import {
  plataformas, plataformaSearch, editarPlataforma,
} from '../../src/modules/plataforma/api.js';
import {
  cambiarMiClave, usuarioCredencialesSearch,
} from '../../src/modules/usuario_credenciales/api.js';
import {
  paquetes, paqueteSearch, registrarPaquete, editarPaquete, paquetePorId,
  paqueteCatalogo, paquetePermitido, eliminarPaquete, paquetePermitidoSortPromover,
} from '../../src/modules/paquete/api.js';
import {
  seguros, seguroSearch, registrarSeguro, editarSeguro, seguroPorId, seguroCatalogo,
} from '../../src/modules/seguro/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── aplicacion ────────────────────────────────────────────────────────────────

describe('aplicacion', () => {
  it('aplicaciones → aplicacion', async () => {
    await aplicaciones();
    expect(request).toHaveBeenCalledWith('aplicacion', {});
  });
  it('aplicacionSearch → aplicacion_search', async () => {
    await aplicacionSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('aplicacion_search', { texto_busqueda: 'x' });
  });
  it('registrarAplicacion → aplicacion_registrar', async () => {
    await registrarAplicacion({ nombre: 'A' });
    expect(request).toHaveBeenCalledWith('aplicacion_registrar', { nombre: 'A' });
  });
  it('editarAplicacion → aplicacion_editar', async () => {
    await editarAplicacion({ id: 1, campo: 'nombre', valor: 'B' });
    expect(request).toHaveBeenCalledWith('aplicacion_editar', { id: 1, campo: 'nombre', valor: 'B' });
  });
  it('aplicacionEditParms → aplicacion_edit_parms', async () => {
    await aplicacionEditParms({ parms: {} });
    expect(request).toHaveBeenCalledWith('aplicacion_edit_parms', { parms: {} });
  });
});

// ── plataforma ────────────────────────────────────────────────────────────────

describe('plataforma', () => {
  it('plataformas → plataforma', async () => {
    await plataformas();
    expect(request).toHaveBeenCalledWith('plataforma', {});
  });
  it('plataformaSearch → plataforma_search', async () => {
    await plataformaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('plataforma_search', { texto_busqueda: 'x' });
  });
  it('editarPlataforma → plataforma_editar', async () => {
    await editarPlataforma({ id: 1, campo: 'nombre', valor: 'P' });
    expect(request).toHaveBeenCalledWith('plataforma_editar', { id: 1, campo: 'nombre', valor: 'P' });
  });
});

// ── usuario_credenciales ──────────────────────────────────────────────────────

describe('usuario_credenciales', () => {
  it('cambiarMiClave → usuario_credenciales_cambiar_mi_clave', async () => {
    await cambiarMiClave({ clave_actual: 'old', clave_nueva: 'new' });
    expect(request).toHaveBeenCalledWith('usuario_credenciales_cambiar_mi_clave', { clave_actual: 'old', clave_nueva: 'new' });
  });
  it('usuarioCredencialesSearch → usuario_credenciales_search', async () => {
    await usuarioCredencialesSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('usuario_credenciales_search', { texto_busqueda: 'x' });
  });
});

// ── paquete ───────────────────────────────────────────────────────────────────

describe('paquete', () => {
  it('paquetes → paquete', async () => {
    await paquetes();
    expect(request).toHaveBeenCalledWith('paquete', {});
  });
  it('paqueteSearch → paquete_search', async () => {
    await paqueteSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('paquete_search', { texto_busqueda: 'x' });
  });
  it('registrarPaquete → paquete_registrar', async () => {
    await registrarPaquete({ nombre: 'P' });
    expect(request).toHaveBeenCalledWith('paquete_registrar', { nombre: 'P' });
  });
  it('editarPaquete → paquete_editar', async () => {
    await editarPaquete({ id: 1, nombre: 'Q' });
    expect(request).toHaveBeenCalledWith('paquete_editar', { id: 1, nombre: 'Q' });
  });
  it('paquetePorId → paquete_q_id', async () => {
    await paquetePorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('paquete_q_id', { id: 1 });
  });
  it('paqueteCatalogo → paquete_catalogo', async () => {
    await paqueteCatalogo();
    expect(request).toHaveBeenCalledWith('paquete_catalogo', {});
  });
  it('paquetePermitido → paquete_q_permitido', async () => {
    await paquetePermitido();
    expect(request).toHaveBeenCalledWith('paquete_q_permitido', {});
  });
  it('eliminarPaquete → paquete_eliminar', async () => {
    await eliminarPaquete({ id: 1 });
    expect(request).toHaveBeenCalledWith('paquete_eliminar', { id: 1 });
  });
  it('paquetePermitidoSortPromover → paquete_permitido_sort_promover', async () => {
    await paquetePermitidoSortPromover({ id_paquete: 1, direccion: true });
    expect(request).toHaveBeenCalledWith('paquete_permitido_sort_promover', { id_paquete: 1, direccion: true });
  });
});

// ── seguro ────────────────────────────────────────────────────────────────────

describe('seguro', () => {
  it('seguros → seguro', async () => {
    await seguros();
    expect(request).toHaveBeenCalledWith('seguro', {});
  });
  it('seguroSearch → seguro_search', async () => {
    await seguroSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('seguro_search', { texto_busqueda: 'x' });
  });
  it('registrarSeguro → seguro_registrar', async () => {
    await registrarSeguro({ nombre: 'S' });
    expect(request).toHaveBeenCalledWith('seguro_registrar', { nombre: 'S' });
  });
  it('editarSeguro → seguro_editar', async () => {
    await editarSeguro({ id: 1, campo: 'nombre', valor: 'T' });
    expect(request).toHaveBeenCalledWith('seguro_editar', { id: 1, campo: 'nombre', valor: 'T' });
  });
  it('seguroPorId → seguro_q_id', async () => {
    await seguroPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('seguro_q_id', { id: 1 });
  });
  it('seguroCatalogo → seguro_catalogo', async () => {
    await seguroCatalogo();
    expect(request).toHaveBeenCalledWith('seguro_catalogo', {});
  });
});
