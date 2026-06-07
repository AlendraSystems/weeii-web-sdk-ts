import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  banners, bannerSearch, bannerPorId, bannersPublicoGeneral,
  bannerPublicoGeneralSortPromover,
  registrarBannerVisto, registrarBannerClic,
  registrarBanner, editarBanner, eliminarBanner, mostrarBanner,
} from '../../src/modules/banner/api.js';
import {
  historias, historiaSearch, historiaPorId, historiasPublicoGeneral,
  registrarHistoria, editarHistoria, eliminarHistoria,
  publicarHistoria, mostrarHistoria, historiaPublicoGeneralSortPromover,
} from '../../src/modules/historia/api.js';
import {
  historiasPosts, historiaPostPublicoGeneral, historiaPostsPorIdHistoria,
  registrarHistoriaPost, eliminarHistoriaPost, publicarHistoriaPost,
  likeHistoriaPost, vistoHistoriaPost,
} from '../../src/modules/historia_post/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── banner ────────────────────────────────────────────────────────────────────

describe('banner', () => {
  it('banners → banner', async () => {
    await banners();
    expect(request).toHaveBeenCalledWith('banner', {});
  });
  it('bannerSearch → banner_search', async () => {
    await bannerSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('banner_search', { texto_busqueda: 'x' });
  });
  it('bannerPorId → banner_q_id', async () => {
    await bannerPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('banner_q_id', { id: 1 });
  });
  it('bannersPublicoGeneral → banner_q_publico_general', async () => {
    await bannersPublicoGeneral();
    expect(request).toHaveBeenCalledWith('banner_q_publico_general', {});
  });
  it('bannerPublicoGeneralSortPromover → banner_publico_general_sort_promover', async () => {
    await bannerPublicoGeneralSortPromover({ id: 1, ids_ordenados: [1, 2] });
    expect(request).toHaveBeenCalledWith('banner_publico_general_sort_promover', { id: 1, ids_ordenados: [1, 2] });
  });
  it('registrarBannerVisto → banner_visto', async () => {
    await registrarBannerVisto({ id: 1 });
    expect(request).toHaveBeenCalledWith('banner_visto', { id: 1 });
  });
  it('registrarBannerClic → banner_clic', async () => {
    await registrarBannerClic({ id: 1 });
    expect(request).toHaveBeenCalledWith('banner_clic', { id: 1 });
  });
  it('registrarBanner → banner_registrar', async () => {
    await registrarBanner({ titulo: 'B' });
    expect(request).toHaveBeenCalledWith('banner_registrar', { titulo: 'B' });
  });
  it('editarBanner → banner_editar', async () => {
    await editarBanner({ id: 1, titulo: 'C' });
    expect(request).toHaveBeenCalledWith('banner_editar', { id: 1, titulo: 'C' });
  });
  it('eliminarBanner → banner_eliminar', async () => {
    await eliminarBanner({ id: 1 });
    expect(request).toHaveBeenCalledWith('banner_eliminar', { id: 1 });
  });
  it('mostrarBanner → banner_mostrar', async () => {
    await mostrarBanner({ id: 1 });
    expect(request).toHaveBeenCalledWith('banner_mostrar', { id: 1 });
  });
});

// ── historia ──────────────────────────────────────────────────────────────────

describe('historia', () => {
  it('historias → historia', async () => {
    await historias();
    expect(request).toHaveBeenCalledWith('historia', {});
  });
  it('historiaSearch → historia_search', async () => {
    await historiaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('historia_search', { texto_busqueda: 'x' });
  });
  it('historiaPorId → historia_q_id', async () => {
    await historiaPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_q_id', { id: 1 });
  });
  it('historiasPublicoGeneral → historia_q_publico_general', async () => {
    await historiasPublicoGeneral();
    expect(request).toHaveBeenCalledWith('historia_q_publico_general', {});
  });
  it('registrarHistoria → historia_registrar', async () => {
    await registrarHistoria({ titulo: 'H' });
    expect(request).toHaveBeenCalledWith('historia_registrar', { titulo: 'H' });
  });
  it('editarHistoria → historia_editar', async () => {
    await editarHistoria({ id: 1, titulo: 'I' });
    expect(request).toHaveBeenCalledWith('historia_editar', { id: 1, titulo: 'I' });
  });
  it('eliminarHistoria → historia_eliminar', async () => {
    await eliminarHistoria({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_eliminar', { id: 1 });
  });
  it('publicarHistoria → historia_publicar', async () => {
    await publicarHistoria({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_publicar', { id: 1 });
  });
  it('mostrarHistoria → historia_mostrar', async () => {
    await mostrarHistoria({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_mostrar', { id: 1 });
  });
  it('historiaPublicoGeneralSortPromover → historia_publico_general_sort_promover', async () => {
    await historiaPublicoGeneralSortPromover({ id: 1, ids_ordenados: [1, 2] });
    expect(request).toHaveBeenCalledWith('historia_publico_general_sort_promover', { id: 1, ids_ordenados: [1, 2] });
  });
});

// ── historia_post ─────────────────────────────────────────────────────────────

describe('historia_post', () => {
  it('historiasPosts → historia_post', async () => {
    await historiasPosts({ id_historia: 1 });
    expect(request).toHaveBeenCalledWith('historia_post', { id_historia: 1 });
  });
  it('historiaPostPublicoGeneral → historia_post_q_publico_general', async () => {
    await historiaPostPublicoGeneral({ id_historia: 1 });
    expect(request).toHaveBeenCalledWith('historia_post_q_publico_general', { id_historia: 1 });
  });
  it('historiaPostsPorIdHistoria → historia_post_q_id_historia', async () => {
    await historiaPostsPorIdHistoria({ id_historia: 2 });
    expect(request).toHaveBeenCalledWith('historia_post_q_id_historia', { id_historia: 2 });
  });
  it('registrarHistoriaPost → historia_post_registrar', async () => {
    await registrarHistoriaPost({ id_historia: 1, imagen: 'img.jpg' });
    expect(request).toHaveBeenCalledWith('historia_post_registrar', { id_historia: 1, imagen: 'img.jpg' });
  });
  it('eliminarHistoriaPost → historia_post_eliminar', async () => {
    await eliminarHistoriaPost({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_post_eliminar', { id: 1 });
  });
  it('publicarHistoriaPost → historia_post_publicar', async () => {
    await publicarHistoriaPost({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_post_publicar', { id: 1 });
  });
  it('likeHistoriaPost → historia_post_like', async () => {
    await likeHistoriaPost({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_post_like', { id: 1 });
  });
  it('vistoHistoriaPost → historia_post_visto', async () => {
    await vistoHistoriaPost({ id: 1 });
    expect(request).toHaveBeenCalledWith('historia_post_visto', { id: 1 });
  });
});
