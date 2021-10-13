import React, { Component } from 'react'
import axios from 'axios'



export default class CreateVenta extends Component {

    async componentDidMount() {

        const res = await axios.get("http://localhost:4000/api/ventas");
        console.log(res);
    }

    render() {
        return (
            <div>
               Crear Venta en proceso 
            </div>
        )
    }
}
