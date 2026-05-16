import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn() }));

import { request } from '../../src/api.js';
import {
  efectivos, efectivoSearch, efectivoPorId, efectivoPorEstatus, misPagosEfectivo,
} from '../../src/modules/efectivo/api.js';
import {
  saldoPagos, saldoPagoSearch, saldoPagoPorId, saldoPagoPorEstatus, misPagosSaldo,
} from '../../src/modules/saldo/api.js';
import {
  terminalExternas, terminalExternaSearch, terminalExternaPorId,
  terminalExternaPorEstatus, misPagosTerminalExterna,
} from '../../src/modules/terminal_externa/api.js';
import {
  conektas, conektaSearch, conektaPorId, conektaPorEstatus, conektaPorIdUsuario,
  misConektas, conektaNuevoTokenVacio, conektaTokenizar, guardarConekta,
  eliminarConekta, conektaListarTarjetas,
} from '../../src/modules/conekta/api.js';
import {
  openpays, openpaySearch, openpayPorId, openpayPorEstatus, openpayPorIdUsuario,
  misOpenPays, openpayTokenizar, guardarOpenpay, eliminarOpenpay,
  openpayListarTarjetas,
} from '../../src/modules/openpay/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => { vi.mocked(request).mockResolvedValue(OK as never); });

// ── efectivo ──────────────────────────────────────────────────────────────────

describe('efectivo', () => {
  it('efectivos → efectivo', async () => {
    await efectivos();
    expect(request).toHaveBeenCalledWith('efectivo', {});
  });
  it('efectivoSearch → efectivo_search', async () => {
    await efectivoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('efectivo_search', { texto_busqueda: 'x' });
  });
  it('efectivoPorId → efectivo_q_id', async () => {
    await efectivoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('efectivo_q_id', { id: 1 });
  });
  it('efectivoPorEstatus → efectivo_q_estatus', async () => {
    await efectivoPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('efectivo_q_estatus', { id_estatus: 2 });
  });
  it('misPagosEfectivo → efectivo_mis_pagos', async () => {
    await misPagosEfectivo();
    expect(request).toHaveBeenCalledWith('efectivo_mis_pagos', {});
  });
});

// ── saldo ─────────────────────────────────────────────────────────────────────

describe('saldo', () => {
  it('saldoPagos → saldo', async () => {
    await saldoPagos();
    expect(request).toHaveBeenCalledWith('saldo', {});
  });
  it('saldoPagoSearch → saldo_search', async () => {
    await saldoPagoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('saldo_search', { texto_busqueda: 'x' });
  });
  it('saldoPagoPorId → saldo_q_id', async () => {
    await saldoPagoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('saldo_q_id', { id: 1 });
  });
  it('saldoPagoPorEstatus → saldo_q_estatus', async () => {
    await saldoPagoPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('saldo_q_estatus', { id_estatus: 2 });
  });
  it('misPagosSaldo → saldo_mis_pagos', async () => {
    await misPagosSaldo();
    expect(request).toHaveBeenCalledWith('saldo_mis_pagos', {});
  });
});

// ── terminal_externa ──────────────────────────────────────────────────────────

describe('terminal_externa', () => {
  it('terminalExternas → terminal_externa', async () => {
    await terminalExternas();
    expect(request).toHaveBeenCalledWith('terminal_externa', {});
  });
  it('terminalExternaSearch → terminal_externa_search', async () => {
    await terminalExternaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('terminal_externa_search', { texto_busqueda: 'x' });
  });
  it('terminalExternaPorId → terminal_externa_q_id', async () => {
    await terminalExternaPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('terminal_externa_q_id', { id: 1 });
  });
  it('terminalExternaPorEstatus → terminal_externa_q_estatus', async () => {
    await terminalExternaPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('terminal_externa_q_estatus', { id_estatus: 2 });
  });
  it('misPagosTerminalExterna → terminal_externa_mis_pagos', async () => {
    await misPagosTerminalExterna();
    expect(request).toHaveBeenCalledWith('terminal_externa_mis_pagos', {});
  });
});

// ── conekta ───────────────────────────────────────────────────────────────────

describe('conekta', () => {
  it('conektas → conekta', async () => {
    await conektas();
    expect(request).toHaveBeenCalledWith('conekta', {});
  });
  it('conektaSearch → conekta_search', async () => {
    await conektaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('conekta_search', { texto_busqueda: 'x' });
  });
  it('conektaPorId → conekta_q_id', async () => {
    await conektaPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('conekta_q_id', { id: 1 });
  });
  it('conektaPorEstatus → conekta_q_estatus', async () => {
    await conektaPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('conekta_q_estatus', { id_estatus: 2 });
  });
  it('conektaPorIdUsuario → conekta_q_id_usuario', async () => {
    await conektaPorIdUsuario({ id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('conekta_q_id_usuario', { id_usuario: 3 });
  });
  it('misConektas → conekta_q_mios', async () => {
    await misConektas();
    expect(request).toHaveBeenCalledWith('conekta_q_mios', {});
  });
  it('conektaNuevoTokenVacio → conekta_nuevo_token_vacio', async () => {
    await conektaNuevoTokenVacio({});
    expect(request).toHaveBeenCalledWith('conekta_nuevo_token_vacio', {});
  });
  it('conektaTokenizar → conekta_tokenizar_tarjeta', async () => {
    await conektaTokenizar({ id: 1, token: 'tok_abc' });
    expect(request).toHaveBeenCalledWith('conekta_tokenizar_tarjeta', { id: 1, token: 'tok_abc' });
  });
  it('guardarConekta → conekta_guardar_tarjeta', async () => {
    await guardarConekta({ id_usuario: 1 });
    expect(request).toHaveBeenCalledWith('conekta_guardar_tarjeta', { id_usuario: 1 });
  });
  it('eliminarConekta → conekta_eliminar_tarjeta', async () => {
    await eliminarConekta({ id: 1 });
    expect(request).toHaveBeenCalledWith('conekta_eliminar_tarjeta', { id: 1 });
  });
  it('conektaListarTarjetas → conekta_listar_tarjetas', async () => {
    await conektaListarTarjetas({});
    expect(request).toHaveBeenCalledWith('conekta_listar_tarjetas', {});
  });
});

// ── openpay ───────────────────────────────────────────────────────────────────

describe('openpay', () => {
  it('openpays → openpay', async () => {
    await openpays();
    expect(request).toHaveBeenCalledWith('openpay', {});
  });
  it('openpaySearch → openpay_search', async () => {
    await openpaySearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('openpay_search', { texto_busqueda: 'x' });
  });
  it('openpayPorId → openpay_q_id', async () => {
    await openpayPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('openpay_q_id', { id: 1 });
  });
  it('openpayPorEstatus → openpay_q_estatus', async () => {
    await openpayPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('openpay_q_estatus', { id_estatus: 2 });
  });
  it('openpayPorIdUsuario → openpay_q_id_usuario', async () => {
    await openpayPorIdUsuario({ id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('openpay_q_id_usuario', { id_usuario: 3 });
  });
  it('misOpenPays → openpay_q_mios', async () => {
    await misOpenPays();
    expect(request).toHaveBeenCalledWith('openpay_q_mios', {});
  });
  it('openpayTokenizar → openpay_tokenizar_tarjeta', async () => {
    await openpayTokenizar({ id: 1, token: 'tok_xyz' });
    expect(request).toHaveBeenCalledWith('openpay_tokenizar_tarjeta', { id: 1, token: 'tok_xyz' });
  });
  it('guardarOpenpay → openpay_guardar_tarjeta', async () => {
    await guardarOpenpay({ id_usuario: 1 });
    expect(request).toHaveBeenCalledWith('openpay_guardar_tarjeta', { id_usuario: 1 });
  });
  it('eliminarOpenpay → openpay_eliminar_tarjeta', async () => {
    await eliminarOpenpay({ id: 1 });
    expect(request).toHaveBeenCalledWith('openpay_eliminar_tarjeta', { id: 1 });
  });
  it('openpayListarTarjetas → openpay_listar_tarjetas', async () => {
    await openpayListarTarjetas({});
    expect(request).toHaveBeenCalledWith('openpay_listar_tarjetas', {});
  });
});
