const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    producto: {type: String, required: true},
    detalle: {type: String, required: true},
    precio: {type: String, required: true},
    estado: {type: String, required: true},
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
