
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import "../css/Header.css";
import useUser from '../components/useUsers';
const App2 = () => {
  //const isLogged=false;
  const [isOpen, setIsOpen] = useState(false);
  const{isLogged,logout}=useUser()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logout(); // Llama a la función logout del hook useUser para cerrar la sesión y borrar el valor del localStorage
  };
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isOpen ? 'open' : ''}`}>
      
      <div className="container-fluid">
      
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={isOpen ? 'true' : 'false'}>
                Dropdown
              </a>
              <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            {isLogged ? (
            <a href="/login" onClick={handleLogout} class="boton1" >Cerrar sesión</a>
            
            ): (
              <a href="/login" class="boton1" >Iniciar sesión</a>
            )}
            {isLogged ? null : <a href="/Register" class="boton1" >Registrarse</a>}
           
           
           
            
          </form>
        
        </div>
      </div>
    </nav>
    
  );
};

export default App2;

