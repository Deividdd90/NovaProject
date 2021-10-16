const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: String,
  role: {
    type: String,
    required: true,
    enum: ['ADMIN', 'SALES', 'PENDING'],
  }, // vendedor, administrador, pendiente
  withGoogle: Boolean,
});

module.exports = mongoose.model('users', userSchema);
