import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';


export default class prodList extends Component {

    state = {
        prods: []
    }

    componentDidMount() {
        this.getProd();
    }

    async getProd() {
        const res = await axios.get("http://localhost:4000/api/productos")
        this.setState({ prods: res.data })
    }

    prodDelete = async (prodid) => {

        if (window.confirm("¿Esta seguro de eliminar el producto?")) {
            await axios.delete("http://localhost:4000/api/productos/" + prodid);
            this.getProd();
        }
        else { }
    }

    render() {
        return (

            <div className="container">
                <table className="table  ">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Producto</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                    {this.state.prods.map(prod => (
                        <tbody key={prod._id}>
                            <tr className="table-primary">
                                <td>{prod.Producto}</td>
                                <td>{prod.Detalle}</td>
                                <td>{prod.Precio}</td>
                                <td>{prod.Estado}</td>
                                <td><button className="btn btn-danger" onClick={() => this.prodDelete(prod._id)}>
                                    Eliminar
                                </button>
                                <Link className="btn btn-secondary" to={"/editp/" + prod._id}>
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                    }
                </table>

                <div className="card-header d-flex justify-content-between">


                    <Link className="btn btn-info" to={"/newProd"} >
                        <p class="fw-bold">Nuevo producto</p>
                    </Link>
                </div>

            </div>

        )
    }


}