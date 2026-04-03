const express = require('express');
const router = express.Router();
const Producto = require('../models/producto.model');

// GET productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo productos' });
    }
});

// POST producto
router.post('/', async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error creando producto' });
    }
});

module.exports = router;

