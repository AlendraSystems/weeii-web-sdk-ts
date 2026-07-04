/**
 * Banner domain APIs.
 *
 * Replaces: `modulos/banners/banner/banner.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Banner,
  BannerQueryParams,
  BannerSearchParams,
} from './types.js';

export type { Banner } from './types.js';

export function banners(
  params: BannerQueryParams = {},
): Promise<WeeiiIncomingMessage<{ banner: Banner[] }>> {
  return request('banner', params);
}

export function bannerSearch(
  params: BannerSearchParams,
): Promise<WeeiiIncomingMessage<{ banner: Banner[] }>> {
  return request('banner_search', params);
}

export function bannerPorId(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ banner: Banner }>> {
  return request('banner_q_id', params);
}

export function bannersPublicoGeneral(
  params: BannerQueryParams = {},
): Promise<WeeiiIncomingMessage<{ banner: Banner[] }>> {
  return request('banner_q_publico_general', params);
}

export function bannerPublicoGeneralSortPromover(
  params: { id_banner: number; direccion: boolean },
): Promise<WeeiiIncomingMessage> {
  return request('banner_publico_general_sort_promover', params);
}

export function registrarBannerVisto(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('banner_visto', params);
}

export function registrarBannerClic(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('banner_clic', params);
}

export function registrarBanner(
  params: Record<string, unknown>,
): Promise<WeeiiIncomingMessage<{ banner: Banner }>> {
  return request('banner_registrar', params);
}

export function editarBanner(
  params: { id: number } & Partial<Pick<Banner, 'titulo' | 'descripcion' | 'id_img' | 'link'>>,
): Promise<WeeiiIncomingMessage<{ banner: Banner }>> {
  return request('banner_editar', params);
}

export function eliminarBanner(
  params: { id: number },
): Promise<WeeiiIncomingMessage> {
  return request('banner_eliminar', params);
}

export function mostrarBanner(
  params: { id: number },
): Promise<WeeiiIncomingMessage<{ banner: Banner }>> {
  return request('banner_mostrar', params);
}
