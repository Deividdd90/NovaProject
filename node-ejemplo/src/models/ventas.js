const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
    fechaPedido: { type: String, require: true },

    producto:{ type: String, require: true},
        
    detalle:{ type: String, require: true},

    precio:{ type: String, require: true},

    cantidad:{ type: String, require: true },

    valorTotal:{type: String, require: true },

    fechaPedido:{ type: String, require: true },

});

module.exports = mongoose.model('ventas', ventasSchema);
