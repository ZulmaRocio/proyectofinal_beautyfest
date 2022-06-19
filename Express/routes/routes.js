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


router.post('/Detalle_factura/crearFactura', facturaController.crearFactura)
router.get('/Detalle_factura/obtenerFactura', facturaController.obtenerFactura)
router.get('/Detalle_factura/obtenerFacturaxID/:id', facturaController.obtenerFacturaxID)
router.put('/Detalle_factura/ActualizarFactura/:id', facturaController.ActualizarFactura)


/// detalle factura

router.post('/Detalle_factura/crearProducto', Detalle_facturaController.crearDetalle_factura)
router.get('/Detalle_factura/obtenerProducto', Detalle_facturaController.obtenerDetalle_factura)
router.put('/Detalle_factura/obtenerProducto', Detalle_facturaController.acturalizarDetalle_factura)



/// producto 

router.post('/producto/crearProducto', ProductoController.crearProducto)
router.get('/producto/obtenerProducto', ProductoController.obtenerProducto)
router.get('/producto/obtenerProductoxID/:id', ProductoController.obtenerProductoxID)
router.put('/producto/ActualizarProducto/:id', ProductoController.ActualizarProducto)


module.exports = router