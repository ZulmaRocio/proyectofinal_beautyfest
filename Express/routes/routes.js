const express = require('express');
const router = express.Router();

const contactoController = require('../controllers/contactoController');
const facturaController = require('../controllers/factura_controller');
const productoController = require('../controllers/producto_controller');
const detallefacturaController = require('../controllers/detalle_factura_controller');

router.post('/crear-contacto', contactoController.crearContacto)
router.get('/obtener-lista-contactos', contactoController.obtenerContactos)
router.get('/obtener-contacto/:id', contactoController.obtenerContacto)
router.put('/actualizar-contacto/:id', contactoController.actualizarContacto)
router.delete('/borrar-contacto/:id', contactoController.borrarContacto)

router.post('/factura/crearFactura', facturaController.crearFactura)
router.get('/factura/obtenerFactura', facturaController.obtenerFactura)
router.get('/factura/obtenerFacturaxID/:id', facturaController.obtenerFacturaxID)
router.put('/factura/ActualizarFactura', facturaController.ActualizarFactura)

router.post('/detalle_factura/crear', detallefacturaController.crearDetalleFactura)
router.get('/detalle_factura/obtener', detallefacturaController.obtenerDetalle)
router.put('/detalle_factura/actualizardetalle', detallefacturaController.ActualizarDetalle)
router.get('/detalle_factura/obtenerProductoxID/:id', detallefacturaController.obtenerDetalleXID)
router.delete('/detalle_factura/borrarDetalle', detallefacturaController.BorrarDetalle)

router.post('/producto/crearProducto', productoController.crearproducto)
router.get('/producto/obtenerproducto', productoController.obtenerproductos)
router.get('/producto/obtenerProductoxID/:id', productoController.obtenerproductoxid)
router.put('/producto/actualizarProducto', productoController.actualizarproducto)
 
module.exports = router;