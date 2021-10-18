const {Schema , model} = require("mongoose");

const prodSchema=new Schema ({
    Producto:String,
    Detalle: String,
    Precio: Number,
    Estado: String

});

module.exports = model ("Productos", prodSchema);