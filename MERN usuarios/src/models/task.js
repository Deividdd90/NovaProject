const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    usuario: {type: String, required: true},
    email: {type: String, required: true},
    cargo: {type: String, required: true},
    estado: {type: String, required: true},
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
