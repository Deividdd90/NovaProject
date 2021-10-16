import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import CreateProd from './components/CreateProd';
import CreateVenta from './components/CreateVenta';
import CreateSventa from './components/CreateSventa';
import userList from './components/usuarios';
import Prods from './components/producto';

function App() {
 
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact></Route>
        <Route path="/usuario" component={userList} />
        <Route path="/newUser" component={CreateUser} />
        <Route path="/edit/:id" component={CreateUser} />
        <Route path="/editp/:id" component={CreateProd} />
        <Route path="/productos" component={Prods} />
        <Route path="/newProd" component={CreateProd} />
        <Route path="/ventas" component={CreateVenta} />
        <Route path="/seg_ventas" component={CreateSventa} />
      </div>
    </Router>
  );

}

export default App;
