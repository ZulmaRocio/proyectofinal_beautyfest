
const Producto = require('../models/Producto')

exports.crearproducto = async(req, res) => {
    try {
        let producto
        producto = new Producto(req.body)
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerproductos = async(req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerproductoxid = async(req, res) => {
    try {
        const id = req.params.id
        let producto = await Producto.findById(id)
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
        let productoActualizar = new Producto(req.body)
        
        let producto = await Producto.findById(productoActualizar._id)
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        producto.id_producto = productoActualizar.id_producto
        producto.name = productoActualizar.name
        producto.stock = productoActualizar.stock
        producto.costo = productoActualizar.costo
        producto.reservado = productoActualizar.reservado

        let procesoUpdate = await Producto.findOneAndUpdate({ _id: productoActualizar._id }, producto, { new: true })
        res.json(procesoUpdate)
        
        res.json({});

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
