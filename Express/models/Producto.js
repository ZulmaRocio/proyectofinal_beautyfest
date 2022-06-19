const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
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
})

module.exports = mongoose.model("producto", ProductoSchema)