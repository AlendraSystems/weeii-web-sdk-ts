import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  notificacionesDraft, notificacionDraftSearch, notificacionDraftPorId,
  notificacionDraftPorTipo, notificacionesDraftPublicadas, notificacionesDraftNoPublicadas,
  registrarNotificacionDraft, editarNotificacionDraft,
  eliminarNotificacionDraft, publicarNotificacionDraft,
} from '../../src/modules/notificacion_draft/api.js';
import { misNotificaciones } from '../../src/modules/notificacion_obj/api.js';
import {
  misNotificaciones as notificacionQMias, notificacionSearch,
  marcarNotificacionVista, eliminarNotificacion,
} from '../../src/modules/notificacion/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── notificacion_draft ────────────────────────────────────────────────────────

describe('notificacion_draft', () => {
  it('notificacionesDraft → notificacion_draft', async () => {
    await notificacionesDraft();
    expect(request).toHaveBeenCalledWith('notificacion_draft', {});
  });
  it('notificacionDraftSearch → notificacion_draft_search', async () => {
    await notificacionDraftSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('notificacion_draft_search', { texto_busqueda: 'x' });
  });
  it('notificacionDraftPorId → notificacion_draft_q_id', async () => {
    await notificacionDraftPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('notificacion_draft_q_id', { id: 1 });
  });
  it('notificacionDraftPorTipo → notificacion_draft_q_id_tipo_notificacion', async () => {
    await notificacionDraftPorTipo({ tipo: 3 });
    expect(request).toHaveBeenCalledWith('notificacion_draft_q_id_tipo_notificacion', { tipo: 3 });
  });
  it('notificacionesDraftPublicadas → notificacion_draft_q_publicado', async () => {
    await notificacionesDraftPublicadas();
    expect(request).toHaveBeenCalledWith('notificacion_draft_q_publicado', {});
  });
  it('notificacionesDraftNoPublicadas → notificacion_draft_q_no_publicado', async () => {
    await notificacionesDraftNoPublicadas();
    expect(request).toHaveBeenCalledWith('notificacion_draft_q_no_publicado', {});
  });
  it('registrarNotificacionDraft → notificacion_draft_registrar', async () => {
    await registrarNotificacionDraft({ id_tipo_notificacion: 1, titulo: 'T', cuerpo: 'B' });
    expect(request).toHaveBeenCalledWith('notificacion_draft_registrar', { id_tipo_notificacion: 1, titulo: 'T', cuerpo: 'B' });
  });
  it('editarNotificacionDraft → notificacion_draft_editar', async () => {
    await editarNotificacionDraft({ id: 1, titulo: 'U' });
    expect(request).toHaveBeenCalledWith('notificacion_draft_editar', { id: 1, titulo: 'U' });
  });
  it('eliminarNotificacionDraft → notificacion_draft_eliminar', async () => {
    await eliminarNotificacionDraft({ id: 1 });
    expect(request).toHaveBeenCalledWith('notificacion_draft_eliminar', { id: 1 });
  });
  it('publicarNotificacionDraft → notificacion_draft_publicar', async () => {
    await publicarNotificacionDraft({ id: 1 });
    expect(request).toHaveBeenCalledWith('notificacion_draft_publicar', { id: 1 });
  });
});

// ── notificacion_obj ──────────────────────────────────────────────────────────

describe('notificacion_obj', () => {
  it('misNotificaciones → notificacion_obj_q_mias', async () => {
    await misNotificaciones();
    expect(request).toHaveBeenCalledWith('notificacion_obj_q_mias', {});
  });
});

// ── notificacion ────────────────────────────────────────────────────────────────────────────

describe('notificacion', () => {
  it('notificacionQMias → notificacion_q_mias', async () => {
    await notificacionQMias();
    expect(request).toHaveBeenCalledWith('notificacion_q_mias', {});
  });
  it('notificacionSearch → notificacion_search', async () => {
    await notificacionSearch({ texto_busqueda: 'pago' });
    expect(request).toHaveBeenCalledWith('notificacion_search', { texto_busqueda: 'pago' });
  });
  it('marcarNotificacionVista → notificacion_vista', async () => {
    await marcarNotificacionVista({ id: 1 });
    expect(request).toHaveBeenCalledWith('notificacion_vista', { id: 1 });
  });
  it('eliminarNotificacion → notificacion_eliminar', async () => {
    await eliminarNotificacion({ id: 2 });
    expect(request).toHaveBeenCalledWith('notificacion_eliminar', { id: 2 });
  });
});
