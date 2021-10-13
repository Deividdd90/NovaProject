const userCtrl={};

const userModel= require("../models/user-model");

//consultar todos los usuarios
userCtrl.getUsers=async(request,response)=> {
    const users= await userModel.find();
    response.json(users);
}

//crear usuarios
userCtrl.createUser= async (request,response)=> {
    const {Nombre, Email, Cargo, Estado} = request.body;
    const newUser = new userModel({
        Nombre,
        Email,
        Cargo,
        Estado
      });
    await newUser.save();
    response.json({message: "Usuario creado 232"})
};

//consultar un usuario por id
userCtrl.getUser = async (request,response)=> {
    const user = await userModel.findById(request.params.id);
    response.json(user)

}
//actualizar usuario
userCtrl.updateUser =  async (request,response)=> {
    const {Nombre, Email, Cargo, Estado} = request.body;
    await userModel.findByIdAndUpdate(request.params.id,{
        Nombre,
        Email,
        Cargo,
        Estado    
    })
    response.json({message: "usuario actualizada"})
}

//eliminar usuario
userCtrl.deleteUser = async(request,response)=> {
    await userModel.findByIdAndDelete(request.params.id);
    response.json({message: "usuario eliminado"})
}

module.exports = userCtrl;