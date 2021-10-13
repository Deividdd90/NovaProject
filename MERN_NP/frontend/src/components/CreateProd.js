import React, { Component } from 'react'
import axios from 'axios'

export default class CreateProd extends Component {

    state = {
        
        Producto: "",
        Detalle: "",
        Precio: "",
        Estado: "",
        
        
    }

        onSubmit = async (e) => {
        e.preventDefault();
        const newProd = {
            Producto: this.state.Producto,
            Detalle: this.state.Detalle,
            Precio: this.state.Precio,
            Estado: this.state.Estado
           
        };
        
        if(this.state.editing){
            await axios.put("http://localhost:4000/api/productos", this.state._id, newProd);

        }
        else{
        await axios.post ("http://localhost:4000/api/productos", newProd);
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
                            Crear Producto<i className="material-icons"> </i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}