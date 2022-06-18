
const Contacto = require('../models/Contacto')

exports.crearDetalle = async(req, res) => {
    try {
        let contacto
        contacto = new Contacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}


exports.obtenerDetalle = async(req, res) => {
    try {
        let contactos = await Contacto.find();
        res.json(contactos)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerDetalleXID = async(req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.ActualizarDetalle = async(req, res) => {
    try {
        const { correo, nombre, direccion, ciudad, mensaje, edad } = req.body

        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        contacto.correo = correo
        contacto.nombre = nombre
        contacto.direccion = direccion
        contacto.ciudad = ciudad
        contacto.mensaje = mensaje
        contacto.edad = edad

        let procesoUpdate = await Contacto.findOneAndUpdate({ _id: req.params.id }, contacto, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
