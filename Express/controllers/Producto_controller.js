
const modelProducto = require('../models/Producto')

exports.crearproducto = async(req, res) => {
    try {
        let producto
        producto = new producto(req.body)
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}


exports.obtenerproductos = async(req, res) => {
    try {
        let productos = await producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerproducto = async(req, res) => {
    try {
        let producto = await producto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.actualizarproducto = async(req, res) => {
    try {
        const { id_producto, name, stock, costo, reservado} = req.body

        let producto = await producto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        producto.d_producto = id_producto
        producto.name = name
        producto.stock = stock
        producto.costo = costo
        producto.reservado = reservado
     

        let procesoUpdate = await producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
