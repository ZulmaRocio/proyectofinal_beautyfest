const mongoose = require('mongoose')

const facturaSchema = mongoose.Schema({
    id_cliente: {
        type: Number,
        required: true
    },
    nombre_cliente: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    valor_total: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default:false

    }
    
})

module.exports = mongoose.model("factura", facturaSchema)