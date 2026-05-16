import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  tramites, tramiteSearch, tramitePorId, tramitePorFacultad,
  registrarTramite, editarTramite,
} from '../../src/modules/tramite/api.js';
import {
  requisitoPorId, requisitoSearch, requisitoPorIdTramite, requisitoPorFacultad,
  registrarRequisito, editarRequisito,
} from '../../src/modules/requisito/api.js';
import {
  validaciones, validacionSearch, validacionPorId, validacionPorIdTramite,
  validacionPorFacultad, validacionPorIdUsuario, validacionPorFacultadIdUsuario,
  validacionPorFacultadIdUsuarioValidada, misValidaciones,
  registrarValidacion, validar, validarUsuarioFacultadTesting,
} from '../../src/modules/validacion/api.js';
import {
  misPruebas, pruebaSearch, pruebaPorId, pruebaPorIdUsuario,
  pruebaPorIdValidacion, editarPrueba, validarPrueba,
} from '../../src/modules/prueba/api.js';
import {
  solicitudes, solicitudSearch, misSolicitudes, misPendientesSolicitud,
  solicitudPorId, solicitudPorIdTramite, solicitudPorFacultad,
  solicitudPorIdUsuario, solicitudPorIdValidador, solicitudValidadas,
  registrarSolicitud, tomarSolicitud, solicitudAutoAsignar, validarSolicitud,
} from '../../src/modules/solicitud/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── tramite ───────────────────────────────────────────────────────────────────

describe('tramite', () => {
  it('tramites → tramite', async () => {
    await tramites();
    expect(request).toHaveBeenCalledWith('tramite', {});
  });
  it('tramiteSearch → tramite_search', async () => {
    await tramiteSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('tramite_search', { texto_busqueda: 'x' });
  });
  it('tramitePorId → tramite_q_id', async () => {
    await tramitePorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('tramite_q_id', { id: 1 });
  });
  it('tramitePorFacultad → tramite_q_facultad', async () => {
    await tramitePorFacultad({ facultad: 'test' });
    expect(request).toHaveBeenCalledWith('tramite_q_facultad', { facultad: 'test' });
  });
  it('registrarTramite → tramite_registrar', async () => {
    await registrarTramite({ nombre: 'T' });
    expect(request).toHaveBeenCalledWith('tramite_registrar', { nombre: 'T' });
  });
  it('editarTramite → tramite_editar', async () => {
    await editarTramite({ id: 1, nombre: 'U' });
    expect(request).toHaveBeenCalledWith('tramite_editar', { id: 1, nombre: 'U' });
  });
});

// ── requisito ─────────────────────────────────────────────────────────────────

describe('requisito', () => {
  it('requisitoPorId → requisito_q_id', async () => {
    await requisitoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('requisito_q_id', { id: 1 });
  });
  it('requisitoSearch → requisito_search', async () => {
    await requisitoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('requisito_search', { texto_busqueda: 'x' });
  });
  it('requisitoPorIdTramite → requisito_q_id_tramite', async () => {
    await requisitoPorIdTramite({ id_tramite: 5 });
    expect(request).toHaveBeenCalledWith('requisito_q_id_tramite', { id_tramite: 5 });
  });
  it('requisitoPorFacultad → requisito_q_facultad', async () => {
    await requisitoPorFacultad({ facultad: 'test' });
    expect(request).toHaveBeenCalledWith('requisito_q_facultad', { facultad: 'test' });
  });
  it('registrarRequisito → requisito_registrar', async () => {
    await registrarRequisito({ id_tramite: 1, nombre: 'R' });
    expect(request).toHaveBeenCalledWith('requisito_registrar', { id_tramite: 1, nombre: 'R' });
  });
  it('editarRequisito → requisito_editar', async () => {
    await editarRequisito({ id: 1, nombre: 'S' });
    expect(request).toHaveBeenCalledWith('requisito_editar', { id: 1, nombre: 'S' });
  });
});

// ── validacion ────────────────────────────────────────────────────────────────

describe('validacion', () => {
  it('validaciones → validacion', async () => {
    await validaciones();
    expect(request).toHaveBeenCalledWith('validacion', {});
  });
  it('validacionSearch → validacion_search', async () => {
    await validacionSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('validacion_search', { texto_busqueda: 'x' });
  });
  it('validacionPorId → validacion_q_id', async () => {
    await validacionPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('validacion_q_id', { id: 1 });
  });
  it('validacionPorIdTramite → validacion_q_id_tramite', async () => {
    await validacionPorIdTramite({ id_tramite: 2 });
    expect(request).toHaveBeenCalledWith('validacion_q_id_tramite', { id_tramite: 2 });
  });
  it('validacionPorFacultad → validacion_q_facultad', async () => {
    await validacionPorFacultad({ facultad: 'f1' });
    expect(request).toHaveBeenCalledWith('validacion_q_facultad', { facultad: 'f1' });
  });
  it('validacionPorIdUsuario → validacion_q_id_usuario', async () => {
    await validacionPorIdUsuario({ id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('validacion_q_id_usuario', { id_usuario: 3 });
  });
  it('validacionPorFacultadIdUsuario → validacion_q_facultad_id_usuario', async () => {
    await validacionPorFacultadIdUsuario({ facultad: 'f1', id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('validacion_q_facultad_id_usuario', { facultad: 'f1', id_usuario: 3 });
  });
  it('validacionPorFacultadIdUsuarioValidada → validacion_q_facultad_id_usuario_validada', async () => {
    await validacionPorFacultadIdUsuarioValidada({ facultad: 'f1', id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('validacion_q_facultad_id_usuario_validada', { facultad: 'f1', id_usuario: 3 });
  });
  it('misValidaciones → validacion_mis_validaciones', async () => {
    await misValidaciones();
    expect(request).toHaveBeenCalledWith('validacion_mis_validaciones', {});
  });
  it('registrarValidacion → validacion_registrar', async () => {
    await registrarValidacion({ id_tramite: 1 });
    expect(request).toHaveBeenCalledWith('validacion_registrar', { id_tramite: 1 });
  });
  it('validar → validacion_validar', async () => {
    await validar({ id: 1 });
    expect(request).toHaveBeenCalledWith('validacion_validar', { id: 1 });
  });
  it('validarUsuarioFacultadTesting → validacion_validar_usuario_facultad_testing', async () => {
    await validarUsuarioFacultadTesting({ facultad: 'f1', id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('validacion_validar_usuario_facultad_testing', { facultad: 'f1', id_usuario: 3 });
  });
});

// ── prueba ────────────────────────────────────────────────────────────────────

describe('prueba', () => {
  it('misPruebas → prueba_mis_pruebas', async () => {
    await misPruebas();
    expect(request).toHaveBeenCalledWith('prueba_mis_pruebas', {});
  });
  it('pruebaSearch → prueba_search', async () => {
    await pruebaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('prueba_search', { texto_busqueda: 'x' });
  });
  it('pruebaPorId → prueba_q_id', async () => {
    await pruebaPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('prueba_q_id', { id: 1 });
  });
  it('pruebaPorIdUsuario → prueba_q_id_usuario', async () => {
    await pruebaPorIdUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('prueba_q_id_usuario', { id_usuario: 5 });
  });
  it('pruebaPorIdValidacion → prueba_q_id_validacion', async () => {
    await pruebaPorIdValidacion({ id_validacion: 2 });
    expect(request).toHaveBeenCalledWith('prueba_q_id_validacion', { id_validacion: 2 });
  });
  it('editarPrueba → prueba_editar', async () => {
    await editarPrueba({ id: 1 });
    expect(request).toHaveBeenCalledWith('prueba_editar', { id: 1 });
  });
  it('validarPrueba → prueba_validar', async () => {
    await validarPrueba({ id: 1 });
    expect(request).toHaveBeenCalledWith('prueba_validar', { id: 1 });
  });
});

// ── solicitud ─────────────────────────────────────────────────────────────────

describe('solicitud', () => {
  it('solicitudes → solicitud', async () => {
    await solicitudes();
    expect(request).toHaveBeenCalledWith('solicitud', {});
  });
  it('solicitudSearch → solicitud_search', async () => {
    await solicitudSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('solicitud_search', { texto_busqueda: 'x' });
  });
  it('misSolicitudes → solicitud_mis_solicitudes', async () => {
    await misSolicitudes();
    expect(request).toHaveBeenCalledWith('solicitud_mis_solicitudes', {});
  });
  it('misPendientesSolicitud → solicitud_mis_pendientes', async () => {
    await misPendientesSolicitud();
    expect(request).toHaveBeenCalledWith('solicitud_mis_pendientes', {});
  });
  it('solicitudPorId → solicitud_q_id', async () => {
    await solicitudPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('solicitud_q_id', { id: 1 });
  });
  it('solicitudPorIdTramite → solicitud_q_id_tramite', async () => {
    await solicitudPorIdTramite({ id_tramite: 2 });
    expect(request).toHaveBeenCalledWith('solicitud_q_id_tramite', { id_tramite: 2 });
  });
  it('solicitudPorFacultad → solicitud_q_facultad', async () => {
    await solicitudPorFacultad({ facultad: 'f1' });
    expect(request).toHaveBeenCalledWith('solicitud_q_facultad', { facultad: 'f1' });
  });
  it('solicitudPorIdUsuario → solicitud_q_id_usuario', async () => {
    await solicitudPorIdUsuario({ id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('solicitud_q_id_usuario', { id_usuario: 3 });
  });
  it('solicitudPorIdValidador → solicitud_q_id_validador', async () => {
    await solicitudPorIdValidador({ id_validador: 4 });
    expect(request).toHaveBeenCalledWith('solicitud_q_id_validador', { id_validador: 4 });
  });
  it('solicitudValidadas → solicitud_q_validado', async () => {
    await solicitudValidadas();
    expect(request).toHaveBeenCalledWith('solicitud_q_validado', {});
  });
  it('registrarSolicitud → solicitud_registrar', async () => {
    await registrarSolicitud({ id_tramite: 1 });
    expect(request).toHaveBeenCalledWith('solicitud_registrar', { id_tramite: 1 });
  });
  it('tomarSolicitud → solicitud_tomar', async () => {
    await tomarSolicitud({ id: 1 });
    expect(request).toHaveBeenCalledWith('solicitud_tomar', { id: 1 });
  });
  it('solicitudAutoAsignar → solicitud_auto_asignar', async () => {
    await solicitudAutoAsignar({ id: 1 });
    expect(request).toHaveBeenCalledWith('solicitud_auto_asignar', { id: 1 });
  });
  it('validarSolicitud → solicitud_validar', async () => {
    await validarSolicitud({ id: 1 });
    expect(request).toHaveBeenCalledWith('solicitud_validar', { id: 1 });
  });
});
