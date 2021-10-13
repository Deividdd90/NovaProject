const sventaCtrl={};

sventaCtrl.getSventas=(request,response)=> response.json({message: []})
sventaCtrl.createSventa=(request,response)=> response.json({message: "seguimiento venta creado"});
sventaCtrl.getSventa = (request,response)=> response.json({title: "2121548"})
sventaCtrl.updateSventa = (request,response)=> response.json({message: "seguimiento venta actualizada"})
sventaCtrl.deleteSventa = (request,response)=> response.json({message: "seguimiento venta eliminada"})

module.exports = sventaCtrl;