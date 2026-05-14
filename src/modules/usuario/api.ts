/**
 * Usuario domain APIs.
 *
 * Replaces: `modulos/usuarios/usuario/api.js`
 */
import { request } from '../../api.js';
import type { WeeiiIncomingMessage } from '../../api.js';
import type {
  Usuario,
  UsuarioQueryParams,
  UsuarioSearchParams,
  RegistrarClienteParams,
  EditarUsuarioParams,
} from './types.js';

export type { Usuario } from './types.js';

// ── Query ───────────────────────────────────────────────────────────────────

export function usuario(
  params: UsuarioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario', params);
}

export function mioUsuario(): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('mi_usuario');
}

export function usuarioSearch(
  params: UsuarioSearchParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_search', params);
}

// ── Mutations ───────────────────────────────────────────────────────────────

export function registrarCliente(
  params: RegistrarClienteParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('registrar_usuario_cliente', params);
}

export function registrarClienteTesting(
  params: RegistrarClienteParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('registrar_usuario_cliente_testing', params);
}

export function editarUsuario(
  params: EditarUsuarioParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('editar_usuario', params);
}

export function editarMiEmail(
  params: { email: string },
): Promise<WeeiiIncomingMessage> {
  return request('editar_mi_email', params);
}

export function editarMiTelefono(
  params: { telefono: string; pais?: string },
): Promise<WeeiiIncomingMessage> {
  return request('editar_mi_telefono', params);
}

export function confirmarCambioDeTelefono(
  params: { codigo: string; telefono: string },
): Promise<WeeiiIncomingMessage> {
  return request('confirmar_cambio_de_telefono', params);
}
