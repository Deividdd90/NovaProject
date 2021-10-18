import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import CreateProd from './components/CreateProd';
import CreateVenta from './components/CreateVenta';
import SegVenta from './components/SegVenta';
import UserList from './components/usuarios';
import Prods from './components/producto';
import IniSession from "./components/auten/inisession";
import CreateUserFuncion from "./components/CreateUserFuncion";

function App() { 
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact > <IniSession/> </Route>
        <Route path="/usuario" component={UserList} />
        <Route path="/newUser" component={CreateUser} />
        <Route path="/edit/:id" component={CreateUser} />
        <Route path="/editp/:id" component={CreateProd} />
        <Route path="/editv/:id" component={CreateVenta} />
        <Route path="/productos" component={Prods} />
        <Route path="/newProd" component={CreateProd} />
        <Route path="/ventas" component={CreateVenta} />
        <Route path="/seg_ventas" component={SegVenta} />
        <Route path="/NewUserFuncion"><CreateUserFuncion/></Route>
      </div>
    </Router>
  );
}
export default App;
