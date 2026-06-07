import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn(), fire: vi.fn() }));

import { request } from '../../src/api.js';

import {
  entregas,
  entregaSearch,
  entregaPorId,
  entregasConclusas,
  entregasInconclusas,
  entregasPorEstatus,
  entregasPorIdUsuario,
  misEntregas,
  misEntregasActivas,
  misEncargos,
  misEncargosActivos,
  cotizacionEfimera,
  agendadaCotizacionEfimera,
  cotizarRuta,
  recotizar,
  descartarPresupuesto,
  registrarEntrega,
  agendarEntrega,
  editarEntrega,
  eliminarEntrega,
  entregaEnCola,
  aceptarEntrega,
  rechazarEntrega,
  abortarEntrega,
  cancelarEntrega,
  entregaAOrigen,
  entregaEnOrigen,
  entregaADestino,
  entregaEnDestino,
  entregaEntregada,
  entregaExitosa,
  entregaFallida,
  calificarEntrega,
  estadisticasEntregas,
  estadisticasEntregasCliente,
  clientesConEntregasExitosas,
  repartidoresConEntregasExitosas,
  ingresosEntregas,
  editarParamsEntrega,
} from '../../src/modules/entrega/api.js';

import {
  entregaEstatusPorIdEntrega,
  entregaEstatusSearch,
} from '../../src/modules/entrega_estatus/api.js';

import {
  registrarEvidencia,
  entregaEvidenciaSearch,
  evidenciasEntrega,
} from '../../src/modules/entrega_evidencia/api.js';

import {
  ultimoPuntoEntrega,
  entregaGpsSearch,
  puntosGpsPorIdEntrega,
  puntosGpsPorIdEntregaIdUsuario,
  registrarNuevoPunto,
} from '../../src/modules/entrega_gps/api.js';

import {
  accederConversacion,
  entregaMensajeSearch,
  registrarMensaje,
  mensajesEntrega,
  ultimoMensajeEntrega,
} from '../../src/modules/entrega_mensaje/api.js';

import {
  entregaMultaAborcionTodas,
  entregaMultaAborcionSearch,
  misMultasAborcion,
  editarParamsMultaAborcion,
} from '../../src/modules/entrega_multa_aborcion/api.js';

import {
  entregaMultaCancelacionTodas,
  entregaMultaCancelacionSearch,
  entregaMultaCancelacionQId,
  misMultasCancelacion,
  editarParamsMultaCancelacion,
} from '../../src/modules/entrega_multa_cancelacion/api.js';

import {
  entregaPlantillaTodas,
  entregaPlantillaSearch,
  entregaPlantillaSearchIdCliente,
  entregaPlantillaQId,
  entregaPlantillaQIdCliente,
  entregaPlantillaQMias,
  entregaPlantillaQIdClienteCodigoGrupo,
  entregaPlantillaQCodigoGrupoAdmon,
  entregaPlantillaQIdClienteCodigoGrupoAdmon,
  entregaPlantillaQIdEntrega,
  entregaPlantillaQIdPaquete,
  entregaPlantillaQIdSeguro,
  entregaPlantillaQIdTipoPago,
  entregaPlantillaQIdTarjeta,
  entregaPlantillaQEnviarRecibir,
  entregaPlantillaQDefault,
  entregaPlantillaQLatLonOrigen,
  entregaPlantillaQLatLonDestino,
  entregaPlantillaQContactoTelefonoCodigoPaisOrigen,
  entregaPlantillaQContactoTelefonoOrigen,
  entregaPlantillaQContactoTelefonoCodigoPaisDestino,
  entregaPlantillaQContactoTelefonoDestino,
  registrarPlantilla,
  editarPlantilla,
  eliminarPlantilla,
  entregaPlantillaQIdClienteClienteBool1, entregaPlantillaQIdClienteClienteBool2,
  entregaPlantillaQIdClienteClienteBool3,
  entregaPlantillaQIdClienteAdmonBool1, entregaPlantillaQIdClienteAdmonBool2,
  entregaPlantillaQIdClienteAdmonBool3,
} from '../../src/modules/entrega_plantilla/api.js';

import {
  entregaRepartidorSearch,
} from '../../src/modules/entrega_repartidor/api.js';

import {
  calificacionUsuario, calificacionesPorIdUsuario,
  entregaUsuarioCalificacionSearch,
} from '../../src/modules/entrega_usuario_calificacion/api.js';

import {
  estatusEntregaTodos,
  estatusEntregaSearch,
  editarEstatusEntrega,
} from '../../src/modules/estatus_entrega/api.js';

import {
  estatusOrdenes,
  estatusOrdenSearch,
  editarEstatusOrden,
} from '../../src/modules/estatus_orden/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => {
  vi.mocked(request).mockResolvedValue(OK as never);
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega', () => {
  it('entregas → entrega', async () => {
    await entregas();
    expect(request).toHaveBeenCalledWith('entrega', {});
  });

  it('entregaSearch → entrega_search', async () => {
    await entregaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('entrega_search', { texto_busqueda: 'x' });
  });

  it('entregaPorId → entrega_q_id', async () => {
    await entregaPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('entrega_q_id', { id: 1 });
  });

  it('entregasConclusas → entrega_q_conclusa', async () => {
    await entregasConclusas();
    expect(request).toHaveBeenCalledWith('entrega_q_conclusa', {});
  });

  it('entregasInconclusas → entrega_q_inconclusa', async () => {
    await entregasInconclusas();
    expect(request).toHaveBeenCalledWith('entrega_q_inconclusa', {});
  });

  it('entregasPorEstatus → entrega_q_estatus with estatus field', async () => {
    await entregasPorEstatus({ estatus: 2 });
    expect(request).toHaveBeenCalledWith('entrega_q_estatus', { estatus: 2 });
  });

  it('entregasPorIdUsuario → entrega_q_id_usuario', async () => {
    await entregasPorIdUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('entrega_q_id_usuario', { id_usuario: 5 });
  });

  it('misEntregas → entrega_mis_entregas', async () => {
    await misEntregas();
    expect(request).toHaveBeenCalledWith('entrega_mis_entregas', {});
  });

  it('misEntregasActivas → entrega_mis_entregas_activas', async () => {
    await misEntregasActivas();
    expect(request).toHaveBeenCalledWith('entrega_mis_entregas_activas', {});
  });

  it('misEncargos → entrega_mis_encargos', async () => {
    await misEncargos();
    expect(request).toHaveBeenCalledWith('entrega_mis_encargos', {});
  });

  it('misEncargosActivos → entrega_mis_encargos_activos', async () => {
    await misEncargosActivos();
    expect(request).toHaveBeenCalledWith('entrega_mis_encargos_activos', {});
  });

  it('cotizacionEfimera → entrega_cotizacion_efimera', async () => {
    const p = { latitud_origen: 1, longitud_origen: 2, latitud_destino: 3, longitud_destino: 4 };
    await cotizacionEfimera(p);
    expect(request).toHaveBeenCalledWith('entrega_cotizacion_efimera', p);
  });

  it('agendadaCotizacionEfimera → entrega_agendada_cotizacion_efimera', async () => {
    const p = { latitud_origen: 1, longitud_origen: 2, latitud_destino: 3, longitud_destino: 4 };
    await agendadaCotizacionEfimera(p);
    expect(request).toHaveBeenCalledWith('entrega_agendada_cotizacion_efimera', p);
  });

  it('cotizarRuta → entrega_cotizar_ruta', async () => {
    const p = { puntos: [] };
    await cotizarRuta(p);
    expect(request).toHaveBeenCalledWith('entrega_cotizar_ruta', p);
  });

  it('recotizar → entrega_recotizar with id_entrega field', async () => {
    await recotizar({ id_entrega: 10 });
    expect(request).toHaveBeenCalledWith('entrega_recotizar', { id_entrega: 10 });
  });

  it('descartarPresupuesto → entrega_descartar_presupuesto with id_entrega field', async () => {
    await descartarPresupuesto({ id_entrega: 10 });
    expect(request).toHaveBeenCalledWith('entrega_descartar_presupuesto', { id_entrega: 10 });
  });

  it('registrarEntrega → entrega_registrar', async () => {
    const p = { latitud_origen: 1, longitud_origen: 2, latitud_destino: 3, longitud_destino: 4 };
    await registrarEntrega(p);
    expect(request).toHaveBeenCalledWith('entrega_registrar', p);
  });

  it('agendarEntrega → entrega_agendar', async () => {
    const p = { id_paquete: 1 };
    await agendarEntrega(p);
    expect(request).toHaveBeenCalledWith('entrega_agendar', p);
  });

  it('editarEntrega → entrega_editar', async () => {
    const p = { id: 1, campo: 'notas', valor: 'test' };
    await editarEntrega(p);
    expect(request).toHaveBeenCalledWith('entrega_editar', p);
  });

  it('eliminarEntrega → eliminar_entrega with id_entrega field', async () => {
    await eliminarEntrega({ id_entrega: 7 });
    expect(request).toHaveBeenCalledWith('eliminar_entrega', { id_entrega: 7 });
  });

  it('entregaEnCola → entrega_en_cola with id_entrega field', async () => {
    await entregaEnCola({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_en_cola', { id_entrega: 3 });
  });

  it('aceptarEntrega → entrega_aceptada with id_entrega field', async () => {
    await aceptarEntrega({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_aceptada', { id_entrega: 3 });
  });

  it('rechazarEntrega → entrega_rechazada with id_entrega field', async () => {
    await rechazarEntrega({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_rechazada', { id_entrega: 3 });
  });

  it('abortarEntrega → entrega_abortada with id_entrega field', async () => {
    await abortarEntrega({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_abortada', { id_entrega: 3 });
  });

  it('cancelarEntrega → entrega_cancelada with id_entrega field', async () => {
    await cancelarEntrega({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_cancelada', { id_entrega: 3 });
  });

  it('entregaAOrigen → entrega_a_origen with id_entrega field', async () => {
    await entregaAOrigen({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_a_origen', { id_entrega: 3 });
  });

  it('entregaEnOrigen → entrega_en_origen with id_entrega field', async () => {
    await entregaEnOrigen({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_en_origen', { id_entrega: 3 });
  });

  it('entregaADestino → entrega_a_destino with id_entrega field', async () => {
    await entregaADestino({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_a_destino', { id_entrega: 3 });
  });

  it('entregaEnDestino → entrega_en_destino with id_entrega field', async () => {
    await entregaEnDestino({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_en_destino', { id_entrega: 3 });
  });

  it('entregaEntregada → entrega_entregada with id_entrega field', async () => {
    await entregaEntregada({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_entregada', { id_entrega: 3 });
  });

  it('entregaExitosa → entrega_exitosa with id_entrega field', async () => {
    await entregaExitosa({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_exitosa', { id_entrega: 3 });
  });

  it('entregaFallida → entrega_fallida with id_entrega field', async () => {
    await entregaFallida({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_fallida', { id_entrega: 3 });
  });

  it('calificarEntrega → entrega_calificar with id_entrega field', async () => {
    await calificarEntrega({ id_entrega: 3, calificacion: 5 });
    expect(request).toHaveBeenCalledWith('entrega_calificar', { id_entrega: 3, calificacion: 5 });
  });

  it('estadisticasEntregas → entrega_estadisticas', async () => {
    await estadisticasEntregas();
    expect(request).toHaveBeenCalledWith('entrega_estadisticas', {});
  });

  it('estadisticasEntregasCliente → entrega_estadisticas_cliente', async () => {
    await estadisticasEntregasCliente({ id_cliente: 1 });
    expect(request).toHaveBeenCalledWith('entrega_estadisticas_cliente', { id_cliente: 1 });
  });

  it('clientesConEntregasExitosas → entrega_clientes_con_exitosas', async () => {
    await clientesConEntregasExitosas();
    expect(request).toHaveBeenCalledWith('entrega_clientes_con_exitosas', {});
  });

  it('repartidoresConEntregasExitosas → entrega_repartidores_con_exitosas', async () => {
    await repartidoresConEntregasExitosas();
    expect(request).toHaveBeenCalledWith('entrega_repartidores_con_exitosas', {});
  });

  it('ingresosEntregas → entrega_ingresos', async () => {
    await ingresosEntregas();
    expect(request).toHaveBeenCalledWith('entrega_ingresos', {});
  });

  it('editarParamsEntrega → entrega_edit_parms', async () => {
    const p = { parms: {} };
    await editarParamsEntrega(p);
    expect(request).toHaveBeenCalledWith('entrega_edit_parms', p);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_estatus
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_estatus', () => {
  it('entregaEstatusPorIdEntrega → entrega_estatus_q_id_entrega', async () => {
    await entregaEstatusPorIdEntrega({ id_entrega: 1 });
    expect(request).toHaveBeenCalledWith('entrega_estatus_q_id_entrega', { id_entrega: 1 });
  });

  it('entregaEstatusSearch → entrega_estatus_search', async () => {
    await entregaEstatusSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_estatus_search', { texto_busqueda: 'q' });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_evidencia
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_evidencia', () => {
  it('registrarEvidencia → entrega_evidencia_registrar', async () => {
    const p = { cuerpo: 'foto' };
    await registrarEvidencia(p);
    expect(request).toHaveBeenCalledWith('entrega_evidencia_registrar', p);
  });

  it('entregaEvidenciaSearch → entrega_evidencia_search', async () => {
    await entregaEvidenciaSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_evidencia_search', { texto_busqueda: 'q' });
  });

  it('evidenciasEntrega → entrega_evidencia_evidencias_entrega', async () => {
    await evidenciasEntrega({ id_entrega: 5 });
    expect(request).toHaveBeenCalledWith('entrega_evidencia_evidencias_entrega', { id_entrega: 5 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_gps
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_gps', () => {
  it('ultimoPuntoEntrega → entrega_gps_ultimo_punto_entrega', async () => {
    await ultimoPuntoEntrega({ id_entrega: 1 });
    expect(request).toHaveBeenCalledWith('entrega_gps_ultimo_punto_entrega', { id_entrega: 1 });
  });

  it('entregaGpsSearch → entrega_gps_search', async () => {
    await entregaGpsSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_gps_search', { texto_busqueda: 'q' });
  });

  it('puntosGpsPorIdEntrega → entrega_gps_q_id_entrega', async () => {
    await puntosGpsPorIdEntrega({ id_entrega: 2 });
    expect(request).toHaveBeenCalledWith('entrega_gps_q_id_entrega', { id_entrega: 2 });
  });

  it('puntosGpsPorIdEntregaIdUsuario → entrega_gps_q_id_entrega_id_usuario', async () => {
    await puntosGpsPorIdEntregaIdUsuario({ id_entrega: 2, id_usuario: 3 });
    expect(request).toHaveBeenCalledWith('entrega_gps_q_id_entrega_id_usuario', { id_entrega: 2, id_usuario: 3 });
  });

  it('registrarNuevoPunto → entrega_gps_registrar_nuevo_punto', async () => {
    const p = { latitud: 19.4, longitud: -99.1, id_entrega: 5 };
    await registrarNuevoPunto(p);
    expect(request).toHaveBeenCalledWith('entrega_gps_registrar_nuevo_punto', p);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_mensaje
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_mensaje', () => {
  it('accederConversacion → entrega_mensaje_acceder_conversacion', async () => {
    await accederConversacion({ id_entrega: 1 });
    expect(request).toHaveBeenCalledWith('entrega_mensaje_acceder_conversacion', { id_entrega: 1 });
  });

  it('entregaMensajeSearch → entrega_mensaje_search', async () => {
    await entregaMensajeSearch({ texto_busqueda: 'hola' });
    expect(request).toHaveBeenCalledWith('entrega_mensaje_search', { texto_busqueda: 'hola' });
  });

  it('registrarMensaje → entrega_mensaje_registrar', async () => {
    const p = { cuerpo: 'hola', id_entrega: 1 };
    await registrarMensaje(p);
    expect(request).toHaveBeenCalledWith('entrega_mensaje_registrar', p);
  });

  it('mensajesEntrega → entrega_mensaje_mensajes_entrega', async () => {
    await mensajesEntrega({ id_entrega: 1 });
    expect(request).toHaveBeenCalledWith('entrega_mensaje_mensajes_entrega', { id_entrega: 1 });
  });

  it('ultimoMensajeEntrega → entrega_mensaje_ultimo_mensaje_entrega', async () => {
    await ultimoMensajeEntrega({ id_entrega: 1 });
    expect(request).toHaveBeenCalledWith('entrega_mensaje_ultimo_mensaje_entrega', { id_entrega: 1 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_multa_aborcion
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_multa_aborcion', () => {
  it('entregaMultaAborcionTodas → entrega_multa_aborcion', async () => {
    await entregaMultaAborcionTodas();
    expect(request).toHaveBeenCalledWith('entrega_multa_aborcion', {});
  });

  it('entregaMultaAborcionSearch → entrega_multa_aborcion_search', async () => {
    await entregaMultaAborcionSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_multa_aborcion_search', { texto_busqueda: 'q' });
  });

  it('misMultasAborcion → entrega_multa_aborcion_mis_multas', async () => {
    await misMultasAborcion();
    expect(request).toHaveBeenCalledWith('entrega_multa_aborcion_mis_multas', {});
  });

  it('editarParamsMultaAborcion → entrega_multa_aborcion_edit_parms', async () => {
    const p = { parms: {} };
    await editarParamsMultaAborcion(p);
    expect(request).toHaveBeenCalledWith('entrega_multa_aborcion_edit_parms', p);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_multa_cancelacion
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_multa_cancelacion', () => {
  it('entregaMultaCancelacionTodas → entrega_multa_cancelacion', async () => {
    await entregaMultaCancelacionTodas();
    expect(request).toHaveBeenCalledWith('entrega_multa_cancelacion', {});
  });

  it('entregaMultaCancelacionSearch → entrega_multa_cancelacion_search', async () => {
    await entregaMultaCancelacionSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_multa_cancelacion_search', { texto_busqueda: 'q' });
  });

  it('entregaMultaCancelacionQId → entrega_multa_cancelacion_q_id', async () => {
    await entregaMultaCancelacionQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('entrega_multa_cancelacion_q_id', { id: 1 });
  });

  it('misMultasCancelacion → entrega_multa_cancelacion_mis_multas', async () => {
    await misMultasCancelacion();
    expect(request).toHaveBeenCalledWith('entrega_multa_cancelacion_mis_multas', {});
  });

  it('editarParamsMultaCancelacion → entrega_multa_cancelacion_edit_parms', async () => {
    const p = { parms: {} };
    await editarParamsMultaCancelacion(p);
    expect(request).toHaveBeenCalledWith('entrega_multa_cancelacion_edit_parms', p);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_plantilla
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_plantilla', () => {
  it('entregaPlantillaTodas → entrega_plantilla', async () => {
    await entregaPlantillaTodas();
    expect(request).toHaveBeenCalledWith('entrega_plantilla', {});
  });

  it('entregaPlantillaSearch → entrega_plantilla_search', async () => {
    await entregaPlantillaSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_search', { texto_busqueda: 'q' });
  });

  it('entregaPlantillaSearchIdCliente → entrega_plantilla_search_id_cliente', async () => {
    await entregaPlantillaSearchIdCliente({ id_cliente: 1, texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_search_id_cliente', { id_cliente: 1, texto_busqueda: 'q' });
  });

  it('entregaPlantillaQId → entrega_plantilla_q_id', async () => {
    await entregaPlantillaQId({ id: 1 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id', { id: 1 });
  });

  it('entregaPlantillaQIdCliente → entrega_plantilla_q_id_cliente', async () => {
    await entregaPlantillaQIdCliente({ id_cliente: 2 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente', { id_cliente: 2 });
  });

  it('entregaPlantillaQMias → entrega_plantilla_q_mias', async () => {
    await entregaPlantillaQMias();
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_mias', {});
  });

  it('entregaPlantillaQIdClienteCodigoGrupo → entrega_plantilla_q_id_cliente_codigo_grupo', async () => {
    await entregaPlantillaQIdClienteCodigoGrupo({ id_cliente: 1, codigo_grupo: 'A' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_codigo_grupo', { id_cliente: 1, codigo_grupo: 'A' });
  });

  it('entregaPlantillaQCodigoGrupoAdmon → entrega_plantilla_q_codigo_grupo_admon with codigo_grupo_admon field', async () => {
    await entregaPlantillaQCodigoGrupoAdmon({ codigo_grupo_admon: 'B' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_codigo_grupo_admon', { codigo_grupo_admon: 'B' });
  });

  it('entregaPlantillaQIdClienteCodigoGrupoAdmon → entrega_plantilla_q_id_cliente_codigo_grupo_admon with codigo_grupo_admon field', async () => {
    await entregaPlantillaQIdClienteCodigoGrupoAdmon({ id_cliente: 1, codigo_grupo_admon: 'C' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_codigo_grupo_admon', { id_cliente: 1, codigo_grupo_admon: 'C' });
  });

  it('entregaPlantillaQIdEntrega → entrega_plantilla_q_id_entrega', async () => {
    await entregaPlantillaQIdEntrega({ id_entrega: 3 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_entrega', { id_entrega: 3 });
  });

  it('entregaPlantillaQIdPaquete → entrega_plantilla_q_id_paquete', async () => {
    await entregaPlantillaQIdPaquete({ id_paquete: 4 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_paquete', { id_paquete: 4 });
  });

  it('entregaPlantillaQIdSeguro → entrega_plantilla_q_id_seguro', async () => {
    await entregaPlantillaQIdSeguro({ id_seguro: 5 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_seguro', { id_seguro: 5 });
  });

  it('entregaPlantillaQIdTipoPago → entrega_plantilla_q_id_tipo_pago', async () => {
    await entregaPlantillaQIdTipoPago({ id_tipo_pago: 6 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_tipo_pago', { id_tipo_pago: 6 });
  });

  it('entregaPlantillaQIdTarjeta → entrega_plantilla_q_id_tarjeta', async () => {
    await entregaPlantillaQIdTarjeta({ id_tarjeta: 7 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_tarjeta', { id_tarjeta: 7 });
  });

  it('entregaPlantillaQEnviarRecibir → entrega_plantilla_q_enviar_recibir with estatus field', async () => {
    await entregaPlantillaQEnviarRecibir({ estatus: true });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_enviar_recibir', { estatus: true });
  });

  it('entregaPlantillaQDefault → entrega_plantilla_q_default', async () => {
    await entregaPlantillaQDefault();
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_default', {});
  });

  it('entregaPlantillaQLatLonOrigen → entrega_plantilla_q_lat_lon_origen', async () => {
    const p = { latitud: 19.0, longitud: -99.0 };
    await entregaPlantillaQLatLonOrigen(p);
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_lat_lon_origen', p);
  });

  it('entregaPlantillaQLatLonDestino → entrega_plantilla_q_lat_lon_destino', async () => {
    const p = { latitud: 19.0, longitud: -99.0 };
    await entregaPlantillaQLatLonDestino(p);
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_lat_lon_destino', p);
  });

  it('entregaPlantillaQContactoTelefonoCodigoPaisOrigen → uses telefono_codigo_pais field', async () => {
    await entregaPlantillaQContactoTelefonoCodigoPaisOrigen({ telefono_codigo_pais: '+52' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_contacto_telefono_codigo_pais_origen', { telefono_codigo_pais: '+52' });
  });

  it('entregaPlantillaQContactoTelefonoOrigen → entrega_plantilla_q_contacto_telefono_origen', async () => {
    await entregaPlantillaQContactoTelefonoOrigen({ telefono: '5551234567' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_contacto_telefono_origen', { telefono: '5551234567' });
  });

  it('entregaPlantillaQContactoTelefonoCodigoPaisDestino → uses telefono_codigo_pais field', async () => {
    await entregaPlantillaQContactoTelefonoCodigoPaisDestino({ telefono_codigo_pais: '+52' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_contacto_telefono_codigo_pais_destino', { telefono_codigo_pais: '+52' });
  });

  it('entregaPlantillaQContactoTelefonoDestino → entrega_plantilla_q_contacto_telefono_destino', async () => {
    await entregaPlantillaQContactoTelefonoDestino({ telefono: '5551234567' });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_contacto_telefono_destino', { telefono: '5551234567' });
  });

  it('registrarPlantilla → entrega_plantilla_registrar', async () => {
    const p = { nombre_origen: 'Casa' };
    await registrarPlantilla(p);
    expect(request).toHaveBeenCalledWith('entrega_plantilla_registrar', p);
  });

  it('editarPlantilla → entrega_plantilla_editar', async () => {
    const p = { id: 1, nombre_origen: 'Casa 2' };
    await editarPlantilla(p);
    expect(request).toHaveBeenCalledWith('entrega_plantilla_editar', p);
  });

  it('eliminarPlantilla → entrega_plantilla_eliminar', async () => {
    await eliminarPlantilla({ id: 1 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_eliminar', { id: 1 });
  });
  it('entregaPlantillaQIdClienteClienteBool1 → entrega_plantilla_q_id_cliente_cliente_bool_1', async () => {
    await entregaPlantillaQIdClienteClienteBool1({ id_cliente: 1 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_cliente_bool_1', { id_cliente: 1 });
  });
  it('entregaPlantillaQIdClienteClienteBool2 → entrega_plantilla_q_id_cliente_cliente_bool_2', async () => {
    await entregaPlantillaQIdClienteClienteBool2({ id_cliente: 1 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_cliente_bool_2', { id_cliente: 1 });
  });
  it('entregaPlantillaQIdClienteClienteBool3 → entrega_plantilla_q_id_cliente_cliente_bool_3', async () => {
    await entregaPlantillaQIdClienteClienteBool3({ id_cliente: 1 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_cliente_bool_3', { id_cliente: 1 });
  });
  it('entregaPlantillaQIdClienteAdmonBool1 → entrega_plantilla_q_id_cliente_admon_bool_1', async () => {
    await entregaPlantillaQIdClienteAdmonBool1({ id_cliente: 2 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_admon_bool_1', { id_cliente: 2 });
  });
  it('entregaPlantillaQIdClienteAdmonBool2 → entrega_plantilla_q_id_cliente_admon_bool_2', async () => {
    await entregaPlantillaQIdClienteAdmonBool2({ id_cliente: 2 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_admon_bool_2', { id_cliente: 2 });
  });
  it('entregaPlantillaQIdClienteAdmonBool3 → entrega_plantilla_q_id_cliente_admon_bool_3', async () => {
    await entregaPlantillaQIdClienteAdmonBool3({ id_cliente: 2 });
    expect(request).toHaveBeenCalledWith('entrega_plantilla_q_id_cliente_admon_bool_3', { id_cliente: 2 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_repartidor
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_repartidor', () => {
  it('entregaRepartidorSearch → entrega_repartidor_search', async () => {
    await entregaRepartidorSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_repartidor_search', { texto_busqueda: 'q' });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// entrega_usuario_calificacion
// ─────────────────────────────────────────────────────────────────────────────
describe('entrega_usuario_calificacion', () => {
  it('calificacionUsuario → entrega_usuario_calificacion_usuario', async () => {
    await calificacionUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('entrega_usuario_calificacion_usuario', { id_usuario: 5 });
  });

  it('entregaUsuarioCalificacionSearch → entrega_usuario_calificacion_search', async () => {
    await entregaUsuarioCalificacionSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('entrega_usuario_calificacion_search', { texto_busqueda: 'q' });
  });
  it('calificacionesPorIdUsuario → entrega_usuario_calificacion_q_id_usuario', async () => {
    await calificacionesPorIdUsuario({ id_usuario: 5 });
    expect(request).toHaveBeenCalledWith('entrega_usuario_calificacion_q_id_usuario', { id_usuario: 5 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// estatus_entrega
// ─────────────────────────────────────────────────────────────────────────────
describe('estatus_entrega', () => {
  it('estatusEntregaTodos → estatus_entrega', async () => {
    await estatusEntregaTodos();
    expect(request).toHaveBeenCalledWith('estatus_entrega', {});
  });

  it('estatusEntregaSearch → estatus_entrega_search', async () => {
    await estatusEntregaSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('estatus_entrega_search', { texto_busqueda: 'q' });
  });

  it('editarEstatusEntrega → editar_estatus_entrega', async () => {
    const p = { id: 1, campo: 'nombre', valor: 'Activo' };
    await editarEstatusEntrega(p);
    expect(request).toHaveBeenCalledWith('editar_estatus_entrega', p);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// estatus_orden
// ─────────────────────────────────────────────────────────────────────────────
describe('estatus_orden', () => {
  it('estatusOrdenes → estatus_orden', async () => {
    await estatusOrdenes();
    expect(request).toHaveBeenCalledWith('estatus_orden', {});
  });

  it('estatusOrdenSearch → estatus_orden_search', async () => {
    await estatusOrdenSearch({ texto_busqueda: 'q' });
    expect(request).toHaveBeenCalledWith('estatus_orden_search', { texto_busqueda: 'q' });
  });

  it('editarEstatusOrden → estatus_orden_editar', async () => {
    const p = { id: 1, campo: 'nombre', valor: 'Nuevo' };
    await editarEstatusOrden(p);
    expect(request).toHaveBeenCalledWith('estatus_orden_editar', p);
  });
});
