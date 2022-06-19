const mongoose = require('mongoose')

const FacturaSchema = mongoose.Schema({
    id_cliente: {
        type: String,
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
        required: true
    }
    
})

module.exports = mongoose.model("factura", FacturaSchema)