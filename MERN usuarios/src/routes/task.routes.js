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
    const { usuario, email, cargo, estado } = req.body;
    const task = new Task({usuario, email, cargo, estado});
    await task.save();
    res.json({status: 'Usuario guardado'});
  });

  router.put('/:id', async (req, res) => {
    const { usuario, email, cargo, estado } = req.body;
    const newTask = {usuario, email, cargo, estado};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Usuario actualizado'});
  });
  
  router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario eliminado'});
  });
module.exports = router;