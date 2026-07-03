const express = require("express");
const router = express.Router();
const libros = require("../data/datos.js");

router.get("/", (req, res) => {
    res.json(libros);
});

router.post("/", (req,res) => {
    const nuevoLibro = req.body;
    libros.push(nuevoLibro);
    res.status(201).json({mensaje: "Libro registrado", libro : nuevoLibro});
});

module.exports = router;