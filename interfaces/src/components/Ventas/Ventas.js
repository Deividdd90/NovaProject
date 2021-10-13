import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter}from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const data = [
  {id: 1,producto:"Camiseta",cantidad:1,valor:35000,estadoventa: "En ruta", idcliente:"1016114194",ncliente:"Jessica Grisales",fecha:"21/08/2021"},
            {id: 2,producto:"Polo",cantidad:2,valor:45000,estadoventa: "En fabrica",idcliente:"1315123456",ncliente:"Natalia Zuñiga",fecha:"22/08/2021"},
            {id: 3,producto:"Jogger",cantidad:2,valor:60000,estadoventa: "Entregado",idcliente:"41930198",ncliente:"Alfonso López",fecha:"23/08/2021"},
            {id: 4,producto:"Chaqueta",cantidad:1,valor:100000,estadoventa: "En embalaje",idcliente:"7361589",ncliente:"Alex Cruz",fecha:"24/08/2021"}
]

class Product extends React.Component {
  state= {
    data: data,
    modalActualizar: false,
    busqueda: '',
    form: {
      id: "",
      producto: "",
      cantidad: "",
      valor: "",
      estadoventa:"",
      idcliente: "",
      ncliente: "",
      fecha: "",

    },
  };
  onChange=async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value});
    this.filtrarElementos();
  }

  filtrarElementos=()=>{
    var search= data.filter(item=>{
      if(item.id.toString().includes(this.state.busqueda) ||
      item.ncliente.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.producto.toLowerCase().includes(this.state.busqueda) ||
      item.idcliente.toLowerCase().includes(this.state.busqueda)
      ){
        return item;
      }
    });
    this.setState({data:search});
  }

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].producto = dato.producto;
        arreglo[contador].cantidad = dato.cantidad;
        arreglo[contador].valor = dato.valor;
        arreglo[contador].estadoventa = dato.estadoventa;
        arreglo[contador].idcliente = dato.idcliente;
        arreglo[contador].ncliente = dato.ncliente;
        arreglo[contador].fecha = dato.fecha;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render(){
    return(
      <>
      <container className="cuerpo">
        <br/>
        <div className="barraBusqueda"/>
            <input type="text" placeholder="Buscar" className="textField"
              name="busqueda"
              value={this.state.busqueda}
              onChange={this.onChange}/>
             
        <div/>
        <br /><br />

  <table>
    <thead><tr><th>Id</th>
    <th>Producto</th>
    <th>Cantidad</th>
    <th>Valor</th>
    <th>Estado venta</th>
    <th>Id cliente</th>
    <th>Nombre cliente</th>
    <th>Fecha</th>
    <th>Acciones</th></tr></thead>
    <tbody>
      {this.state.data.map((dato)=>(
        <tr key={dato.id}>
          <td>{dato.id}</td>
          <td>{dato.producto}</td>
          <td>{dato.cantidad}</td>
          <td>{dato.valor}</td>
          <td>{dato.estadoventa}</td>
          <td>{dato.idcliente}</td>
          <td>{dato.ncliente}</td>
          <td>{dato.fecha}</td>
          <td><Button color="info" onClick={()=> this.mostrarModalActualizar(dato)}>
            Editar</Button>{"  "}
          <Button color= "success" onClick= {()=> this.eliminar(dato)}>Eliminar </Button>
          </td> </tr>

      ))}
    </tbody>
  </table>
  </container>
  <Modal isOpen={this.state.modalActualizar}>
       <ModalHeader>
         <div><h3>Editar registro</h3></div>
       </ModalHeader>
       <ModalBody>
       <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Valor: 
              </label>
              <input
                className="form-control"
                name="valor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.valor}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Estado venta: 
              </label>
              <input
                className="form-control"
                name="estadoventa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.estadoventa}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Id cliente: 
              </label>
              <input
                className="form-control"
                name="idcliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.idcliente}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Nombre cliente: 
              </label>
              <input
                className="form-control"
                name="ncliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ncliente}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Fecha: 
              </label>
              <input
                className="form-control"
                name="fecha"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>
       </ModalBody>
       <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
     </Modal> 
     
      </>)
  }
  
}

export default Product;



