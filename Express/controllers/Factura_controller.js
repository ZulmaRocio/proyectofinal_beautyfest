
const factura = require('../models/Factura')

exports.crearFactura = async(req, res) => {
    try {
        let 
        factura = new factura(req.body)
        await factura.save()
        res.send(factura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}


exports.obtenerFactura = async(req, res) => {
    try {
        let facturas = await factura.find();
        res.json(facturas)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerFacturaxID = async(req, res) => {
    try {
        let factura = await factura.findById(req.params.id)
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
        const { id_producto, cantidad, id_cliente, Vlor_item } = req.body

        let factura = await factura.findById(req.params.id)
        if (!factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        factura.id_producto = id_producto
        factura.cantidad = cantidad
        factura.id_cliente = id_cliente
        factura.Vlor_item = Vlor_item

        let procesoUpdate = await factura.findOneAndUpdate({ _id: req.params.id }, factura, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
