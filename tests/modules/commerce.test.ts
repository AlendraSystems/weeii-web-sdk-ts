import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/api.js', () => ({ request: vi.fn(), fire: vi.fn() }));

import { request } from '../../src/api.js';

import {
  categorias, categoriaSearch, categoriaPorId, categoriasPorIdUsuario,
  categoriasPorIdNegocio, categoriasCatalogoPorIdNegocio, categoriasAutorizadas,
  categoriasPermitidas, registrarCategoria, editarCategoria, eliminarCategoria,
  sortPromoverCategoriasNegocio,
} from '../../src/modules/categoria/api.js';

import {
  conceptos, conceptoSearch, conceptoPorId, conceptosPorIdOrden,
  registrarConcepto, editarConcepto, eliminarConcepto,
} from '../../src/modules/concepto/api.js';

import {
  negocios, negocioSearch, negocioSearchCatalogo, negocioSearchCatalogoCercanos,
  miNegocio, negocioPorId, negociosAutorizados, negociosAbiertos, negociosCatalogo,
  negociosCatalogoCercanos, registrarNegocio, editarNegocio, catalogoSortPromover,
  personalizarPromo,
} from '../../src/modules/negocio/api.js';

import {
  ordenes, ordenSearch, ordenSearchEstatus, ordenSearchIdCliente,
  ordenSearchIdClienteEstatus, ordenSearchIdNegocio, ordenSearchIdNegocioEstatus,
  ordenPorId, ordenesPorIdCliente, ordenesPorIdClienteEstatus, ordenesPorIdNegocio,
  ordenesPorIdNegocioEstatus, ordenesPorEstatus, ordenesCreadasPorNegocio,
  ordenesSinCreacionLatLon, ordenesCreacionLatLonCent, ordenesCreacionLatLonDec,
  ordenesSinCreacionMacAddress, ordenesCreacionMacAddress, misOrdenes,
  misOrdenesPorEstatus, misVentas, misVentasSinPresupuestosExternos,
  misVentasPorEstatus, misVentasPorEstatusSinPresupuestosExternos,
  registrarOrden, editarOrden, accederConToken, cotizarEntrega,
  ordenEnCola, ordenRechazada, ordenAbortada, ordenAceptada, ordenEnProceso,
  ordenLista, ordenEnviando, ordenEnviada, ordenEntregada, ordenExitosa,
  ordenFallida, cancelarOrden, cerrarOrden,
} from '../../src/modules/orden/api.js';

import {
  productos, productoSearch, productoSearchCatalogo, productoPorId,
  productosPorIdUsuario, productosPorIdNegocio, productosPorIdCategoria,
  productosAutorizados, productosPermitidos, productosCatalogo,
  productosCatalogoPorIdUsuario, productosCatalogoPorIdNegocio,
  productosCatalogoPorIdCategoria, productosDeMiNegocio,
  registrarProducto, editarProducto, eliminarProducto,
  sortPromoverIdNegocio, sortPromoverIdCategoria,
} from '../../src/modules/producto/api.js';

import {
  informacionBasica,
} from '../../src/modules/informacion_basica/api.js';

const OK = { data: {}, changes: { upserted: {}, deleted: {} } };

beforeEach(() => {
  vi.mocked(request).mockResolvedValue(OK as never);
});

// ─────────────────────────────────────────────────────────────────────────────
// categoria
// ─────────────────────────────────────────────────────────────────────────────
describe('categoria', () => {
  it('categorias → categoria', async () => {
    await categorias();
    expect(request).toHaveBeenCalledWith('categoria', {});
  });
  it('categoriaSearch → categoria_search', async () => {
    await categoriaSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('categoria_search', { texto_busqueda: 'x' });
  });
  it('categoriaPorId → categoria_q_id', async () => {
    await categoriaPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('categoria_q_id', { id: 1 });
  });
  it('categoriasPorIdUsuario → categoria_q_id_usuario', async () => {
    await categoriasPorIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('categoria_q_id_usuario', { id_usuario: 2 });
  });
  it('categoriasPorIdNegocio → categoria_q_id_negocio', async () => {
    await categoriasPorIdNegocio({ id_negocio: 3 });
    expect(request).toHaveBeenCalledWith('categoria_q_id_negocio', { id_negocio: 3 });
  });
  it('categoriasCatalogoPorIdNegocio → categoria_q_id_negocio_catalogo', async () => {
    await categoriasCatalogoPorIdNegocio({ id_negocio: 3 });
    expect(request).toHaveBeenCalledWith('categoria_q_id_negocio_catalogo', { id_negocio: 3 });
  });
  it('categoriasAutorizadas → categoria_q_autorizada', async () => {
    await categoriasAutorizadas();
    expect(request).toHaveBeenCalledWith('categoria_q_autorizada', {});
  });
  it('categoriasPermitidas → categoria_q_permitida', async () => {
    await categoriasPermitidas();
    expect(request).toHaveBeenCalledWith('categoria_q_permitida', {});
  });
  it('registrarCategoria → categoria_registrar', async () => {
    await registrarCategoria({ nombre: 'Comida' });
    expect(request).toHaveBeenCalledWith('categoria_registrar', { nombre: 'Comida' });
  });
  it('editarCategoria → categoria_editar', async () => {
    await editarCategoria({ id: 1, nombre: 'Bebidas' });
    expect(request).toHaveBeenCalledWith('categoria_editar', { id: 1, nombre: 'Bebidas' });
  });
  it('eliminarCategoria → categoria_eliminar', async () => {
    await eliminarCategoria({ id: 1 });
    expect(request).toHaveBeenCalledWith('categoria_eliminar', { id: 1 });
  });
  it('sortPromoverCategoriasNegocio → categoria_id_negocio_catalogo_sort_promover', async () => {
    await sortPromoverCategoriasNegocio({ id_negocio: 2, ids_ordenados: [3, 1, 2] });
    expect(request).toHaveBeenCalledWith('categoria_id_negocio_catalogo_sort_promover', { id_negocio: 2, ids_ordenados: [3, 1, 2] });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// concepto
// ─────────────────────────────────────────────────────────────────────────────
describe('concepto', () => {
  it('conceptos → concepto', async () => {
    await conceptos();
    expect(request).toHaveBeenCalledWith('concepto', {});
  });
  it('conceptoSearch → concepto_search', async () => {
    await conceptoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('concepto_search', { texto_busqueda: 'x' });
  });
  it('conceptoPorId → concepto_q_id', async () => {
    await conceptoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('concepto_q_id', { id: 1 });
  });
  it('conceptosPorIdOrden → concepto_q_id_orden', async () => {
    await conceptosPorIdOrden({ id_orden: 5 });
    expect(request).toHaveBeenCalledWith('concepto_q_id_orden', { id_orden: 5 });
  });
  it('registrarConcepto → concepto_registrar', async () => {
    await registrarConcepto({ nombre: 'Pizza' });
    expect(request).toHaveBeenCalledWith('concepto_registrar', { nombre: 'Pizza' });
  });
  it('editarConcepto → concepto_editar', async () => {
    await editarConcepto({ id: 1, nombre: 'Pasta' });
    expect(request).toHaveBeenCalledWith('concepto_editar', { id: 1, nombre: 'Pasta' });
  });
  it('eliminarConcepto → concepto_eliminar', async () => {
    await eliminarConcepto({ id: 1 });
    expect(request).toHaveBeenCalledWith('concepto_eliminar', { id: 1 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// negocio
// ─────────────────────────────────────────────────────────────────────────────
describe('negocio', () => {
  it('negocios → negocio', async () => {
    await negocios();
    expect(request).toHaveBeenCalledWith('negocio', {});
  });
  it('negocioSearch → negocio_search', async () => {
    await negocioSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('negocio_search', { texto_busqueda: 'x' });
  });
  it('negocioSearchCatalogo → negocio_search_catalogo', async () => {
    await negocioSearchCatalogo({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('negocio_search_catalogo', { texto_busqueda: 'x' });
  });
  it('negocioSearchCatalogoCercanos → negocio_search_catalogo_cercanos', async () => {
    await negocioSearchCatalogoCercanos({ texto_busqueda: 'x', latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('negocio_search_catalogo_cercanos', { texto_busqueda: 'x', latitud: 19.0, longitud: -99.0 });
  });
  it('miNegocio → negocio_q_id_usuario', async () => {
    await miNegocio();
    expect(request).toHaveBeenCalledWith('negocio_q_id_usuario', {});
  });
  it('negocioPorId → negocio_q_id', async () => {
    await negocioPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('negocio_q_id', { id: 1 });
  });
  it('negociosAutorizados → negocio_q_autorizado', async () => {
    await negociosAutorizados({ estatus: true });
    expect(request).toHaveBeenCalledWith('negocio_q_autorizado', { estatus: true });
  });
  it('negociosAbiertos → negocio_q_abierto', async () => {
    await negociosAbiertos();
    expect(request).toHaveBeenCalledWith('negocio_q_abierto', {});
  });
  it('negociosCatalogo → negocio_q_catalogo', async () => {
    await negociosCatalogo();
    expect(request).toHaveBeenCalledWith('negocio_q_catalogo', {});
  });
  it('negociosCatalogoCercanos → negocio_q_catalogo_cercanos', async () => {
    await negociosCatalogoCercanos({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('negocio_q_catalogo_cercanos', { latitud: 19.0, longitud: -99.0 });
  });
  it('registrarNegocio → negocio_registrar', async () => {
    await registrarNegocio({ nombre: 'Mi Negocio' });
    expect(request).toHaveBeenCalledWith('negocio_registrar', { nombre: 'Mi Negocio' });
  });
  it('editarNegocio → negocio_editar', async () => {
    await editarNegocio({ id: 1, nombre: 'Otro Negocio' });
    expect(request).toHaveBeenCalledWith('negocio_editar', { id: 1, nombre: 'Otro Negocio' });
  });
  it('catalogoSortPromover → negocio_catalogo_sort_promover', async () => {
    await catalogoSortPromover({ id: 1, ids_ordenados: [3, 2, 1] });
    expect(request).toHaveBeenCalledWith('negocio_catalogo_sort_promover', { id: 1, ids_ordenados: [3, 2, 1] });
  });
  it('personalizarPromo → negocio_personalizar_promo', async () => {
    await personalizarPromo({ id: 1 });
    expect(request).toHaveBeenCalledWith('negocio_personalizar_promo', { id: 1 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// orden
// ─────────────────────────────────────────────────────────────────────────────
describe('orden', () => {
  it('ordenes → orden', async () => {
    await ordenes();
    expect(request).toHaveBeenCalledWith('orden', {});
  });
  it('ordenSearch → orden_search', async () => {
    await ordenSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('orden_search', { texto_busqueda: 'x' });
  });
  it('ordenSearchEstatus → orden_search_estatus', async () => {
    await ordenSearchEstatus({ id_estatus: 1, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('orden_search_estatus', { id_estatus: 1, texto_busqueda: 'x' });
  });
  it('ordenSearchIdCliente → orden_search_id_cliente', async () => {
    await ordenSearchIdCliente({ id_cliente: 2, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('orden_search_id_cliente', { id_cliente: 2, texto_busqueda: 'x' });
  });
  it('ordenSearchIdClienteEstatus → orden_search_id_cliente_estatus', async () => {
    await ordenSearchIdClienteEstatus({ id_cliente: 2, id_estatus: 1, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('orden_search_id_cliente_estatus', { id_cliente: 2, id_estatus: 1, texto_busqueda: 'x' });
  });
  it('ordenSearchIdNegocio → orden_search_id_negocio', async () => {
    await ordenSearchIdNegocio({ id_negocio: 3, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('orden_search_id_negocio', { id_negocio: 3, texto_busqueda: 'x' });
  });
  it('ordenSearchIdNegocioEstatus → orden_search_id_negocio_estatus', async () => {
    await ordenSearchIdNegocioEstatus({ id_negocio: 3, id_estatus: 1, texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('orden_search_id_negocio_estatus', { id_negocio: 3, id_estatus: 1, texto_busqueda: 'x' });
  });
  it('ordenPorId → orden_q_id', async () => {
    await ordenPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('orden_q_id', { id: 1 });
  });
  it('ordenesPorIdCliente → orden_q_id_cliente', async () => {
    await ordenesPorIdCliente({ id_cliente: 2 });
    expect(request).toHaveBeenCalledWith('orden_q_id_cliente', { id_cliente: 2 });
  });
  it('ordenesPorIdClienteEstatus → orden_q_id_cliente_estatus', async () => {
    await ordenesPorIdClienteEstatus({ id_cliente: 2, id_estatus: 1 });
    expect(request).toHaveBeenCalledWith('orden_q_id_cliente_estatus', { id_cliente: 2, id_estatus: 1 });
  });
  it('ordenesPorIdNegocio → orden_q_id_negocio', async () => {
    await ordenesPorIdNegocio({ id_negocio: 3 });
    expect(request).toHaveBeenCalledWith('orden_q_id_negocio', { id_negocio: 3 });
  });
  it('ordenesPorIdNegocioEstatus → orden_q_id_negocio_estatus', async () => {
    await ordenesPorIdNegocioEstatus({ id_negocio: 3, id_estatus: 1 });
    expect(request).toHaveBeenCalledWith('orden_q_id_negocio_estatus', { id_negocio: 3, id_estatus: 1 });
  });
  it('ordenesPorEstatus → orden_q_estatus', async () => {
    await ordenesPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('orden_q_estatus', { id_estatus: 2 });
  });
  it('ordenesCreadasPorNegocio → orden_q_creada_por_negocio_p', async () => {
    await ordenesCreadasPorNegocio();
    expect(request).toHaveBeenCalledWith('orden_q_creada_por_negocio_p', {});
  });
  it('ordenesSinCreacionLatLon → orden_q_sin_creacion_lat_lon', async () => {
    await ordenesSinCreacionLatLon();
    expect(request).toHaveBeenCalledWith('orden_q_sin_creacion_lat_lon', {});
  });
  it('ordenesCreacionLatLonCent → orden_q_creacion_lat_lon_cent', async () => {
    await ordenesCreacionLatLonCent({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('orden_q_creacion_lat_lon_cent', { latitud: 19.0, longitud: -99.0 });
  });
  it('ordenesCreacionLatLonDec → orden_q_creacion_lat_lon_dec', async () => {
    await ordenesCreacionLatLonDec({ latitud: 19.0, longitud: -99.0 });
    expect(request).toHaveBeenCalledWith('orden_q_creacion_lat_lon_dec', { latitud: 19.0, longitud: -99.0 });
  });
  it('ordenesSinCreacionMacAddress → orden_q_sin_creacion_mac_address', async () => {
    await ordenesSinCreacionMacAddress();
    expect(request).toHaveBeenCalledWith('orden_q_sin_creacion_mac_address', {});
  });
  it('ordenesCreacionMacAddress → orden_q_creacion_mac_address', async () => {
    await ordenesCreacionMacAddress({ mac_address: 'AA:BB:CC' });
    expect(request).toHaveBeenCalledWith('orden_q_creacion_mac_address', { mac_address: 'AA:BB:CC' });
  });
  it('misOrdenes → orden_q_mias', async () => {
    await misOrdenes();
    expect(request).toHaveBeenCalledWith('orden_q_mias', {});
  });
  it('misOrdenesPorEstatus → orden_q_mias_estatus', async () => {
    await misOrdenesPorEstatus({ id_estatus: 1 });
    expect(request).toHaveBeenCalledWith('orden_q_mias_estatus', { id_estatus: 1 });
  });
  it('misVentas → orden_q_mis_ventas', async () => {
    await misVentas();
    expect(request).toHaveBeenCalledWith('orden_q_mis_ventas', {});
  });
  it('misVentasSinPresupuestosExternos → orden_q_mis_ventas_sin_presupuestos_externos', async () => {
    await misVentasSinPresupuestosExternos();
    expect(request).toHaveBeenCalledWith('orden_q_mis_ventas_sin_presupuestos_externos', {});
  });
  it('misVentasPorEstatus → orden_q_mis_ventas_estatus', async () => {
    await misVentasPorEstatus({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('orden_q_mis_ventas_estatus', { id_estatus: 2 });
  });
  it('misVentasPorEstatusSinPresupuestosExternos → orden_q_mis_ventas_estatus_sin_presupuestos_externos', async () => {
    await misVentasPorEstatusSinPresupuestosExternos({ id_estatus: 2 });
    expect(request).toHaveBeenCalledWith('orden_q_mis_ventas_estatus_sin_presupuestos_externos', { id_estatus: 2 });
  });
  it('registrarOrden → orden_registrar', async () => {
    await registrarOrden({ id_negocio: 1 });
    expect(request).toHaveBeenCalledWith('orden_registrar', { id_negocio: 1 });
  });
  it('editarOrden → orden_editar', async () => {
    await editarOrden({ id: 1, notas: 'sin cebolla' });
    expect(request).toHaveBeenCalledWith('orden_editar', { id: 1, notas: 'sin cebolla' });
  });
  it('accederConToken → orden_acceder_con_token', async () => {
    await accederConToken({ token: 'tok123' });
    expect(request).toHaveBeenCalledWith('orden_acceder_con_token', { token: 'tok123' });
  });
  it('cotizarEntrega → orden_cotizar_entrega', async () => {
    await cotizarEntrega({ id: 1 });
    expect(request).toHaveBeenCalledWith('orden_cotizar_entrega', { id: 1 });
  });
  it('ordenEnCola → orden_en_cola', async () => {
    await ordenEnCola({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_en_cola', { id: 5 });
  });
  it('ordenRechazada → orden_rechazada', async () => {
    await ordenRechazada({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_rechazada', { id: 5 });
  });
  it('ordenAbortada → orden_abortada', async () => {
    await ordenAbortada({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_abortada', { id: 5 });
  });
  it('ordenAceptada → orden_aceptada', async () => {
    await ordenAceptada({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_aceptada', { id: 5 });
  });
  it('ordenEnProceso → orden_en_proceso', async () => {
    await ordenEnProceso({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_en_proceso', { id: 5 });
  });
  it('ordenLista → orden_lista', async () => {
    await ordenLista({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_lista', { id: 5 });
  });
  it('ordenEnviando → orden_enviando', async () => {
    await ordenEnviando({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_enviando', { id: 5 });
  });
  it('ordenEnviada → orden_enviada', async () => {
    await ordenEnviada({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_enviada', { id: 5 });
  });
  it('ordenEntregada → orden_entregada', async () => {
    await ordenEntregada({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_entregada', { id: 5 });
  });
  it('ordenExitosa → orden_exitosa', async () => {
    await ordenExitosa({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_exitosa', { id: 5 });
  });
  it('ordenFallida → orden_fallida', async () => {
    await ordenFallida({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_fallida', { id: 5 });
  });
  it('cancelarOrden → orden_cancelada', async () => {
    await cancelarOrden({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_cancelada', { id: 5 });
  });
  it('cerrarOrden → orden_cerrar', async () => {
    await cerrarOrden({ id: 5 });
    expect(request).toHaveBeenCalledWith('orden_cerrar', { id: 5 });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// producto
// ─────────────────────────────────────────────────────────────────────────────
describe('producto', () => {
  it('productos → producto', async () => {
    await productos();
    expect(request).toHaveBeenCalledWith('producto', {});
  });
  it('productoSearch → producto_search', async () => {
    await productoSearch({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('producto_search', { texto_busqueda: 'x' });
  });
  it('productoSearchCatalogo → producto_search_catalogo', async () => {
    await productoSearchCatalogo({ texto_busqueda: 'x' });
    expect(request).toHaveBeenCalledWith('producto_search_catalogo', { texto_busqueda: 'x' });
  });
  it('productoPorId → producto_q_id', async () => {
    await productoPorId({ id: 1 });
    expect(request).toHaveBeenCalledWith('producto_q_id', { id: 1 });
  });
  it('productosPorIdUsuario → producto_q_id_usuario', async () => {
    await productosPorIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('producto_q_id_usuario', { id_usuario: 2 });
  });
  it('productosPorIdNegocio → producto_q_id_negocio', async () => {
    await productosPorIdNegocio({ id_negocio: 3 });
    expect(request).toHaveBeenCalledWith('producto_q_id_negocio', { id_negocio: 3 });
  });
  it('productosPorIdCategoria → producto_q_id_categoria', async () => {
    await productosPorIdCategoria({ id_categoria: 4 });
    expect(request).toHaveBeenCalledWith('producto_q_id_categoria', { id_categoria: 4 });
  });
  it('productosAutorizados → producto_q_autorizado', async () => {
    await productosAutorizados();
    expect(request).toHaveBeenCalledWith('producto_q_autorizado', {});
  });
  it('productosPermitidos → producto_q_permitido', async () => {
    await productosPermitidos();
    expect(request).toHaveBeenCalledWith('producto_q_permitido', {});
  });
  it('productosCatalogo → producto_q_catalogo', async () => {
    await productosCatalogo();
    expect(request).toHaveBeenCalledWith('producto_q_catalogo', {});
  });
  it('productosCatalogoPorIdUsuario → producto_q_id_usuario_catalogo', async () => {
    await productosCatalogoPorIdUsuario({ id_usuario: 2 });
    expect(request).toHaveBeenCalledWith('producto_q_id_usuario_catalogo', { id_usuario: 2 });
  });
  it('productosCatalogoPorIdNegocio → producto_q_id_negocio_catalogo', async () => {
    await productosCatalogoPorIdNegocio({ id_negocio: 3 });
    expect(request).toHaveBeenCalledWith('producto_q_id_negocio_catalogo', { id_negocio: 3 });
  });
  it('productosCatalogoPorIdCategoria → producto_q_id_categoria_catalogo', async () => {
    await productosCatalogoPorIdCategoria({ id_categoria: 4 });
    expect(request).toHaveBeenCalledWith('producto_q_id_categoria_catalogo', { id_categoria: 4 });
  });
  it('productosDeMiNegocio → producto_q_id_negocio_mio', async () => {
    await productosDeMiNegocio();
    expect(request).toHaveBeenCalledWith('producto_q_id_negocio_mio', {});
  });
  it('registrarProducto → producto_registrar', async () => {
    await registrarProducto({ nombre: 'Café' });
    expect(request).toHaveBeenCalledWith('producto_registrar', { nombre: 'Café' });
  });
  it('editarProducto → producto_editar', async () => {
    await editarProducto({ id: 1, nombre: 'Té' });
    expect(request).toHaveBeenCalledWith('producto_editar', { id: 1, nombre: 'Té' });
  });
  it('eliminarProducto → producto_eliminar', async () => {
    await eliminarProducto({ id: 1 });
    expect(request).toHaveBeenCalledWith('producto_eliminar', { id: 1 });
  });
  it('sortPromoverIdNegocio → producto_id_negocio_catalogo_sort_promover', async () => {
    await sortPromoverIdNegocio({ id_negocio: 2, ids_ordenados: [3, 1, 2] });
    expect(request).toHaveBeenCalledWith('producto_id_negocio_catalogo_sort_promover', { id_negocio: 2, ids_ordenados: [3, 1, 2] });
  });
  it('sortPromoverIdCategoria → producto_id_categoria_catalogo_sort_promover', async () => {
    await sortPromoverIdCategoria({ id_categoria: 2, ids_ordenados: [2, 3, 1] });
    expect(request).toHaveBeenCalledWith('producto_id_categoria_catalogo_sort_promover', { id_categoria: 2, ids_ordenados: [2, 3, 1] });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// informacion_basica
// ─────────────────────────────────────────────────────────────────────────────
describe('informacion_basica', () => {
  it('informacionBasica → informacion_basica', async () => {
    await informacionBasica();
    expect(request).toHaveBeenCalledWith('informacion_basica', {});
  });
});
