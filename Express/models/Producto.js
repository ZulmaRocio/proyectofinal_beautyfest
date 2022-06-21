const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    id_producto: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    reservado: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("producto", productoSchema)