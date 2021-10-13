import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class userList extends Component {

    state = {
        users:[]
    }
    
    componentDidMount() {
    
        this.getUser();
        
    }

    async getUser(){
        const res = await axios.get("http://localhost:4000/api/usuarios")
        this.setState({users:res.data})
    }

    deleteUser = async (userid) => {
        
    await axios.delete("http://localhost:4000/api/usuarios/" + userid);
    this.getUser();
    
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.users.map (user =>(
                        <div className="col-md-4 p-2" key={user._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{user.Nombre}</h5>
                                
                                
                                <Link className="btn btn-secondary" to = {"/edit/" + user._id} >
                                Editar
                                </Link>

                                </div>
                                <div className="card-body">
                                    
                                    <p>Correo: {user.Email}</p>
                                    <p>Tipo de Usuario: {user.Cargo}</p>
                                    <p>Estado: {user.Estado}</p>
                                </div>
                                <div className="card-footer" >
                                    <button className="btn btn-danger" onClick={()=> this.deleteUser(user._id)}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>

                        </div>

                    ))
                }
            </div>
        )
    }
}