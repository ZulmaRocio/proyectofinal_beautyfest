
const Detalle_factura = require('../models/Detalle_factura')

exports.crearDetalle = async(req, res) => {
    try {
        let Detalle_factura
        Detalle_factura = new Detalle_factura(req.body)
        await Detalle_factura.save()
        res.send(Detalle_factura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerDetalle = async(req, res) => {
    try {
        let Detalle_facturas = await Detalle_factura.find();
        res.json(Detalle_facturas)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerDetalleXID = async(req, res) => {
    try {
        let Detalle_factura = await Detalle_factura.findById(req.params.id)
        if (!Detalle_factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(Detalle_factura)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.ActualizarDetalle = async(req, res) => {
    try {
        const { id_producto, cantidad, id_cliente, vlor_item } = req.body

        let Detalle_factura = await Detalle_factura.findById(req.params.id)
        if (!Detalle_factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        Detalle_factura.id_producto = id_producto
        Detalle_factura.cantidad = cantidad
        Detalle_factura.id_cliente = id_cliente
        Detalle_factura.vlor_item = vlor_item
        
        let procesoUpdate = await Detalle_factura.findOneAndUpdate({ _id: req.params.id }, Detalle_factura, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}


exports.BorrarDetalle = async(req, res) => {
    try {
        let Detalle_factura = await Detalle_factura.findById(req.params.id)
        if (!Detalle_factura) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        let procesoUpdate = await Detalle_factura.deleteOne(
            Detalle_factura
            )
        res.json(200)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
