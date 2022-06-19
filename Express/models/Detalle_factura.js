const mongoose = require('mongoose')

const detalleFacturaSchema = mongoose.Schema({
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
    vlor_item: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("detalleFactura", detalleFacturaSchema)