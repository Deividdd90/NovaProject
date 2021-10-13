const ventaCtrl={};

ventaCtrl.getVentas=(request,response)=> response.json({message: []})
ventaCtrl.createVenta=(request,response)=> response.json({message: "Usuario creado"});
ventaCtrl.getVenta = (request,response)=> response.json({title: "2121548"})
ventaCtrl.updateVenta = (request,response)=> response.json({message: "usuario actualizada"})
ventaCtrl.deleteVenta = (request,response)=> response.json({message: "usurio eliminada"})

module.exports = ventaCtrl;