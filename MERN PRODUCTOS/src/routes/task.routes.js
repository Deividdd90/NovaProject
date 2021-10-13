const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
  });

router.get('/:id',async(req,res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);  
});

router.post('/', async (req, res) => {
    const { producto, detalle, precio, estado } = req.body;
    const task = new Task({producto, detalle, precio, estado});
    await task.save();
    res.json({status: 'Producto guardado'});
  });

  router.put('/:id', async (req, res) => {
    const { producto, detalle, precio, estado } = req.body;
    const newTask = {producto, detalle, precio, estado};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Producto actualizado'});
  });
  
  router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado'});
  });
module.exports = router;