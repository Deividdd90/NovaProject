import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class prodList extends Component {

    state = {
        prods:[]
    }
    
    componentDidMount() {    
        this.getProd();
        }

    async getProd(){
        const res = await axios.get("http://localhost:4000/api/productos")
        this.setState({prods:res.data})
    }
    
    prodDelete = async (prodid) => {
        console.log(prodid);
    await axios.delete("http://localhost:4000/api/productos/" +prodid);
    this.getProd();    
    }

   

    render() {
        return (
            <div className="row">
                {
                    this.state.prods.map (prod =>(
                        <div className="col-md-4 p-2" key={prod._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                
                                    <h5>{prod.Producto}</h5>
                                    
                                    <Link className="btn btn-secondary" to = {"/edit/" + prod._id} >
                                Editar
                                </Link>
                                
                                

                                </div>
                                <div className="card-body">
                                    
                                    <p>Detalle: {prod.Detalle}</p>
                                    <p>Precio: {prod.Precio}</p>
                                    <p>Estado: {prod.Estado}</p>
                                </div>
                                <div className="card-footer" >
                                    <button className="btn btn-danger" onClick={()=> this.prodDelete(prod._id)}>
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