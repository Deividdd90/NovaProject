import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from "../Productos/Product";
import User from "../Usuarios/User";
import Ventas from "../Ventas/Ventas.js";


function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="btn-group">
      <Link to = "/" className = "btn btn-dark">
      Inicio
      </Link>
      <Link to = "/Productos" className = "btn btn-dark">
      Productos
      </Link><Link to = "/Ventas" className = "btn btn-dark">
      Seguimiento de Ventas
      </Link><Link to = "/Usuarios" className = "btn btn-dark">
      Usuarios
      </Link>


      </div>

      <hr/>
      <Switch>
      <Route path="/" exact>
          Inicio
        </Route>
        <Route path="/Productos">
         <Product/> 

        </Route>
        <Route path="/Ventas">
          <Ventas/>
        </Route>
        <Route path="/Usuarios">
          <User/>
        </Route>
      </Switch>
      
    </div>

    </Router>
    
  );
}

export default App;