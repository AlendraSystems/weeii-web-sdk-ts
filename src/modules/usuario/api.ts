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
  RegistrarRepartidorParams,
  RegistrarInternoParams,
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
  return request('usuario_mio');
}

export function usuarioPorId(
  params: { id: number; profundidad?: number[] },
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_q_id', params);
}

export function usuarioSearch(
  params: UsuarioSearchParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_search', params);
}

export function usuarioSearchIdRol(
  params: { id_rol: number } & UsuarioSearchParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_search_id_rol', params);
}

export function usuarioSearchIdRolAutorizadoEntrega(
  params: { id_rol: number } & UsuarioSearchParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_search_id_rol_autorizado_entrega', params);
}

export function usuariosPorIdRol(
  params: { id_rol: number } & UsuarioQueryParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_id_rol', params);
}

export function usuariosPorIdRolInterno(
  params: { id_rol: number } & UsuarioQueryParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_id_rol_interno', params);
}

export function usuarioPorIdYRol(
  params: { id: number; id_rol: number },
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_q_id__id_rol', params);
}

export function usuarioPorIdYRolInterno(
  params: { id: number; id_rol: number },
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_q_id__id_rol_interno', params);
}

export function usuariosAutorizadosEntrega(
  params: UsuarioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_autorizado_entrega', params);
}

export function usuariosIdRolAutorizadosEntrega(
  params: { id_rol: number } & UsuarioQueryParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_id_rol_autorizado_entrega', params);
}

export function usuariosIdRolInternoAutorizadosEntrega(
  params: { id_rol: number } & UsuarioQueryParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_id_rol_interno_autorizado_entrega', params);
}

export function usuariosEmailValidado(
  params: UsuarioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_email_validado', params);
}

export function usuariosTelefonoValidado(
  params: UsuarioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_telefono_validado', params);
}

export function usuariosDireccionValidada(
  params: UsuarioQueryParams = {},
): Promise<WeeiiIncomingMessage<{ usuario: Usuario[] }>> {
  return request('usuario_q_direccion_validada', params);
}

// ── Mutations ───────────────────────────────────────────────────────────────

export function registrarCliente(
  params: RegistrarClienteParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_registrar_cliente', params);
}

export function registrarClienteTesting(
  params: RegistrarClienteParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_registrar_cliente_testing', params);
}

export function registrarRepartidor(
  params: RegistrarRepartidorParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_registrar_repartidor', params);
}

export function registrarRepartidorTesting(
  params: RegistrarRepartidorParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_registrar_repartidor_testing', params);
}

export function registrarInterno(
  params: RegistrarInternoParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_registrar_interno', params);
}

export function editarUsuario(
  params: EditarUsuarioParams,
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_editar', params);
}

export function editarMiEmail(
  params: { email: string },
): Promise<WeeiiIncomingMessage> {
  return request('usuario_editar_mi_email', params);
}

export function editarMiTelefono(
  params: { telefono: string; pais?: string },
): Promise<WeeiiIncomingMessage> {
  return request('usuario_editar_mi_telefono', params);
}

export function confirmarCambioDeTelefono(
  params: { codigo: string; telefono: string },
): Promise<WeeiiIncomingMessage> {
  return request('usuario_confirmar_cambio_de_telefono', params);
}

export function confirmarRegistroExpress(
  params: { codigo: string },
): Promise<WeeiiIncomingMessage<{ usuario: Usuario }>> {
  return request('usuario_confirmar_registro_express', params);
}

export function usuarioSepuku(
  params: { motivo?: string } = {},
): Promise<WeeiiIncomingMessage> {
  return request('usuario_sepuku', params);
}

export function usuarioMassatsu(
  params: { id: number; motivo?: string },
): Promise<WeeiiIncomingMessage> {
  return request('usuario_massatsu', params);
}
