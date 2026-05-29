import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn(), fire: vi.fn() }));

import { request, fire } from '../../src/api.js';

import {
  usuario, mioUsuario, usuarioPorId, usuarioSearch, usuarioSearchIdRol,
  usuarioSearchIdRolAutorizadoEntrega, usuariosPorIdRol, usuariosPorIdRolInterno,
  usuarioPorIdYRol, usuarioPorIdYRolInterno, usuariosAutorizadosEntrega,
  usuariosIdRolAutorizadosEntrega, usuariosIdRolInternoAutorizadosEntrega,
  usuariosEmailValidado, usuariosTelefonoValidado, usuariosDireccionValidada,
  registrarCliente, registrarClienteTesting, registrarRepartidor,
  registrarRepartidorTesting, registrarInterno, editarUsuario,
  editarMiEmail, editarMiTelefono, confirmarCambioDeTelefono,
  confirmarRegistroExpress, usuarioSepuku, usuarioMassatsu,
} from '../../src/modules/usuario/api.js';

import {
  misSesiones, sesionSearch, sesionPorIdUsuario,
  iniciarSesionConTelefono, iniciarSesionConTelefonoTesting,
  confirmarSesion, resumirSesion, terminarSesion,
} from '../../src/modules/sesion/api.js';

import {
  solicitarCambioClave, ucccSearch, cambiarClave,
} from '../../src/modules/uccc/api.js';

import {
  solicitarValidacionEmail, uveSearch, validarEmail,
} from '../../src/modules/uve/api.js';

import {
  solicitarValidacionTelefono, uvtSearch, validarTelefono,
} from '../../src/modules/uvt/api.js';

import {
  jornadas, jornadaSearch, jornadaQId, jornadaQIdUsuario,
  jornadaQVehiculoAPie, jornadaQVehiculoOtro, jornadaQVehiculoBici,
  jornadaQVehiculoScooter, jornadaQVehiculoMoto, jornadaQVehiculoCoche,
  jornadaQVehiculoPickup, jornadaQVehiculoVan, jornadaQVehiculoTrailer,
  jornadaQConclusa, jornadaQInconclusa,
} from '../../src/modules/jornada/api.js';

import {
  repartidoresOn, repartidorOnSearch, repartidorOnQLatLonDecDisponible,
  repartidorOnQNDisponibles, repartidorOnEspecifico, repartidorOnQIdUsuario,
  repartidorOnQIdEquipo, repartidorOnEstadisticasWarRoom, miEstatusRepartidor,
  iniciarHorarioTrabajo, terminarHorarioTrabajo, editarVisibleRepartidor,
  editarRepartidorOn, actualizarUbicacionRepartidor, actualizarUbicacionHacia,
  priorizarEntrega, priorizarEntregaEnCadena,
} from '../../src/modules/repartidor_on/api.js';

import {
  ubicaciones, ubicacionSearch, ubicacionPorId, misUbicaciones,
  misUbicacionesHistorial, misUbicacionesGuardadas,
  ubicacionesPorIdUsuarioPorHistorial, ubicacionesGuardadas, ubicacionesHistorial,
  ubicacionesPorIdEntrega, ubicacionesLatLonCent, ubicacionesLatLonDec,
  ubicacionesLatLonCentGuardadas, ubicacionesLatLonCentHistorial,
  ubicacionesLatLonDecGuardadas, ubicacionesLatLonDecHistorial,
  registrarUbicacion, registrarAdmonOrigenDestinoDefault,
  editarUbicacion, editarUbicacionFrm, eliminarUbicacion,
} from '../../src/modules/ubicacion/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };
const noop = () => {};

beforeEach(() => {
  vi.mocked(request).mockResolvedValue(OK as never);
  vi.mocked(fire).mockReturnValue(noop);
});

// ─────────────────────────────────────────────────────────────────────────────
// usuario
// ─────────────────────────────────────────────────────────────────────────────
describe('usuario', () => {
  it('usuario → usuario', async () => {
    await usuario();
    expect(request).toHaveBeenCalledWith('usuario', {});
  });
  it('mioUsuario → usuario_mio', async () => {
    await mioUsuario();
    expect(request).toHaveBeenCalledWith('usuario_mio');
  });
  it('usuarioPorId → usuario_q_id', async () => {
    await usuarioPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('usuario_q_id', { id: 1 });
  });
  it('usuarioSearch → usuario_search', async () => {
    await usuarioSearch({ texto_busqueda: 'juan' });
    expect(request).toHaveBeenCalledWith('usuario_search', { texto_busqueda: 'juan' });
  });
  it('usuarioSearchIdRol → usuario_search_id_rol', async () => {
    await usuarioSearchIdRol({ id_rol: 2, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('usuario_search_id_rol', { id_rol: 2, texto_busqueda: 'x' });
  });
  it('usuarioSearchIdRolAutorizadoEntrega → usuario_search_id_rol_autorizado_entrega', async () => {
    await usuarioSearchIdRolAutorizadoEntrega({ id_rol: 2, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('usuario_search_id_rol_autorizado_entrega', { id_rol: 2, texto_busqueda: 'x' });
  });
  it('usuariosPorIdRol → usuario_q_id_rol', async () => {
    await usuariosPorIdRol({ id_rol: 3 });
    expect(request).toHaveBeenCalledWith('usuario_q_id_rol', { id_rol: 3 });
  });
  it('usuariosPorIdRolInterno → usuario_q_id_rol_interno', async () => {
    await usuariosPorIdRolInterno({ id_rol: 3 });
    expect(request).toHaveBeenCalledWith('usuario_q_id_rol_interno', { id_rol: 3 });
  });
  it('usuarioPorIdYRol → usuario_q_id__id_rol', async () => {
    await usuarioPorIdYRol({ id: 1, id_rol: 2 });
    expect(request).toHaveBeenCalledWith('usuario_q_id__id_rol', { id: 1, id_rol: 2 });
  });
  it('usuarioPorIdYRolInterno → usuario_q_id__id_rol_interno', async () => {
    await usuarioPorIdYRolInterno({ id: 1, id_rol: 2 });
    expect(request).toHaveBeenCalledWith('usuario_q_id__id_rol_interno', { id: 1, id_rol: 2 });
  });
  it('usuariosAutorizadosEntrega → usuario_q_autorizado_entrega', async () => {
    await usuariosAutorizadosEntrega();
    expect(request).toHaveBeenCalledWith('usuario_q_autorizado_entrega', {});
  });
  it('usuariosIdRolAutorizadosEntrega → usuario_q_id_rol_autorizado_entrega', async () => {
    await usuariosIdRolAutorizadosEntrega({ id_rol: 2 });
    expect(request).toHaveBeenCalledWith('usuario_q_id_rol_autorizado_entrega', { id_rol: 2 });
  });
  it('usuariosIdRolInternoAutorizadosEntrega → usuario_q_id_rol_interno_autorizado_entrega', async () => {
    await usuariosIdRolInternoAutorizadosEntrega({ id_rol: 2 });
    expect(request).toHaveBeenCalledWith('usuario_q_id_rol_interno_autorizado_entrega', { id_rol: 2 });
  });
  it('usuariosEmailValidado → usuario_q_email_validado', async () => {
    await usuariosEmailValidado();
    expect(request).toHaveBeenCalledWith('usuario_q_email_validado', {});
  });
  it('usuariosTelefonoValidado → usuario_q_telefono_validado', async () => {
    await usuariosTelefonoValidado();
    expect(request).toHaveBeenCalledWith('usuario_q_telefono_validado', {});
  });
  it('usuariosDireccionValidada → usuario_q_direccion_validada', async () => {
    await usuariosDireccionValidada();
    expect(request).toHaveBeenCalledWith('usuario_q_direccion_validada', {});
  });
  it('registrarCliente → usuario_registrar_cliente (fire)', () => {
    registrarCliente({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' } as never, noop);
    expect(fire).toHaveBeenCalledWith('usuario_registrar_cliente', expect.any(Object), expect.any(Function));
  });
  it('registrarClienteTesting → usuario_registrar_cliente_testing (fire)', () => {
    registrarClienteTesting({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' } as never, noop);
    expect(fire).toHaveBeenCalledWith('usuario_registrar_cliente_testing', expect.any(Object), expect.any(Function));
  });
  it('registrarRepartidor → usuario_registrar_repartidor (fire)', () => {
    registrarRepartidor({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' } as never, noop);
    expect(fire).toHaveBeenCalledWith('usuario_registrar_repartidor', expect.any(Object), expect.any(Function));
  });
  it('registrarRepartidorTesting → usuario_registrar_repartidor_testing (fire)', () => {
    registrarRepartidorTesting({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' } as never, noop);
    expect(fire).toHaveBeenCalledWith('usuario_registrar_repartidor_testing', expect.any(Object), expect.any(Function));
  });
  it('registrarInterno → usuario_registrar_interno', async () => {
    await registrarInterno({ nombre: 'Ana' } as never);
    expect(request).toHaveBeenCalledWith('usuario_registrar_interno', { nombre: 'Ana' });
  });
  it('editarUsuario → usuario_editar', async () => {
    await editarUsuario({ id: 1, nombre: 'Juan' } as never);
    expect(request).toHaveBeenCalledWith('usuario_editar', { id: 1, nombre: 'Juan' });
  });
  it('editarMiEmail → usuario_editar_mi_email (fire)', () => {
    editarMiEmail({ nuevo_email: 'a@b.com' }, noop);
    expect(fire).toHaveBeenCalledWith('usuario_editar_mi_email', { nuevo_email: 'a@b.com' }, expect.any(Function));
  });
  it('editarMiTelefono → usuario_editar_mi_telefono (fire)', () => {
    editarMiTelefono({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' }, noop);
    expect(fire).toHaveBeenCalledWith('usuario_editar_mi_telefono', { telefono_codigo_pais: '+52', telefono_nacional: '5512345678' }, expect.any(Function));
  });
  it('confirmarCambioDeTelefono → usuario_confirmar_cambio_de_telefono (fire)', () => {
    confirmarCambioDeTelefono({ codigo_2fa: '1234' }, noop);
    expect(fire).toHaveBeenCalledWith('usuario_confirmar_cambio_de_telefono', { codigo_2fa: '1234' }, expect.any(Function));
  });
  it('confirmarRegistroExpress → usuario_confirmar_registro_express', async () => {
    await confirmarRegistroExpress({ codigo: 'abc123' });
    expect(request).toHaveBeenCalledWith('usuario_confirmar_registro_express', { codigo: 'abc123' });
  });
  it('usuarioSepuku → usuario_sepuku', async () => {
    await usuarioSepuku();
    expect(request).toHaveBeenCalledWith('usuario_sepuku', {});
  });
  it('usuarioMassatsu → usuario_massatsu', async () => {
    await usuarioMassatsu({ id: 5 });
    expect(request).toHaveBeenCalledWith('usuario_massatsu', { id: 5 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// sesion
// ─────────────────────────────────────────────────────────────────────────────
describe('sesion', () => {
  it('misSesiones → mis_sesiones', async () => {
    await misSesiones();
    expect(request).toHaveBeenCalledWith('mis_sesiones', {});
  });
  it('sesionSearch → sesion_search', async () => {
    await sesionSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('sesion_search', { texto_busqueda: 'x' });
  });
  it('sesionPorIdUsuario → sesion_q_id_usuario', async () => {
    await sesionPorIdUsuario({ id_usuario: 1 });
    expect(request).toHaveBeenCalledWith('sesion_q_id_usuario', { id_usuario: 1 });
  });
  it('iniciarSesionConTelefono → iniciar_sesion_con_telefono (fire)', () => {
    iniciarSesionConTelefono({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' }, noop);
    expect(fire).toHaveBeenCalledWith('iniciar_sesion_con_telefono', expect.any(Object), expect.any(Function));
  });
  it('iniciarSesionConTelefonoTesting → iniciar_sesion_con_telefono_testing (fire)', () => {
    iniciarSesionConTelefonoTesting({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' }, noop);
    expect(fire).toHaveBeenCalledWith('iniciar_sesion_con_telefono_testing', expect.any(Object), expect.any(Function));
  });
  it('confirmarSesion → confirmar_sesion (fire)', () => {
    confirmarSesion({ id_sesion: 1, codigo_2fa: '9999' }, noop as never);
    expect(fire).toHaveBeenCalledWith('confirmar_sesion', { id_sesion: 1, codigo_2fa: '9999' }, expect.any(Function));
  });
  it('resumirSesion → resumir_sesion (fire)', () => {
    resumirSesion({ token: 'tok123' }, noop as never);
    expect(fire).toHaveBeenCalledWith('resumir_sesion', { token: 'tok123' }, expect.any(Function));
  });
  it('terminarSesion → terminar_sesion (fire)', () => {
    terminarSesion(noop as never);
    expect(fire).toHaveBeenCalledWith('terminar_sesion', {}, expect.any(Function));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// uccc (cambio de clave)
// ─────────────────────────────────────────────────────────────────────────────
describe('uccc', () => {
  it('solicitarCambioClave → uccc_solicitar_cambio_clave (fire)', () => {
    solicitarCambioClave({ email: 'a@b.com' }, noop);
    expect(fire).toHaveBeenCalledWith('uccc_solicitar_cambio_clave', { email: 'a@b.com' }, expect.any(Function));
  });
  it('ucccSearch → uccc_search', async () => {
    await ucccSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('uccc_search', { texto_busqueda: 'x' });
  });
  it('cambiarClave → uccc_cambiar_clave (fire)', () => {
    cambiarClave({ token: 'tok', clave1: 'abc', clave2: 'abc' }, noop);
    expect(fire).toHaveBeenCalledWith('uccc_cambiar_clave', { token: 'tok', clave1: 'abc', clave2: 'abc' }, expect.any(Function));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// uve (validación email)
// ─────────────────────────────────────────────────────────────────────────────
describe('uve', () => {
  it('solicitarValidacionEmail → uve_solicitar_validacion_email (fire)', () => {
    solicitarValidacionEmail({ email: 'a@b.com' }, noop);
    expect(fire).toHaveBeenCalledWith('uve_solicitar_validacion_email', { email: 'a@b.com' }, expect.any(Function));
  });
  it('uveSearch → uve_search', async () => {
    await uveSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('uve_search', { texto_busqueda: 'x' });
  });
  it('validarEmail → uve_validar_email (fire)', () => {
    validarEmail({ token: 'abc' }, noop);
    expect(fire).toHaveBeenCalledWith('uve_validar_email', { token: 'abc' }, expect.any(Function));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// uvt (validación teléfono)
// ─────────────────────────────────────────────────────────────────────────────
describe('uvt', () => {
  it('solicitarValidacionTelefono → usuario_solicitar_validacion_telefono (fire)', () => {
    solicitarValidacionTelefono({ telefono_codigo_pais: '+52', telefono_nacional: '5512345678' }, noop);
    expect(fire).toHaveBeenCalledWith('usuario_solicitar_validacion_telefono', { telefono_codigo_pais: '+52', telefono_nacional: '5512345678' }, expect.any(Function));
  });
  it('uvtSearch → uvt_search', async () => {
    await uvtSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('uvt_search', { texto_busqueda: 'x' });
  });
  it('validarTelefono → usuario_validar_telefono (fire)', () => {
    validarTelefono({ token: 'abc' }, noop);
    expect(fire).toHaveBeenCalledWith('usuario_validar_telefono', { token: 'abc' }, expect.any(Function));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// jornada
// ─────────────────────────────────────────────────────────────────────────────
describe('jornada', () => {
  it('jornadas → jornada', async () => {
    await jornadas();
    expect(request).toHaveBeenCalledWith('jornada', {});
  });
  it('jornadaSearch → jornada_search', async () => {
    await jornadaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('jornada_search', { texto_busqueda: 'x' });
  });
  it('jornadaQId → jornada_q_id', async () => {
    await jornadaQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('jornada_q_id', { id: 1 });
  });
  it('jornadaQIdUsuario → jornada_q_id_usuario', async () => {
    await jornadaQIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('jornada_q_id_usuario', { id_usuario: 2 });
  });
  it('jornadaQVehiculoAPie → jornada_q_vehiculo_a_pie', async () => {
    await jornadaQVehiculoAPie();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_a_pie', {});
  });
  it('jornadaQVehiculoOtro → jornada_q_vehiculo_otro', async () => {
    await jornadaQVehiculoOtro();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_otro', {});
  });
  it('jornadaQVehiculoBici → jornada_q_vehiculo_bici', async () => {
    await jornadaQVehiculoBici();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_bici', {});
  });
  it('jornadaQVehiculoScooter → jornada_q_vehiculo_scooter', async () => {
    await jornadaQVehiculoScooter();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_scooter', {});
  });
  it('jornadaQVehiculoMoto → jornada_q_vehiculo_moto', async () => {
    await jornadaQVehiculoMoto();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_moto', {});
  });
  it('jornadaQVehiculoCoche → jornada_q_vehiculo_coche', async () => {
    await jornadaQVehiculoCoche();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_coche', {});
  });
  it('jornadaQVehiculoPickup → jornada_q_vehiculo_pickup', async () => {
    await jornadaQVehiculoPickup();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_pickup', {});
  });
  it('jornadaQVehiculoVan → jornada_q_vehiculo_van', async () => {
    await jornadaQVehiculoVan();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_van', {});
  });
  it('jornadaQVehiculoTrailer → jornada_q_vehiculo_trailer', async () => {
    await jornadaQVehiculoTrailer();
    expect(request).toHaveBeenCalledWith('jornada_q_vehiculo_trailer', {});
  });
  it('jornadaQConclusa → jornada_q_conclusa', async () => {
    await jornadaQConclusa();
    expect(request).toHaveBeenCalledWith('jornada_q_conclusa', {});
  });
  it('jornadaQInconclusa → jornada_q_inconclusa', async () => {
    await jornadaQInconclusa();
    expect(request).toHaveBeenCalledWith('jornada_q_inconclusa', {});
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// repartidor_on
// ─────────────────────────────────────────────────────────────────────────────
describe('repartidor_on', () => {
  it('repartidoresOn → repartidor_on', async () => {
    await repartidoresOn();
    expect(request).toHaveBeenCalledWith('repartidor_on', {});
  });
  it('repartidorOnSearch → repartidor_on_search', async () => {
    await repartidorOnSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('repartidor_on_search', { texto_busqueda: 'x' });
  });
  it('repartidorOnQLatLonDecDisponible → repartidor_on_q_lat_lon_dec_disponible', async () => {
    await repartidorOnQLatLonDecDisponible({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('repartidor_on_q_lat_lon_dec_disponible', { latitud: 19.0, longitud: -99.0 });
  });
  it('repartidorOnQNDisponibles → repartidor_on_q_n_disponibles', async () => {
    await repartidorOnQNDisponibles();
    expect(request).toHaveBeenCalledWith('repartidor_on_q_n_disponibles', {});
  });
  it('repartidorOnEspecifico → repartidor_on_especifico', async () => {
    await repartidorOnEspecifico({ id_usuario: 1 });
    expect(request).toHaveBeenCalledWith('repartidor_on_especifico', { id_usuario: 1 });
  });
  it('repartidorOnQIdUsuario → repartidor_on_q_id_usuario', async () => {
    await repartidorOnQIdUsuario({ id_usuario: 1 });
    expect(request).toHaveBeenCalledWith('repartidor_on_q_id_usuario', { id_usuario: 1 });
  });
  it('repartidorOnQIdEquipo → repartidor_on_q_id_equipo', async () => {
    await repartidorOnQIdEquipo({ id_equipo: 2 });
    expect(request).toHaveBeenCalledWith('repartidor_on_q_id_equipo', { id_equipo: 2 });
  });
  it('repartidorOnEstadisticasWarRoom → repartidor_on_estadisticas_war_room', async () => {
    await repartidorOnEstadisticasWarRoom();
    expect(request).toHaveBeenCalledWith('repartidor_on_estadisticas_war_room', {});
  });
  it('miEstatusRepartidor → repartidor_on_mi_estatus', async () => {
    await miEstatusRepartidor();
    expect(request).toHaveBeenCalledWith('repartidor_on_mi_estatus', {});
  });
  it('iniciarHorarioTrabajo → repartidor_on_iniciar_horario_de_trabajo', async () => {
    await iniciarHorarioTrabajo();
    expect(request).toHaveBeenCalledWith('repartidor_on_iniciar_horario_de_trabajo', {});
  });
  it('terminarHorarioTrabajo → repartidor_on_terminar_horario_de_trabajo', async () => {
    await terminarHorarioTrabajo();
    expect(request).toHaveBeenCalledWith('repartidor_on_terminar_horario_de_trabajo', {});
  });
  it('editarVisibleRepartidor → repartidor_on_editar_visible', async () => {
    await editarVisibleRepartidor({ visible: true });
    expect(request).toHaveBeenCalledWith('repartidor_on_editar_visible', { visible: true });
  });
  it('editarRepartidorOn → repartidor_on_editar', async () => {
    await editarRepartidorOn({ vehiculo: 'moto' } as never);
    expect(request).toHaveBeenCalledWith('repartidor_on_editar', { vehiculo: 'moto' });
  });
  it('actualizarUbicacionRepartidor → repartidor_on_actualizar_ubicacion', async () => {
    await actualizarUbicacionRepartidor({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('repartidor_on_actualizar_ubicacion', { latitud: 19.0, longitud: -99.0 });
  });
  it('actualizarUbicacionHacia → repartidor_on_actualizar_ubicacion_hacia', async () => {
    await actualizarUbicacionHacia({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('repartidor_on_actualizar_ubicacion_hacia', { latitud: 19.0, longitud: -99.0 });
  });
  it('priorizarEntrega → repartidor_on_priorizar_entrega', async () => {
    await priorizarEntrega({ id_entrega: 5 });
    expect(request).toHaveBeenCalledWith('repartidor_on_priorizar_entrega', { id_entrega: 5 });
  });
  it('priorizarEntregaEnCadena → repartidor_on_priorizar_entrega_en_cadena', async () => {
    await priorizarEntregaEnCadena({ id_entrega: 5 });
    expect(request).toHaveBeenCalledWith('repartidor_on_priorizar_entrega_en_cadena', { id_entrega: 5 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ubicacion
// ─────────────────────────────────────────────────────────────────────────────
describe('ubicacion', () => {
  it('ubicaciones → ubicacion', async () => {
    await ubicaciones();
    expect(request).toHaveBeenCalledWith('ubicacion', {});
  });
  it('ubicacionSearch → ubicacion_search', async () => {
    await ubicacionSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('ubicacion_search', { texto_busqueda: 'x' });
  });
  it('ubicacionPorId → ubicacion_q_id', async () => {
    await ubicacionPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_id', { id: 1 });
  });
  it('misUbicaciones → ubicacion_q_id_usuario', async () => {
    await misUbicaciones();
    expect(request).toHaveBeenCalledWith('ubicacion_q_id_usuario', {});
  });
  it('misUbicacionesHistorial → ubicacion_q_id_usuario_historial', async () => {
    await misUbicacionesHistorial();
    expect(request).toHaveBeenCalledWith('ubicacion_q_id_usuario_historial', {});
  });
  it('misUbicacionesGuardadas → ubicacion_q_id_usuario_guardada', async () => {
    await misUbicacionesGuardadas();
    expect(request).toHaveBeenCalledWith('ubicacion_q_id_usuario_guardada', {});
  });
  it('ubicacionesPorIdUsuarioPorHistorial → ubicacion_q_id_usuario_historial', async () => {
    await ubicacionesPorIdUsuarioPorHistorial({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_id_usuario_historial', { id_usuario: 2 });
  });
  it('ubicacionesGuardadas → ubicacion_q_guardada', async () => {
    await ubicacionesGuardadas();
    expect(request).toHaveBeenCalledWith('ubicacion_q_guardada', {});
  });
  it('ubicacionesHistorial → ubicacion_q_historial', async () => {
    await ubicacionesHistorial();
    expect(request).toHaveBeenCalledWith('ubicacion_q_historial', {});
  });
  it('ubicacionesPorIdEntrega → ubicacion_q_id_entrega', async () => {
    await ubicacionesPorIdEntrega({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_id_entrega', { id_entrega: 3 });
  });
  it('ubicacionesLatLonCent → ubicacion_q_lat_lon_cent', async () => {
    await ubicacionesLatLonCent({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_lat_lon_cent', { latitud: 19.0, longitud: -99.0 });
  });
  it('ubicacionesLatLonDec → ubicacion_q_lat_lon_dec', async () => {
    await ubicacionesLatLonDec({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_lat_lon_dec', { latitud: 19.0, longitud: -99.0 });
  });
  it('ubicacionesLatLonCentGuardadas → ubicacion_q_lat_lon_cent_guardada', async () => {
    await ubicacionesLatLonCentGuardadas({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_lat_lon_cent_guardada', { latitud: 19.0, longitud: -99.0 });
  });
  it('ubicacionesLatLonCentHistorial → ubicacion_q_lat_lon_cent_historial', async () => {
    await ubicacionesLatLonCentHistorial({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_lat_lon_cent_historial', { latitud: 19.0, longitud: -99.0 });
  });
  it('ubicacionesLatLonDecGuardadas → ubicacion_q_lat_lon_dec_guardada', async () => {
    await ubicacionesLatLonDecGuardadas({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_lat_lon_dec_guardada', { latitud: 19.0, longitud: -99.0 });
  });
  it('ubicacionesLatLonDecHistorial → ubicacion_q_lat_lon_dec_historial', async () => {
    await ubicacionesLatLonDecHistorial({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('ubicacion_q_lat_lon_dec_historial', { latitud: 19.0, longitud: -99.0 });
  });
  it('registrarUbicacion → ubicacion_registrar', async () => {
    await registrarUbicacion({ calle: 'Av. Reforma' });
    expect(request).toHaveBeenCalledWith('ubicacion_registrar', { calle: 'Av. Reforma' });
  });
  it('registrarAdmonOrigenDestinoDefault → ubicacion_registrar_admon_origen_destino_default', async () => {
    await registrarAdmonOrigenDestinoDefault({ calle: 'Av. Reforma' });
    expect(request).toHaveBeenCalledWith('ubicacion_registrar_admon_origen_destino_default', { calle: 'Av. Reforma' });
  });
  it('editarUbicacion → ubicacion_editar', async () => {
    await editarUbicacion({ id: 1, calle: 'Insurgentes' });
    expect(request).toHaveBeenCalledWith('ubicacion_editar', { id: 1, calle: 'Insurgentes' });
  });
  it('editarUbicacionFrm → ubicacion_editar_frm', async () => {
    await editarUbicacionFrm({ id: 1, calle: 'Insurgentes' });
    expect(request).toHaveBeenCalledWith('ubicacion_editar_frm', { id: 1, calle: 'Insurgentes' });
  });
  it('eliminarUbicacion → ubicacion_eliminar', async () => {
    await eliminarUbicacion({ id: 1 });
    expect(request).toHaveBeenCalledWith('ubicacion_eliminar', { id: 1 });
  });
});
