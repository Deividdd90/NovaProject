const {Schema , model} = require("mongoose");

const prodSchema=new Schema ({
    Producto: {
        type:String,
        required: true
    },
    Detalle: {
        type:String,
        required: true
    },
    Precio: {
        type:String,
        required: true
    },
    Estado: {
        type:String,
        required: true
    },
}, {timestamps:true});

module.exports = model ("Productos", prodSchema);