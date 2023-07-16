import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import './css/MenuHamburguesa.css';

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="hamburguesa" onClick={toggleMenu}>
          <div className="linea"></div>
          <div className="linea"></div>
          <div className="linea"></div>
        </div>
        <ul className="opciones">
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
    );
  };
  
  export default MenuHamburguesa;