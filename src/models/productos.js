
const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    placa: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },
    horasreparacion: {
        type: Number,
        required: [true, 'El campo Correo es obligatorio']
    },
    precioreparacion: {
        type: Number,
        required: [true, 'El campo cantidad es obligatorio']
    },
    observaciones: {
        type: String,
        required: [true, 'El campo categoria es obligatorio']
    }
});

module.exports = mongoose.model('producto', productoSchema);
