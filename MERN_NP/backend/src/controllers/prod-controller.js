const prodCtrl={};
const prodModel= require ("../models/prod-model");

prodCtrl.getProds=(request,response)=> response.json({message: []})
prodCtrl.createProd=(request,response)=> response.json({message: "producto creado"});
prodCtrl.getProd = (request,response)=> response.json({title: "camiseta"})
prodCtrl.updateProd = (request,response)=> response.json({message: "producto actualizada"})
prodCtrl.deleteProd = (request,response)=> response.json({message: "producto eliminada"})

module.exports = prodCtrl;