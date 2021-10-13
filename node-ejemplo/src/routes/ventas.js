const express = require("express");
const ventasSchema = require("../models/ventas");

const router = express.Router();

// Create Sale
router.post('/ventas', (req, res) =>{
    const venta = ventasSchema(req.body);
    venta
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// GET all sales
router.get("/ventas", (req, res) =>{
    ventasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//GET a Sale
router.get("/ventas/:id", (req, res) =>{
    const { id } = req.params;
    ventasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//UPDATE a Sale
router.put("/ventas/:id", (req, res) =>{
    const { id } = req.params;
    const {fechaPedido, producto, detalle, precio, cantidad, valorTotal, fechaPago} = req.body;
    ventasSchema
        .updateOne({ _id: id},{ $set:{fechaPedido, producto, detalle, precio, cantidad, valorTotal, fechaPago}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//DELETE a Sale
router.delete("/ventas/:id", (req, res) =>{
    const { id } = req.params;
    ventasSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;