const {Schema , model} = require("mongoose");

const userSchema=new Schema ({

fechaVenta:Date,
prodVenta:String,
cantVenta:Number,
precVenta:Number,
totalVenta:Number,
cliente:String,
documento:Number,
vendedor:String
});

module.exports = model ("Ventas", userSchema);