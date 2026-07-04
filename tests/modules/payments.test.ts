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
  misOpenPays, openpayTokenizar, guardarOpenpay, registrarTarjetaOpenpay,
  eliminarOpenpay, openpayListarTarjetas,
} from '../../src/modules/openpay/api.js';
import {
  abonos, abonoSearch, abonoQId, abonoQIdUsuario, abonoQIdResponsable,
  misAbonos, editarAbono,
} from '../../src/modules/abono/api.js';
import {
  adeudos, adeudoSearch, adeudoQId, adeudoQIdUsuario, adeudoQIdResponsable,
  misAdeudos, editarAdeudo,
} from '../../src/modules/adeudo/api.js';
import {
  depositos, depositoSearch, depositoQId, depositoQIdUsuario, depositoQIdResponsable,
  misDepositos, editarDeposito,
} from '../../src/modules/deposito/api.js';
import {
  movimientos, movimientoSearch, movimientoQId, movimientoQIdUsuario,
  movimientoQIdUsuarioInOut, movimientoQIdUsuarioFavorOContra,
  movimientoQIdUsuarioInOutFavorOContra, movimientoQOidRelacionado,
  movimientoQInOut, movimientoQFavorOContra, movimientoQInOutFavorOContra,
  movimientoQOidRelacionadoInOut, misMovimientos,
} from '../../src/modules/movimiento/api.js';
import {
  pagos, pagoSearch, pagoQId, pagoQIdTipoPago, pagoQOid, pagoQIdUsuario,
  pagoQIdUsuarioUltimoMetodo, pagoQOidRelacionado, misPagos,
} from '../../src/modules/pago/api.js';
import {
  retiros, retiroSearch, retiroQId, retiroQIdUsuario, retiroQIdResponsable,
  misRetiros, editarRetiro,
} from '../../src/modules/retiro/api.js';
import {
  miSaldo, saldos, saldoPorId, saldoBalancePorIdUsuario,
  saldosPositivos, saldosNegativos, saldosPositivosPorIdRol, saldosNegativosPorIdRol,
  searchSaldosPositivos, searchSaldosNegativos,
  depositarSaldo, resolverSaldo, retirarSaldo, retirarPagoRepartidor, registrarAdeudo,
} from '../../src/modules/saldo_usuario/api.js';
import {
  linksPago, linkPagoSearch, linkPagoPorId, linksPagoPorIdEmisor, misLinksPago,
  linkPagoPorToken, linksPagoSinCreacionLatLon, linksPagoCreacionLatLonCent,
  linksPagoCreacionLatLonDec, linksPagoSinCreacionMacAddress, linksPagoCreacionMacAddress,
  linksPagoAdmon, linksPagoPorEstatus, accederLinkPagoConToken,
  registrarLinkPago, editarLinkPago, pagarLinkPago, linkPagoEditParms,
} from '../../src/modules/link_pago/api.js';
import {
  tiposPago, tipoPagoSearch, editarTipoPago,
} from '../../src/modules/tipo_pago/api.js';
import {
  pagosEditParms,
} from '../../src/modules/pagos_edit_parms/api.js';
import {
  estatusPagoTodos, estatusPagoSearch, editarEstatusPago,
} from '../../src/modules/estatus_pago/api.js';

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
    await efectivoPorEstatus({ estatus: 2 });
    expect(request).toHaveBeenCalledWith('efectivo_q_estatus', { estatus: 2 });
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
    await saldoPagoPorEstatus({ estatus: 2 });
    expect(request).toHaveBeenCalledWith('saldo_q_estatus', { estatus: 2 });
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
    await terminalExternaPorEstatus({ estatus: 2 });
    expect(request).toHaveBeenCalledWith('terminal_externa_q_estatus', { estatus: 2 });
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
    await conektaPorEstatus({ estatus: 2 });
    expect(request).toHaveBeenCalledWith('conekta_q_estatus', { estatus: 2 });
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
    await openpayPorEstatus({ estatus: 2 });
    expect(request).toHaveBeenCalledWith('openpay_q_estatus', { estatus: 2 });
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
  it('registrarTarjetaOpenpay → openpay_registrar_tarjeta', async () => {
    await registrarTarjetaOpenpay({ id_usuario: 1, token: 'tok_op' });
    expect(request).toHaveBeenCalledWith('openpay_registrar_tarjeta', { id_usuario: 1, token: 'tok_op' });
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

// ── abono ─────────────────────────────────────────────────────────────────────

describe('abono', () => {
  it('abonos → abono', async () => {
    await abonos();
    expect(request).toHaveBeenCalledWith('abono', {});
  });
  it('abonoSearch → abono_search', async () => {
    await abonoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('abono_search', { texto_busqueda: 'x' });
  });
  it('abonoQId → abono_q_id', async () => {
    await abonoQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('abono_q_id', { id: 1 });
  });
  it('abonoQIdUsuario → abono_q_id_usuario', async () => {
    await abonoQIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('abono_q_id_usuario', { id_usuario: 2 });
  });
  it('abonoQIdResponsable → abono_q_id_responsable', async () => {
    await abonoQIdResponsable({ id_responsable: 3 });
    expect(request).toHaveBeenCalledWith('abono_q_id_responsable', { id_responsable: 3 });
  });
  it('misAbonos → abono_q_mios', async () => {
    await misAbonos();
    expect(request).toHaveBeenCalledWith('abono_q_mios', {});
  });
  it('editarAbono → abono_editar', async () => {
    await editarAbono({ id: 1 });
    expect(request).toHaveBeenCalledWith('abono_editar', { id: 1 });
  });
});

// ── adeudo ────────────────────────────────────────────────────────────────────

describe('adeudo', () => {
  it('adeudos → adeudo', async () => {
    await adeudos();
    expect(request).toHaveBeenCalledWith('adeudo', {});
  });
  it('adeudoSearch → adeudo_search', async () => {
    await adeudoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('adeudo_search', { texto_busqueda: 'x' });
  });
  it('adeudoQId → adeudo_q_id', async () => {
    await adeudoQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('adeudo_q_id', { id: 1 });
  });
  it('adeudoQIdUsuario → adeudo_q_id_usuario', async () => {
    await adeudoQIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('adeudo_q_id_usuario', { id_usuario: 2 });
  });
  it('adeudoQIdResponsable → adeudo_q_id_responsable', async () => {
    await adeudoQIdResponsable({ id_responsable: 3 });
    expect(request).toHaveBeenCalledWith('adeudo_q_id_responsable', { id_responsable: 3 });
  });
  it('misAdeudos → adeudo_q_mios', async () => {
    await misAdeudos();
    expect(request).toHaveBeenCalledWith('adeudo_q_mios', {});
  });
  it('editarAdeudo → adeudo_editar', async () => {
    await editarAdeudo({ id: 1 });
    expect(request).toHaveBeenCalledWith('adeudo_editar', { id: 1 });
  });
});

// ── deposito ──────────────────────────────────────────────────────────────────

describe('deposito', () => {
  it('depositos → deposito', async () => {
    await depositos();
    expect(request).toHaveBeenCalledWith('deposito', {});
  });
  it('depositoSearch → deposito_search', async () => {
    await depositoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('deposito_search', { texto_busqueda: 'x' });
  });
  it('depositoQId → deposito_q_id', async () => {
    await depositoQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('deposito_q_id', { id: 1 });
  });
  it('depositoQIdUsuario → deposito_q_id_usuario', async () => {
    await depositoQIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('deposito_q_id_usuario', { id_usuario: 2 });
  });
  it('depositoQIdResponsable → deposito_q_id_responsable', async () => {
    await depositoQIdResponsable({ id_responsable: 3 });
    expect(request).toHaveBeenCalledWith('deposito_q_id_responsable', { id_responsable: 3 });
  });
  it('misDepositos → deposito_q_mios', async () => {
    await misDepositos();
    expect(request).toHaveBeenCalledWith('deposito_q_mios', {});
  });
  it('editarDeposito → deposito_editar', async () => {
    await editarDeposito({ id: 1 });
    expect(request).toHaveBeenCalledWith('deposito_editar', { id: 1 });
  });
});

// ── movimiento ────────────────────────────────────────────────────────────────

describe('movimiento', () => {
  it('movimientos → movimiento', async () => {
    await movimientos();
    expect(request).toHaveBeenCalledWith('movimiento', {});
  });
  it('movimientoSearch → movimiento_search', async () => {
    await movimientoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('movimiento_search', { texto_busqueda: 'x' });
  });
  it('movimientoQId → movimiento_q_id', async () => {
    await movimientoQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('movimiento_q_id', { id: 1 });
  });
  it('movimientoQIdUsuario → movimiento_q_id_usuario', async () => {
    await movimientoQIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('movimiento_q_id_usuario', { id_usuario: 2 });
  });
  it('movimientoQIdUsuarioInOut → movimiento_q_id_usuario_in_out', async () => {
    await movimientoQIdUsuarioInOut({ id_usuario: 2, in_out: true });
    expect(request).toHaveBeenCalledWith('movimiento_q_id_usuario_in_out', { id_usuario: 2, in_out: true });
  });
  it('movimientoQIdUsuarioFavorOContra → movimiento_q_id_usuario_favor_o_contra', async () => {
    await movimientoQIdUsuarioFavorOContra({ id_usuario: 2, favor_o_contra: true });
    expect(request).toHaveBeenCalledWith('movimiento_q_id_usuario_favor_o_contra', { id_usuario: 2, favor_o_contra: true });
  });
  it('movimientoQIdUsuarioInOutFavorOContra → movimiento_q_id_usuario_in_out_favor_o_contra', async () => {
    await movimientoQIdUsuarioInOutFavorOContra({ id_usuario: 2, in_out: true, favor_o_contra: false });
    expect(request).toHaveBeenCalledWith('movimiento_q_id_usuario_in_out_favor_o_contra', { id_usuario: 2, in_out: true, favor_o_contra: false });
  });
  it('movimientoQOidRelacionado → movimiento_q_oid_relacionado', async () => {
    await movimientoQOidRelacionado({ ie_relacionado: 'entrega', id_relacionado: 5 });
    expect(request).toHaveBeenCalledWith('movimiento_q_oid_relacionado', { ie_relacionado: 'entrega', id_relacionado: 5 });
  });
  it('movimientoQInOut → movimiento_q_in_out', async () => {
    await movimientoQInOut({ in_out: true });
    expect(request).toHaveBeenCalledWith('movimiento_q_in_out', { in_out: true });
  });
  it('movimientoQFavorOContra → movimiento_q_favor_o_contra', async () => {
    await movimientoQFavorOContra({ favor_o_contra: true });
    expect(request).toHaveBeenCalledWith('movimiento_q_favor_o_contra', { favor_o_contra: true });
  });
  it('movimientoQInOutFavorOContra → movimiento_q_in_out_favor_o_contra', async () => {
    await movimientoQInOutFavorOContra({ in_out: true, favor_o_contra: false });
    expect(request).toHaveBeenCalledWith('movimiento_q_in_out_favor_o_contra', { in_out: true, favor_o_contra: false });
  });
  it('movimientoQOidRelacionadoInOut → movimiento_q_oid_relacionado_in_out', async () => {
    await movimientoQOidRelacionadoInOut({ ie_relacionado: 'entrega', id_relacionado: 5, in_out: true });
    expect(request).toHaveBeenCalledWith('movimiento_q_oid_relacionado_in_out', { ie_relacionado: 'entrega', id_relacionado: 5, in_out: true });
  });
  it('misMovimientos → movimiento_q_mios', async () => {
    await misMovimientos();
    expect(request).toHaveBeenCalledWith('movimiento_q_mios', {});
  });
});

// ── pago ──────────────────────────────────────────────────────────────────────

describe('pago', () => {
  it('pagos → pago', async () => {
    await pagos();
    expect(request).toHaveBeenCalledWith('pago', {});
  });
  it('pagoSearch → pago_search', async () => {
    await pagoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('pago_search', { texto_busqueda: 'x' });
  });
  it('pagoQId → pago_q_id', async () => {
    await pagoQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('pago_q_id', { id: 1 });
  });
  it('pagoQIdTipoPago → pago_q_id_tipo_pago', async () => {
    await pagoQIdTipoPago({ id_tipo_pago: 2 });
    expect(request).toHaveBeenCalledWith('pago_q_id_tipo_pago', { id_tipo_pago: 2 });
  });
  it('pagoQOid → pago_q_oid_pago with ie_pago and id_pago fields', async () => {
    await pagoQOid({ ie_pago: 'entrega', id_pago: 5 });
    expect(request).toHaveBeenCalledWith('pago_q_oid_pago', { ie_pago: 'entrega', id_pago: 5 });
  });
  it('pagoQIdUsuario → pago_q_id_usuario', async () => {
    await pagoQIdUsuario({ id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('pago_q_id_usuario', { id_usuario: 3 });
  });
  it('pagoQIdUsuarioUltimoMetodo → pago_q_id_usuario_ultimo_metodo', async () => {
    await pagoQIdUsuarioUltimoMetodo({ id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('pago_q_id_usuario_ultimo_metodo', { id_usuario: 3 });
  });
  it('pagoQOidRelacionado → pago_q_oid_relacionado', async () => {
    await pagoQOidRelacionado({ oid_relacionado: 'xyz' });
    expect(request).toHaveBeenCalledWith('pago_q_oid_relacionado', { oid_relacionado: 'xyz' });
  });
  it('misPagos → pago_q_mios', async () => {
    await misPagos();
    expect(request).toHaveBeenCalledWith('pago_q_mios', {});
  });
});

// ── retiro ────────────────────────────────────────────────────────────────────

describe('retiro', () => {
  it('retiros → retiro', async () => {
    await retiros();
    expect(request).toHaveBeenCalledWith('retiro', {});
  });
  it('retiroSearch → retiro_search', async () => {
    await retiroSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('retiro_search', { texto_busqueda: 'x' });
  });
  it('retiroQId → retiro_q_id', async () => {
    await retiroQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('retiro_q_id', { id: 1 });
  });
  it('retiroQIdUsuario → retiro_q_id_usuario', async () => {
    await retiroQIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('retiro_q_id_usuario', { id_usuario: 2 });
  });
  it('retiroQIdResponsable → retiro_q_id_responsable', async () => {
    await retiroQIdResponsable({ id_responsable: 3 });
    expect(request).toHaveBeenCalledWith('retiro_q_id_responsable', { id_responsable: 3 });
  });
  it('misRetiros → retiro_q_mios', async () => {
    await misRetiros();
    expect(request).toHaveBeenCalledWith('retiro_q_mios', {});
  });
  it('editarRetiro → retiro_editar', async () => {
    await editarRetiro({ id: 1 });
    expect(request).toHaveBeenCalledWith('retiro_editar', { id: 1 });
  });
});

// ── saldo_usuario ─────────────────────────────────────────────────────────────

describe('saldo_usuario', () => {
  it('miSaldo → saldo_usuario_mi_saldo', async () => {
    await miSaldo();
    expect(request).toHaveBeenCalledWith('saldo_usuario_mi_saldo', {});
  });
  it('saldos → saldo_usuario_search', async () => {
    await saldos({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('saldo_usuario_search', { texto_busqueda: 'x' });
  });
  it('saldoPorId → saldo_usuario_q_id', async () => {
    await saldoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_q_id', { id: 1 });
  });
  it('saldoBalancePorIdUsuario → saldo_usuario_q_id_usuario_balance', async () => {
    await saldoBalancePorIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_q_id_usuario_balance', { id_usuario: 2 });
  });
  it('saldosPositivos → saldo_usuario_q_positivo', async () => {
    await saldosPositivos();
    expect(request).toHaveBeenCalledWith('saldo_usuario_q_positivo', {});
  });
  it('saldosNegativos → saldo_usuario_q_negativo', async () => {
    await saldosNegativos();
    expect(request).toHaveBeenCalledWith('saldo_usuario_q_negativo', {});
  });
  it('saldosPositivosPorIdRol → saldo_usuario_q_positivo_id_rol', async () => {
    await saldosPositivosPorIdRol({ id_rol: 3 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_q_positivo_id_rol', { id_rol: 3 });
  });
  it('saldosNegativosPorIdRol → saldo_usuario_q_negativo_id_rol', async () => {
    await saldosNegativosPorIdRol({ id_rol: 3 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_q_negativo_id_rol', { id_rol: 3 });
  });
  it('searchSaldosPositivos → saldo_usuario_search_positivo', async () => {
    await searchSaldosPositivos({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('saldo_usuario_search_positivo', { texto_busqueda: 'x' });
  });
  it('searchSaldosNegativos → saldo_usuario_search_negativo', async () => {
    await searchSaldosNegativos({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('saldo_usuario_search_negativo', { texto_busqueda: 'x' });
  });
  it('depositarSaldo → saldo_usuario_depositar', async () => {
    await depositarSaldo({ id_usuario: 2, info_pago: { monto: 100 } });
    expect(request).toHaveBeenCalledWith('saldo_usuario_depositar', { id_usuario: 2, info_pago: { monto: 100 } });
  });
  it('resolverSaldo → saldo_usuario_resolver', async () => {
    await resolverSaldo({ importe: 100 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_resolver', { importe: 100 });
  });
  it('retirarSaldo → saldo_usuario_retirar', async () => {
    await retirarSaldo({ id_usuario: 2, monto: 50 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_retirar', { id_usuario: 2, monto: 50 });
  });
  it('retirarPagoRepartidor → saldo_usuario_retirar_pago_repartidor', async () => {
    await retirarPagoRepartidor({ id_entrega: 5 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_retirar_pago_repartidor', { id_entrega: 5 });
  });
  it('registrarAdeudo → saldo_usuario_registrar_adeudo', async () => {
    await registrarAdeudo({ id_usuario: 2, monto: 200 });
    expect(request).toHaveBeenCalledWith('saldo_usuario_registrar_adeudo', { id_usuario: 2, monto: 200 });
  });
});

// ── link_pago ─────────────────────────────────────────────────────────────────

describe('link_pago', () => {
  it('linksPago → link_pago', async () => {
    await linksPago();
    expect(request).toHaveBeenCalledWith('link_pago', {});
  });
  it('linkPagoSearch → link_pago_search', async () => {
    await linkPagoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('link_pago_search', { texto_busqueda: 'x' });
  });
  it('linkPagoPorId → link_pago_q_id', async () => {
    await linkPagoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('link_pago_q_id', { id: 1 });
  });
  it('linksPagoPorIdEmisor → link_pago_q_id_emisor', async () => {
    await linksPagoPorIdEmisor({ id_emisor: 2 });
    expect(request).toHaveBeenCalledWith('link_pago_q_id_emisor', { id_emisor: 2 });
  });
  it('misLinksPago → link_pago_q_mios', async () => {
    await misLinksPago();
    expect(request).toHaveBeenCalledWith('link_pago_q_mios', {});
  });
  it('linkPagoPorToken → link_pago_q_token', async () => {
    await linkPagoPorToken({ token: 'abc123' });
    expect(request).toHaveBeenCalledWith('link_pago_q_token', { token: 'abc123' });
  });
  it('linksPagoSinCreacionLatLon → link_pago_q_sin_creacion_lat_lon', async () => {
    await linksPagoSinCreacionLatLon();
    expect(request).toHaveBeenCalledWith('link_pago_q_sin_creacion_lat_lon', {});
  });
  it('linksPagoCreacionLatLonCent → link_pago_q_creacion_lat_lon_cent', async () => {
    await linksPagoCreacionLatLonCent({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('link_pago_q_creacion_lat_lon_cent', { latitud: 19.0, longitud: -99.0 });
  });
  it('linksPagoCreacionLatLonDec → link_pago_q_creacion_lat_lon_dec', async () => {
    await linksPagoCreacionLatLonDec({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('link_pago_q_creacion_lat_lon_dec', { latitud: 19.0, longitud: -99.0 });
  });
  it('linksPagoSinCreacionMacAddress → link_pago_q_sin_creacion_mac_address', async () => {
    await linksPagoSinCreacionMacAddress();
    expect(request).toHaveBeenCalledWith('link_pago_q_sin_creacion_mac_address', {});
  });
  it('linksPagoCreacionMacAddress → link_pago_q_creacion_mac_address', async () => {
    await linksPagoCreacionMacAddress({ mac_address: 'AA:BB:CC' });
    expect(request).toHaveBeenCalledWith('link_pago_q_creacion_mac_address', { mac_address: 'AA:BB:CC' });
  });
  it('linksPagoAdmon → link_pago_q_admon_p', async () => {
    await linksPagoAdmon({ estatus: true });
    expect(request).toHaveBeenCalledWith('link_pago_q_admon_p', { estatus: true });
  });
  it('linksPagoPorEstatus → link_pago_q_estatus', async () => {
    await linksPagoPorEstatus({ estatus: 1 });
    expect(request).toHaveBeenCalledWith('link_pago_q_estatus', { estatus: 1 });
  });
  it('accederLinkPagoConToken → link_pago_acceder_con_token', async () => {
    await accederLinkPagoConToken({ token: 'abc123' });
    expect(request).toHaveBeenCalledWith('link_pago_acceder_con_token', { token: 'abc123' });
  });
  it('registrarLinkPago → link_pago_registrar', async () => {
    await registrarLinkPago({ monto: 500 });
    expect(request).toHaveBeenCalledWith('link_pago_registrar', { monto: 500 });
  });
  it('editarLinkPago → link_pago_editar', async () => {
    await editarLinkPago({ id: 1, campo: 'notas', valor: 'ok' });
    expect(request).toHaveBeenCalledWith('link_pago_editar', { id: 1, campo: 'notas', valor: 'ok' });
  });
  it('pagarLinkPago → link_pago_pagar', async () => {
    await pagarLinkPago({ token: 'abc123', info_pago: { id_forma_pago: 1 } });
    expect(request).toHaveBeenCalledWith('link_pago_pagar', { token: 'abc123', info_pago: { id_forma_pago: 1 } });
  });
  it('linkPagoEditParms → link_pago_edit_parms', async () => {
    await linkPagoEditParms();
    expect(request).toHaveBeenCalledWith('link_pago_edit_parms', {});
  });
});

// ── tipo_pago ─────────────────────────────────────────────────────────────────

describe('tipo_pago', () => {
  it('tiposPago → tipo_pago', async () => {
    await tiposPago();
    expect(request).toHaveBeenCalledWith('tipo_pago', {});
  });
  it('tipoPagoSearch → tipo_pago_search', async () => {
    await tipoPagoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('tipo_pago_search', { texto_busqueda: 'x' });
  });
  it('editarTipoPago → tipo_pago_editar', async () => {
    await editarTipoPago({ id: 1, campo: 'nombre', valor: 'Efectivo' });
    expect(request).toHaveBeenCalledWith('tipo_pago_editar', { id: 1, campo: 'nombre', valor: 'Efectivo' });
  });
});

// ── pagos_edit_parms ──────────────────────────────────────────────────────────

describe('pagos_edit_parms', () => {
  it('pagosEditParms → pagos_edit_parms', async () => {
    await pagosEditParms({ parms: {} });
    expect(request).toHaveBeenCalledWith('pagos_edit_parms', { parms: {} });
  });
});

// ── estatus_pago ──────────────────────────────────────────────────────────────

describe('estatus_pago', () => {
  it('estatusPagoTodos → estatus_pago', async () => {
    await estatusPagoTodos();
    expect(request).toHaveBeenCalledWith('estatus_pago', {});
  });
  it('estatusPagoSearch → estatus_pago_search', async () => {
    await estatusPagoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('estatus_pago_search', { texto_busqueda: 'x' });
  });
  it('editarEstatusPago → estatus_pago_editar', async () => {
    await editarEstatusPago({ id: 1, campo: 'nombre', valor: 'Pagado' });
    expect(request).toHaveBeenCalledWith('estatus_pago_editar', { id: 1, campo: 'nombre', valor: 'Pagado' });
  });
});
