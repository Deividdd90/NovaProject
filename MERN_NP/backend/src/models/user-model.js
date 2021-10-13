const {Schema , model} = require("mongoose");

const userSchema=new Schema ({

Nombre: String,
Email: String,
Cargo: String,
Estado: String

});

module.exports = model ("Usuarios", userSchema);