const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

// GET todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo usuarios' });
    }
});

// GET usuario por correo
router.get('/:correo', async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ correo: req.params.correo });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo usuario' });
    }
});


// POST usuario
router.post('/', async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(usuario);
});

module.exports = router;

