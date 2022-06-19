const mongoose = require('mongoose')

const FacturaSchema = mongoose.Schema({
    id_producto: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    id_cliente: {
        type: String,
        required: true
    },
    Vlor_item: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("factura", FacturaSchema)