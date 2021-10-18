const ventaCtrl={};

const ventaModel= require("../models/venta-model");

//consultar todas las ventas
ventaCtrl.getVentas=async(request,response)=> {
    const ventas= await ventaModel.find();
    response.json(ventas);
}

//crear venta
ventaCtrl.createVenta= async (request,response)=> {
    const {fechaVenta, prodVenta, cantVenta, precVenta, totalVenta, cliente, documento, vendedor} = request.body;
    const newVenta = new ventaModel({
        fechaVenta,
        prodVenta,
        cantVenta,
        precVenta,
        totalVenta,
        cliente,
        documento,
        vendedor
      });
    await newVenta.save();
    response.json({message: "venta creada"})
};

//consultar una venta por id
ventaCtrl.getVenta = async (request,response)=> {
    const venta = await ventaModel.findById(request.params.id);
    response.json(venta)

}
//actualizar usuario
ventaCtrl.updateVenta =  async (request,response)=> {
    const {fechaVenta, prodVenta, cantVenta, precVenta, totalVenta, cliente, documento, vendedor} = request.body;
    await ventaModel.findByIdAndUpdate(request.params.id,{
        fechaVenta,
        prodVenta,
        cantVenta,
        precVenta,
        totalVenta,
        cliente,
        documento,
        vendedor   
    })
    response.json({message: "Venta actualizada"})
}

//eliminar venta
ventaCtrl.deleteVenta = async(request,response)=> {
    await ventaModel.findByIdAndDelete(request.params.id);
    response.json({message: "Venta eliminada"})
}

module.exports = ventaCtrl;