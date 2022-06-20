
const Factura = require('../models/Factura')

exports.crearFactura = async(req, res) => {
    try {
        let factura 
        factura = new Factura(req.body)
        await factura.save()
        res.send(factura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerFactura = async(req, res) => {
    try {
        let facturas = await Factura.find();
        res.json(facturas)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerFacturaxID = async(req, res) => {
    try {
        let factura = await Factura.findById(req.params.id)
        if (!factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(factura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.ActualizarFactura = async(req, res) => {
    try {

        let facturaActualizar = new Factura(req.body)
        let factura = await Factura.findById(facturaActualizar._id)
        if (!factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        factura.id_cliente = facturaActualizar.id_cliente
        factura.nombre_cliente = facturaActualizar.nombre_cliente
        factura.fecha = facturaActualizar.fecha
        factura.valor_total = facturaActualizar.valor_total
        factura.estado = facturaActualizar.estado

        let procesoUpdate = await Factura.findOneAndUpdate({ _id: factura._id }, factura, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}