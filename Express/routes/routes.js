const express = require('express')
const router = express.Router();
const contactoController = require('../controllers/contactoController')
const facturaController = require('../controllers/Factura_controller')

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



/// producto 







module.exports = router