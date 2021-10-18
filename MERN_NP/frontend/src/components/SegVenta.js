import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';


export default class ventaList extends Component {

    state = {
        ventas: []
    }

    componentDidMount() {
        this.getVenta();
    }

    async getVenta() {
        const res = await axios.get("http://localhost:4000/api/ventas")
        this.setState({ ventas: res.data })
    }

    ventaDelete = async (ventaid) => {

        if (window.confirm("¿Esta seguro de eliminar el registro de la venta?")) {
            await axios.delete("http://localhost:4000/api/ventas/" + ventaid);
            this.getVenta();
        }
        else { }
    }

    render() {
        return (

            <div className="container">
                <table className="table  ">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Id venta</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Valor total</th>
                            <th scope="col">Nombre cliente</th>
                            <th scope="col">Documento</th>
                            <th scope="col">Nombre vendedor</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                    {this.state.ventas.map(venta => (
                        <tbody key={venta._id}>
                            <tr className="table-primary">
                                <td>{venta._id}</td>
                                <td>{venta.fechaVenta}</td>
                                <td>{venta.prodVenta}</td>
                                <td>{venta.cantVenta}</td>
                                <td>{venta.precVenta}</td>
                                <td>{venta.totalVenta}</td>
                                <td>{venta.cliente}</td>
                                <td>{venta.documento}</td>
                                <td>{venta.vendedor}</td>


                                
                                <td><button className="btn btn-danger" onClick={() => this.ventaDelete(venta._id)}>
                                    Eliminar
                                </button>

                                <Link className="btn btn-secondary" to={"/editv/" + venta._id}>
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                    }
                </table>

                <div className="card-header d-flex justify-content-between">


                    <Link className="btn btn-info" to={"/ventas"} >
                        <p class="fw-bold">Nueva venta</p>
                    </Link>
                </div>

            </div>

        )
    }


}
