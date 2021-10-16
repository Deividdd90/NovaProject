import React, { Component } from 'react'
import axios from 'axios'

export default class CreateProd extends Component {

    state = {
        prods: [],
        Producto: "",
        Detalle: "",
        Precio: "",
        Estado: "",
        editing: false,
        _id: ""

    }

    async componentDidMount() {

        if (this.props.match.params.id) {
            const res = await axios.get("http://localhost:4000/api/productos/" + this.props.match.params.id);
            this.setState(
                {
                    Producto: res.data.Producto,
                    Detalle: res.data.Detalle,
                    Precio: res.data.Precio,
                    Estado: res.data.Estado,
                    editing: true,
                    _id: res.data._id
                }
            )
        }
    }


    onSubmit = async (e) => {
        e.preventDefault();

        if (this.state.editing) {
            const updateProd = {
                Producto: this.state.Producto,
                Detalle: this.state.Detalle,
                Precio: this.state.Precio,
                Estado: this.state.Estado
            };
            await axios.put("http://localhost:4000/api/productos/" + this.state._id, updateProd);
        }
        else {
            const newProd = {
                Producto: this.state.Producto,
                Detalle: this.state.Detalle,
                Precio: this.state.Precio,
                Estado: this.state.Estado
            };
            await axios.post("http://localhost:4000/api/productos", newProd);
        }
        window.location.href = '/productos';

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
                    <h4>▒ Nuevo Producto ▒  </h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre producto"
                                onChange={this.onInputChange}
                                name="Producto"
                                value={this.state.Producto}
                                required />
                        </div>

                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Detalle"
                                name="Detalle"
                                onChange={this.onInputChange}
                                value={this.state.Detalle}
                                required>
                            </textarea>
                        </div>

                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Precio"
                                name="Precio"
                                onChange={this.onInputChange}
                                value={this.state.Precio}
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
                            Guardar<i className="material-icons"> </i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}