import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  tickets, ticketSearch, ticketPorId, ticketPorIdUsuario, ticketPorIdUsuarioAbierto,
  ticketPorIdChat, ticketPorIdAsignado, ticketsAsignados, ticketsSinAsignar,
  ticketsAbiertos, ticketsCerrados, ticketsAsignadosAbiertos, ticketsAsignadosCerrados,
  ticketsSinAsignarAbiertos, ticketsSinAsignarCerrados,
  registrarTicket, ticketAutoAsignar, soltarTicket, cerrarTicket, calificarTicket,
} from '../../src/modules/ticket/api.js';
import {
  ticketChats, ticketChatSearch, ticketChatPorId, ticketChatPorIdTicket,
  ticketChatsSinAsignar, ticketChatsSinTicket, ticketChatPorIdUsuario, miTicketChat,
} from '../../src/modules/ticket_chat/api.js';
import {
  ticketChatMsjPorId, ticketChatMsjSearch, ticketChatMsjPorIdSender,
  ticketChatMsjPorIdSenderConAdjunto, ticketChatMsjPorIdTicket,
  ticketChatMsjPorIdTicketConAdjunto, ticketChatMsjPorIdChat,
  ticketChatMsjPorIdChatConAdjunto, ticketChatMsjPorIdChatUsr,
  ticketChatMsjPorIdUsuarioCanal, registrarTicketChatMsj, ticketChatMsjVisto,
} from '../../src/modules/ticket_chat_msj/api.js';
import { ticketChatUsrSearch } from '../../src/modules/ticket_chat_usr/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── ticket ────────────────────────────────────────────────────────────────────

describe('ticket', () => {
  it('tickets → ticket', async () => {
    await tickets();
    expect(request).toHaveBeenCalledWith('ticket', {});
  });
  it('ticketSearch → ticket_search', async () => {
    await ticketSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('ticket_search', { texto_busqueda: 'x' });
  });
  it('ticketPorId → ticket_q_id', async () => {
    await ticketPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('ticket_q_id', { id: 1 });
  });
  it('ticketPorIdUsuario → ticket_q_id_usuario', async () => {
    await ticketPorIdUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('ticket_q_id_usuario', { id_usuario: 5 });
  });
  it('ticketPorIdUsuarioAbierto → ticket_q_id_usuario_abierto', async () => {
    await ticketPorIdUsuarioAbierto({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('ticket_q_id_usuario_abierto', { id_usuario: 5 });
  });
  it('ticketPorIdChat → ticket_q_id_chat', async () => {
    await ticketPorIdChat({ id_chat: 3 });
    expect(request).toHaveBeenCalledWith('ticket_q_id_chat', { id_chat: 3 });
  });
  it('ticketPorIdAsignado → ticket_q_id_asignado', async () => {
    await ticketPorIdAsignado({ id_asignado: 2 });
    expect(request).toHaveBeenCalledWith('ticket_q_id_asignado', { id_asignado: 2 });
  });
  it('ticketsAsignados → ticket_q_asignado', async () => {
    await ticketsAsignados();
    expect(request).toHaveBeenCalledWith('ticket_q_asignado', {});
  });
  it('ticketsSinAsignar → ticket_q_sin_asignar', async () => {
    await ticketsSinAsignar();
    expect(request).toHaveBeenCalledWith('ticket_q_sin_asignar', {});
  });
  it('ticketsAbiertos → ticket_q_abierto', async () => {
    await ticketsAbiertos();
    expect(request).toHaveBeenCalledWith('ticket_q_abierto', {});
  });
  it('ticketsCerrados → ticket_q_cerrado', async () => {
    await ticketsCerrados();
    expect(request).toHaveBeenCalledWith('ticket_q_cerrado', {});
  });
  it('ticketsAsignadosAbiertos → ticket_q_asignado_abierto', async () => {
    await ticketsAsignadosAbiertos();
    expect(request).toHaveBeenCalledWith('ticket_q_asignado_abierto', {});
  });
  it('ticketsAsignadosCerrados → ticket_q_asignado_cerrado', async () => {
    await ticketsAsignadosCerrados();
    expect(request).toHaveBeenCalledWith('ticket_q_asignado_cerrado', {});
  });
  it('ticketsSinAsignarAbiertos → ticket_q_sin_asignar_abierto', async () => {
    await ticketsSinAsignarAbiertos();
    expect(request).toHaveBeenCalledWith('ticket_q_sin_asignar_abierto', {});
  });
  it('ticketsSinAsignarCerrados → ticket_q_sin_asignar_cerrado', async () => {
    await ticketsSinAsignarCerrados();
    expect(request).toHaveBeenCalledWith('ticket_q_sin_asignar_cerrado', {});
  });
  it('registrarTicket → ticket_registrar', async () => {
    await registrarTicket({ titulo: 'T', descripcion: 'D' });
    expect(request).toHaveBeenCalledWith('ticket_registrar', { titulo: 'T', descripcion: 'D' });
  });
  it('ticketAutoAsignar → ticket_auto_asignar', async () => {
    await ticketAutoAsignar();
    expect(request).toHaveBeenCalledWith('ticket_auto_asignar');
  });
  it('soltarTicket → ticket_soltar', async () => {
    await soltarTicket({ id: 1 });
    expect(request).toHaveBeenCalledWith('ticket_soltar', { id: 1 });
  });
  it('cerrarTicket → ticket_cerrar', async () => {
    await cerrarTicket({ id: 1 });
    expect(request).toHaveBeenCalledWith('ticket_cerrar', { id: 1 });
  });
  it('calificarTicket → ticket_calificar', async () => {
    await calificarTicket({ id: 1, resuelto: true, comentarios: 'ok' });
    expect(request).toHaveBeenCalledWith('ticket_calificar', { id: 1, resuelto: true, comentarios: 'ok' });
  });
});

// ── ticket_chat ───────────────────────────────────────────────────────────────

describe('ticket_chat', () => {
  it('ticketChats → ticket_chat', async () => {
    await ticketChats();
    expect(request).toHaveBeenCalledWith('ticket_chat', {});
  });
  it('ticketChatSearch → ticket_chat_search', async () => {
    await ticketChatSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('ticket_chat_search', { texto_busqueda: 'x' });
  });
  it('ticketChatPorId → ticket_chat_q_id', async () => {
    await ticketChatPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('ticket_chat_q_id', { id: 1 });
  });
  it('ticketChatPorIdTicket → ticket_chat_q_id_ticket', async () => {
    await ticketChatPorIdTicket({ id_ticket: 3 });
    expect(request).toHaveBeenCalledWith('ticket_chat_q_id_ticket', { id_ticket: 3 });
  });
  it('ticketChatsSinAsignar → ticket_chat_q_sin_asignar', async () => {
    await ticketChatsSinAsignar();
    expect(request).toHaveBeenCalledWith('ticket_chat_q_sin_asignar', {});
  });
  it('ticketChatsSinTicket → ticket_chat_q_sin_ticket', async () => {
    await ticketChatsSinTicket();
    expect(request).toHaveBeenCalledWith('ticket_chat_q_sin_ticket', {});
  });
  it('ticketChatPorIdUsuario → ticket_chat_q_id_usuario', async () => {
    await ticketChatPorIdUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('ticket_chat_q_id_usuario', { id_usuario: 5 });
  });
  it('miTicketChat → ticket_chat_q_mi_chat', async () => {
    await miTicketChat();
    expect(request).toHaveBeenCalledWith('ticket_chat_q_mi_chat', {});
  });
});

// ── ticket_chat_msj ───────────────────────────────────────────────────────────

describe('ticket_chat_msj', () => {
  it('ticketChatMsjPorId → ticket_chat_msj_q_id', async () => {
    await ticketChatMsjPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id', { id: 1 });
  });
  it('ticketChatMsjSearch → ticket_chat_msj_search', async () => {
    await ticketChatMsjSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_search', { texto_busqueda: 'x' });
  });
  it('ticketChatMsjPorIdSender → ticket_chat_msj_q_id_sender', async () => {
    await ticketChatMsjPorIdSender({ id_sender: 2 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_sender', { id_sender: 2 });
  });
  it('ticketChatMsjPorIdSenderConAdjunto → ticket_chat_msj_q_id_sender_con_adjunto', async () => {
    await ticketChatMsjPorIdSenderConAdjunto({ id_sender: 2 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_sender_con_adjunto', { id_sender: 2 });
  });
  it('ticketChatMsjPorIdTicket → ticket_chat_msj_q_id_ticket', async () => {
    await ticketChatMsjPorIdTicket({ id_ticket: 4 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_ticket', { id_ticket: 4 });
  });
  it('ticketChatMsjPorIdTicketConAdjunto → ticket_chat_msj_q_id_ticket_con_adjunto', async () => {
    await ticketChatMsjPorIdTicketConAdjunto({ id_ticket: 4 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_ticket_con_adjunto', { id_ticket: 4 });
  });
  it('ticketChatMsjPorIdChat → ticket_chat_msj_q_id_chat', async () => {
    await ticketChatMsjPorIdChat({ id_chat: 3 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_chat', { id_chat: 3 });
  });
  it('ticketChatMsjPorIdChatConAdjunto → ticket_chat_msj_q_id_chat_con_adjunto', async () => {
    await ticketChatMsjPorIdChatConAdjunto({ id_chat: 3 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_chat_con_adjunto', { id_chat: 3 });
  });
  it('ticketChatMsjPorIdChatUsr → ticket_chat_msj_q_id_chat_usr', async () => {
    await ticketChatMsjPorIdChatUsr({ id_chat_usr: 6 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_chat_usr', { id_chat_usr: 6 });
  });
  it('ticketChatMsjPorIdUsuarioCanal → ticket_chat_msj_q_id_usuario_canal', async () => {
    await ticketChatMsjPorIdUsuarioCanal({ id_usuario: 5, canal: 'whatsapp' });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_q_id_usuario_canal', { id_usuario: 5, canal: 'whatsapp' });
  });
  it('registrarTicketChatMsj → ticket_chat_msj_registrar', async () => {
    await registrarTicketChatMsj({ id_chat: 1, cuerpo: 'Hola' });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_registrar', { id_chat: 1, cuerpo: 'Hola' });
  });
  it('ticketChatMsjVisto → ticket_chat_msj_visto', async () => {
    await ticketChatMsjVisto({ id: 1 });
    expect(request).toHaveBeenCalledWith('ticket_chat_msj_visto', { id: 1 });
  });
});

// ── ticket_chat_usr ───────────────────────────────────────────────────────────

describe('ticket_chat_usr', () => {
  it('ticketChatUsrSearch → ticket_chat_usr_search', async () => {
    await ticketChatUsrSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('ticket_chat_usr_search', { texto_busqueda: 'x' });
  });
});
