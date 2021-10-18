import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateVenta extends Component {

    state = {
        fechaVenta:new Date(),
        cantVenta:"",
        precVenta:"",
        totalVenta:"",
        cliente:"",
        documento:"",
        vendedor:"",                
        prodSelected: "",
        prods: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/productos');
        if (res.data.length > 0) {
            this.setState({
                prods: res.data.map(prod => prod.Producto),
                prodSelected: res.data[0].Producto
            })
        }
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:4000/api/ventas/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                fechaVenta:new Date(res.data.fechaVenta),
                cantVenta:res.data.cantVenta,
                precVenta:res.data.precVenta,
                totalVenta:res.data.totalVenta,
                cliente:res.data.cliente,
                documento:res.data.documento,
                vendedor:res.data.vendedor,                
                prodSelected: res.data.prodVenta,
                editing: true,
                _id: res.data._id
               
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updateVenta = {
                fechaVenta:this.state.fechaVenta,
                prodVenta:this.state.prodSelected,
                cantVenta:this.state.cantVenta,
                precVenta:this.state.precVenta,
                totalVenta:this.state.totalVenta,
                cliente:this.state.cliente,
                documento:this.state.documento,
                vendedor:this.state.vendedor
            };
            await axios.put('http://localhost:4000/api/ventas/' + this.state._id, updateVenta);
        } else {
            const newVenta = {
                fechaVenta:this.state.fechaVenta,
                prodVenta:this.state.prodSelected,
                cantVenta:this.state.cantVenta,
                precVenta:this.state.precVenta,
                totalVenta:this.state.totalVenta,
                cliente:this.state.cliente,
                documento:this.state.documento,
                vendedor:this.state.vendedor
            };
            axios.post('http://localhost:4000/api/ventas', newVenta);
        }
        window.location.href = '/seg_ventas';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = fechaVenta => {
        this.setState({ fechaVenta });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear venta</h4>
                    <form onSubmit={this.onSubmit}>
                        
                        {/* Fecha venta*/}
                        <div className="form-group">
                            <DatePicker 
                            className="form-control" 
                            selected={this.state.fechaVenta} 
                            onChange={this.onChangeDate} />
                        </div>
                        {/* Selecciona producto */}
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.prodSelected}
                                onChange={this.onInputChange}
                                name="prodSelected"
                                required>                                
                                {this.state.prods.map(prod => (                                        
                                        <option key={prod} value={prod}>{prod}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* otras entradas */}

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese la cantidad a vender"
                                onChange={this.onInputChange}
                                name="cantVenta"
                                value={this.state.cantVenta}
                                required />
                        </div>
                        
                        {/* traer precio del producto selecionado */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el Precio"
                                onChange={this.onInputChange}
                                name="precVenta"
                                value={this.state.precVenta}
                                required />
                        </div>

                        {/*cera funco operacion cant y precio */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el valor total de la venta"
                                onChange={this.onInputChange}
                                name="totalVenta"
                                value={this.state.totalVenta}
                                required />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el nombre del cliente"
                                onChange={this.onInputChange}
                                name="cliente"
                                value={this.state.cliente}
                                required />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el documento del cliente"
                                onChange={this.onInputChange}
                                name="documento"
                                value={this.state.documento}
                                required />
                        </div>
                        
                        {/*selecionar usuario */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el nombre del vendedor"
                                onChange={this.onInputChange}
                                name="vendedor"
                                value={this.state.vendedor}
                                required />
                        </div>
                        <button className="btn btn-primary">
                            Guardar <i className="material-icons"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
