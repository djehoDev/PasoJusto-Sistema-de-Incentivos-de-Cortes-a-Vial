const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    puntosDisponibles: {
        type: Number,
        default: 0
    },
    puntosCanjeados: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

