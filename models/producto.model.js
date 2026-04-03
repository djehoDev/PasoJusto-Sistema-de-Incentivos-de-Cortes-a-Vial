const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    puntosNecesarios: {
        type: Number,
        required: true
    },
    comercio: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Producto', productoSchema);

