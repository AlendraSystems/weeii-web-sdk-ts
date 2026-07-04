import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  equipos, equipoSearch, equipoPorId, miEquipo,
  registrarEquipo, editarEquipo, tomarEquipo, soltarEquipo,
} from '../../src/modules/equipo/api.js';
import {
  liderPorId, liderSearch, liderPorIdEquipo, liderPorIdAsignador,
  registrarLider, eliminarLider,
} from '../../src/modules/lider/api.js';
import {
  miembroPorId, miembroSearch, miembroPorIdEquipo, miembroPorIdAsignador,
  registrarMiembro, eliminarMiembro,
} from '../../src/modules/miembro/api.js';
import {
  equipoChatPorId, equipoChatSearch, equipoChatPorIdEquipo,
  equipoChatPorIdUsuarioMiembro, registrarEquipoChat,
} from '../../src/modules/equipo_chat/api.js';
import {
  equipoChatUsrPorId, equipoChatUsrSearch,
  equipoChatUsrPorIdChat, equipoChatUsrPorIdUsuario,
} from '../../src/modules/equipo_chat_usr/api.js';
import {
  equipoChatMsjPorId, equipoChatMsjSearch, equipoChatMsjPorIdChat,
  equipoChatMsjPorIdChatUsr, equipoChatMsjPorIdUsuario,
  registrarEquipoChatMsj, equipoChatMsjVisto,
} from '../../src/modules/equipo_chat_msj/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── equipo ────────────────────────────────────────────────────────────────────

describe('equipo', () => {
  it('equipos → equipo', async () => {
    await equipos();
    expect(request).toHaveBeenCalledWith('equipo', {});
  });
  it('equipoSearch → equipo_search', async () => {
    await equipoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('equipo_search', { texto_busqueda: 'x' });
  });
  it('equipoPorId → equipo_q_id', async () => {
    await equipoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('equipo_q_id', { id: 1 });
  });
  it('miEquipo → equipo_q_mio', async () => {
    await miEquipo();
    expect(request).toHaveBeenCalledWith('equipo_q_mio', {});
  });
  it('registrarEquipo → registrar_equipo', async () => {
    await registrarEquipo({ nombre: 'A' });
    expect(request).toHaveBeenCalledWith('registrar_equipo', { nombre: 'A' });
  });
  it('editarEquipo → editar_equipo', async () => {
    await editarEquipo({ id: 1, nombre: 'B' });
    expect(request).toHaveBeenCalledWith('editar_equipo', { id: 1, nombre: 'B' });
  });
  it('tomarEquipo → tomar_equipo', async () => {
    await tomarEquipo({ id: 1 });
    expect(request).toHaveBeenCalledWith('tomar_equipo', { id: 1 });
  });
  it('soltarEquipo → soltar_equipo', async () => {
    await soltarEquipo({ id: 1 });
    expect(request).toHaveBeenCalledWith('soltar_equipo', { id: 1 });
  });
});

// ── lider ─────────────────────────────────────────────────────────────────────

describe('lider', () => {
  it('liderPorId → lider_q_id', async () => {
    await liderPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('lider_q_id', { id: 1 });
  });
  it('liderSearch → lider_search', async () => {
    await liderSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('lider_search', { texto_busqueda: 'x' });
  });
  it('liderPorIdEquipo → lider_q_id_equipo', async () => {
    await liderPorIdEquipo({ id_equipo: 5 });
    expect(request).toHaveBeenCalledWith('lider_q_id_equipo', { id_equipo: 5 });
  });
  it('liderPorIdAsignador → lider_q_id_asignador', async () => {
    await liderPorIdAsignador({ id_asignador: 3 });
    expect(request).toHaveBeenCalledWith('lider_q_id_asignador', { id_asignador: 3 });
  });
  it('registrarLider → lider_registrar', async () => {
    await registrarLider({ id_equipo: 1, id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('lider_registrar', { id_equipo: 1, id_usuario: 2 });
  });
  it('eliminarLider → lider_eliminar', async () => {
    await eliminarLider({ id_lider: 1 });
    expect(request).toHaveBeenCalledWith('lider_eliminar', { id_lider: 1 });
  });
});

// ── miembro ───────────────────────────────────────────────────────────────────

describe('miembro', () => {
  it('miembroPorId → miembro_q_id', async () => {
    await miembroPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('miembro_q_id', { id: 1 });
  });
  it('miembroSearch → miembro_search', async () => {
    await miembroSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('miembro_search', { texto_busqueda: 'x' });
  });
  it('miembroPorIdEquipo → miembro_q_id_equipo', async () => {
    await miembroPorIdEquipo({ id_equipo: 5 });
    expect(request).toHaveBeenCalledWith('miembro_q_id_equipo', { id_equipo: 5 });
  });
  it('miembroPorIdAsignador → miembro_q_id_asignador', async () => {
    await miembroPorIdAsignador({ id_asignador: 3 });
    expect(request).toHaveBeenCalledWith('miembro_q_id_asignador', { id_asignador: 3 });
  });
  it('registrarMiembro → miembro_registrar', async () => {
    await registrarMiembro({ id_equipo: 1, id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('miembro_registrar', { id_equipo: 1, id_usuario: 2 });
  });
  it('eliminarMiembro → miembro_eliminar', async () => {
    await eliminarMiembro({ id_miembro: 1 });
    expect(request).toHaveBeenCalledWith('miembro_eliminar', { id_miembro: 1 });
  });
});

// ── equipo_chat ───────────────────────────────────────────────────────────────

describe('equipo_chat', () => {
  it('equipoChatPorId → equipo_chat_q_id', async () => {
    await equipoChatPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('equipo_chat_q_id', { id: 1 });
  });
  it('equipoChatSearch → equipo_chat_search', async () => {
    await equipoChatSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('equipo_chat_search', { texto_busqueda: 'x' });
  });
  it('equipoChatPorIdEquipo → equipo_chat_q_id_equipo', async () => {
    await equipoChatPorIdEquipo({ id_equipo: 5 });
    expect(request).toHaveBeenCalledWith('equipo_chat_q_id_equipo', { id_equipo: 5 });
  });
  it('equipoChatPorIdUsuarioMiembro → equipo_chat_q_id_usuario_miembro', async () => {
    await equipoChatPorIdUsuarioMiembro({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('equipo_chat_q_id_usuario_miembro', { id_usuario: 2 });
  });
  it('registrarEquipoChat → equipo_chat_registrar', async () => {
    await registrarEquipoChat({ id_miembro: 1, id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('equipo_chat_registrar', { id_miembro: 1, id_usuario: 2 });
  });
});

// ── equipo_chat_usr ───────────────────────────────────────────────────────────

describe('equipo_chat_usr', () => {
  it('equipoChatUsrPorId → equipo_chat_usr_q_id', async () => {
    await equipoChatUsrPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('equipo_chat_usr_q_id', { id: 1 });
  });
  it('equipoChatUsrSearch → equipo_chat_usr_search', async () => {
    await equipoChatUsrSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('equipo_chat_usr_search', { texto_busqueda: 'x' });
  });
  it('equipoChatUsrPorIdChat → equipo_chat_usr_q_id_chat', async () => {
    await equipoChatUsrPorIdChat({ id_chat: 3 });
    expect(request).toHaveBeenCalledWith('equipo_chat_usr_q_id_chat', { id_chat: 3 });
  });
  it('equipoChatUsrPorIdUsuario → equipo_chat_usr_q_id_usuario', async () => {
    await equipoChatUsrPorIdUsuario({ id_usuario: 7 });
    expect(request).toHaveBeenCalledWith('equipo_chat_usr_q_id_usuario', { id_usuario: 7 });
  });
});

// ── equipo_chat_msj ───────────────────────────────────────────────────────────

describe('equipo_chat_msj', () => {
  it('equipoChatMsjPorId → equipo_chat_msj_q_id', async () => {
    await equipoChatMsjPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_q_id', { id: 1 });
  });
  it('equipoChatMsjSearch → equipo_chat_msj_search', async () => {
    await equipoChatMsjSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_search', { texto_busqueda: 'x' });
  });
  it('equipoChatMsjPorIdChat → equipo_chat_msj_q_id_chat', async () => {
    await equipoChatMsjPorIdChat({ id_chat: 3 });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_q_id_chat', { id_chat: 3 });
  });
  it('equipoChatMsjPorIdChatUsr → equipo_chat_msj_q_id_chat_usr', async () => {
    await equipoChatMsjPorIdChatUsr({ id_chat_usr: 2 });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_q_id_chat_usr', { id_chat_usr: 2 });
  });
  it('equipoChatMsjPorIdUsuario → equipo_chat_msj_q_id_usuario', async () => {
    await equipoChatMsjPorIdUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_q_id_usuario', { id_usuario: 5 });
  });
  it('registrarEquipoChatMsj → equipo_chat_msj_registrar', async () => {
    await registrarEquipoChatMsj({ id_chat: 1, cuerpo: 'Hola' });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_registrar', { id_chat: 1, cuerpo: 'Hola' });
  });
  it('equipoChatMsjVisto → equipo_chat_msj_visto', async () => {
    await equipoChatMsjVisto({ id: 1 });
    expect(request).toHaveBeenCalledWith('equipo_chat_msj_visto', { id: 1 });
  });
});
