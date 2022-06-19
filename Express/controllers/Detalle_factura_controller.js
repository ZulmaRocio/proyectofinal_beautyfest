
const Detalle_factura = require('../models/Detalle_factura')

exports.crearDetalleFactura = async(req, res) => {
    try {
        let detafactura 
        detafactura = new Detalle_factura(req.body)
        await detafactura.save()
        res.send(detafactura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerDetalle = async(req, res) => {
    try {
        let detalle_facturas = await Detalle_factura.find();
        res.json(detalle_facturas)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerDetalleXID = async(req, res) => {
    try {
        let detalle_factura = await Detalle_factura.findById(req.params.id)
        if (!detalle_factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(detalle_factura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.ActualizarDetalle = async(req, res) => {
    try {
        let detalle = new Detalle_factura(req.body)

        let detalle_factura = await Detalle_factura.findById(detalle._id)
        if (!detalle_factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        detalle_factura.id_producto = detalle.id_producto
        detalle_factura.cantidad = detalle.cantidad
        detalle_factura.id_cliente = detalle.id_cliente
        detalle_factura.vlor_item = detalle.vlor_item
        
        let procesoUpdate = await Detalle_factura.findOneAndUpdate({ _id: detalle._id }, detalle_factura, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}


exports.BorrarDetalle = async(req, res) => {
    try {
        let detalle_factura = await Detalle_factura.findById(req.params.id)
        if (!detalle_factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        await Detalle_factura.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
