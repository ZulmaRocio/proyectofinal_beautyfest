const express = require('express')
const router = express.Router();
const contactoController = require('../controllers/contactoController')
const facturaController = require('../controllers/Factura_controller')
const ProductoController = require('../controllers/productoController')
const Detalle_facturaController = require('../controllers/Detalle_Factura_controller')

router.post('/crear-contacto', contactoController.crearContacto)
router.get('/obtener-lista-contactos', contactoController.obtenerContactos)
router.get('/obtener-contacto/:id', contactoController.obtenerContacto)
router.put('/actualizar-contacto/:id', contactoController.actualizarContacto)
router.delete('/borrar-contacto/:id', contactoController.borrarContacto)


/// factura


router.post('/factura/crearFactura', facturaController.crearFactura)
router.get('/factura/obtenerFactura', facturaController.obtenerFactura)
router.get('/factura/obtenerFacturaxID/:id', facturaController.obtenerFacturaxID)
router.put('/factura/ActualizarFactura/:id', facturaController.ActualizarFactura)


/// detalle factura

router.post('/Detalle_factura/crear', Detalle_facturaController.crearDetalle_factura)
router.get('/Detalle_factura/obtnerdetalle', Detalle_facturaController.obtenerDetalle_factura)
router.put('/Detalle_factura/actualizardetalle', Detalle_facturaController.acturalizarDetalle_factura)
router.get('/Detalle_factura/obtenerProductoxID/:id', Detalle_facturaController.obtenerProductoxID)
router.delete('/Detalle_factura/borrarDetalle', Detalle_facturaController.BorrarDetalle)


/// producto 

router.post('/producto/crearProducto', ProductoController.crearProducto)
router.get('/producto/obtenerProducto', ProductoController.obtenerProducto)
router.get('/producto/obtenerProductoxID/:id', ProductoController.obtenerProductoxID)
router.put('/producto/ActualizarProducto/:id', ProductoController.ActualizarProducto)


module.exports = router