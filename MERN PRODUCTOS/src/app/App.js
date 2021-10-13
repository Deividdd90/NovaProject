import { render } from 'react-dom';
import React, {Component} from "react";

class App extends Component {

  constructor() {
    super();
    this.state = {
      producto: '',
      detalle: '',
      precio: '',
      estado: '',
      _id: '',
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addTask(e) {
    e.preventDefault();
    if(this.state._id) {
      fetch(`/api/tasks/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          producto: this.state.producto,
          detalle: this.state.detalle,
          precio: this.state.precio,
          estado: this.state.estado,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Producto actualizado'});
          this.setState({_id: '', producto: '', detalle: '', precio:'', estado: ''});
          this.fetchTasks();
        });
    } else {
      fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({html: 'Producto guardado'});
          this.setState({ producto: '', detalle: '', precio:'', estado:''});
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

  }

  deleteTask(id) {
    if(confirm('¿Estas seguro que deseas eliminarlo?')) {
      fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({html: 'Producto eliminado'});
          this.fetchTasks();
        });
    }
  }

  editTask(id) {
    fetch(`/api/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          producto: data.producto,
          detalle: data.detalle,
          precio: data.precio,
          estado: data.estado,
          _id: data._id
        });
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        this.setState({tasks: data});
        console.log(this.state.tasks);
      });
  }

  render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Productos</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="producto" onChange={this.handleChange} value={this.state.producto} placeholder= "Producto" cols="30" rows="10" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="detalle" onChange={this.handleChange} value={this.state.detalle} type="text" placeholder="Detalle" autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="precio" onChange={this.handleChange} value={this.state.precio} type="text" placeholder="Precio" autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="estado" onChange={this.handleChange} value={this.state.estado} type="text" placeholder="Estado" autoFocus/>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">
                      Agregar 
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
              <thead><tr>
              <th>Producto</th>
              <th>Detalle</th>
              <th>Precio</th>
              <th>Estado</th>
              </tr>
                </thead>
                <tbody>
                  { 
                    this.state.tasks.map(task => {
                      return (
                        <tr key={task._id}>
                          <td>{task.producto}</td>
                          <td>{task.detalle}</td>
                          <td>{task.precio}</td>
                          <td>{task.estado}</td>
                          <td>
                            <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4">
                              <i className="material-icons">delete</i> 
                            </button>
                            <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;