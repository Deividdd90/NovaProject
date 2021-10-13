import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        
        Nombre: "",
        Email: "",
        Cargo: "",
        Estado: "",
        
        
    }

        onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            Nombre: this.state.Nombre,
            Email: this.state.Email,
            Cargo: this.state.Cargo,
            Estado: this.state.Estado
           
        };
        
        if(this.state.editing){
            await axios.put("http://localhost:4000/api/usuarios", this.state._id, newUser);

        }
        else{
        await axios.post ("http://localhost:4000/api/usuarios", newUser);
        }
       
        
        window.location.href = '/usuario';
        
    }

    onInputChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>▒ Nuevo Usuario ▒  </h4>
                    <form onSubmit={this.onSubmit}>
                        
                        
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                onChange={this.onInputChange}
                                name="Nombre"
                                value={this.state.Nombre}
                                required />
                        </div>
                        
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="Email"
                                onChange={this.onInputChange}
                                value={this.state.Email}
                                required>
                            </textarea>
                        </div>
                        
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Cargo"
                                name="Cargo"
                                onChange={this.onInputChange}
                                value={this.state.Cargo}
                                required>
                            </textarea>
                        </div>

                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Estado"
                                name="Estado"
                                onChange={this.onInputChange}
                                value={this.state.Estado}
                                required>
                            </textarea>
                        </div>

                        <button className="btn btn-primary">
                            Crear Usuario<i className="material-icons"> </i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}