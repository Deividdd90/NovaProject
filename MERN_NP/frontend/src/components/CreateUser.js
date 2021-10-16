import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        Nombre: "",
        Email: "",
        Cargo: "",
        Estado: "",
        editing: false,
        rolSelect: "",
        estSelect: "",
        _id: ""
    }

    async componentDidMount() {

        if (this.props.match.params.id) {
            const res = await axios.get("http://localhost:4000/api/usuarios/" + this.props.match.params.id);
            this.setState(
                {
                    Nombre: res.data.Nombre,
                    Email: res.data.Email,
                    rolSelect: res.data.cargo,
                    estSelect: res.data.Estado,
                    editing: true,
                    _id: res.data._id
                }
            )
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updateUser = {
                Nombre: this.state.Nombre,
                Email: this.state.Email,
                Cargo: this.state.rolSelect,
                Estado: this.state.estSelect,
            };
            await axios.put("http://localhost:4000/api/usuarios/" + this.state._id, updateUser);
        }

        else {
            const newUser = {
                Nombre: this.state.Nombre,
                Email: this.state.Email,
                Cargo: this.state.rolSelect,
                Estado: this.state.estSelect,
            };
            await axios.post("http://localhost:4000/api/usuarios", newUser);
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
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="Email"
                                onChange={this.onInputChange}
                                value={this.state.Email}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.rolSelect}
                                onChange={this.onInputChange}
                                name="rolSelect"
                                required>
                                <option selected> Seleccione el tipo de usuario</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.estSelect}
                                onChange={this.onInputChange}
                                name="estSelect"
                                required>
                                <option selected> Seleccione el tipo de usuario</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Autorizado">Autorizado</option>
                                <option value="No autorizado">No autorizado</option>
                            </select>
                        </div>

                        <button className="btn btn-primary">
                            Guardar <i className="material-icons"> </i>
                        </button>

                    </form>

                </div>
            </div>
        )
    }
}