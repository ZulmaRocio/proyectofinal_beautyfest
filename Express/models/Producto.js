const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("contacto", contactoSchema)