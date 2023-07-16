import App2 from './Header';
import Header from './headeraz';
import '../css/Login.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import useUser from '../components/useUsers';
import { useEffect } from 'react';


const App3 = () => {
   
    const[Nombre,setNombre]=useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login,isLogged}=useUser()
    useEffect(()=>{
      if(isLogged)navigate('/Home')
    },[isLogged,navigate])
    const handleSubmit = (event) => {
      event.preventDefault();
      // lógica para autenticar al usuario con el email y la contraseña ingresados
      
       login()
       localStorage.setItem("Nombre", Nombre);
       localStorage.setItem("Contra", password);
    };
  return (
  

<>
  
    <Header />
  
  <body class="vista1">
  <div className="container1">
    <div className="card1-body">
      <div className="centrar">
        
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
            <span id="nombre-label" className="input-group-text">Nombre</span>

              <input
                type="text"
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
                className="form-control"
                placeholder="Ingrese su Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="nombre-label">Contraseña</span>
              <input
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
                placeholder="Ingrese su Contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className='boton'>
            <button className="btn btn-success">Login</button>
            </div>
          </form>
          
        
      </div>
      
    </div>
    <h5  className="blue" id="id-company-text">© Azteca Comunicaciones Colombia-2023</h5>

  </div>
  </body>
</>

    
    

  );
};

export default App3;
