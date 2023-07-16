import '../css/App.css';
import { useState } from 'react';
import Axios from 'axios';
import Header from './headeraz';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hashSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { useCallback, useContext } from "react";
import axios from 'axios';
function App1() {
  const [Nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Apellido, setApellido] = useState('');
  const [imagen, setImagen] = useState(null);
  const saltRounds = 5; // Número de rondas de hashing (mayor número = mayor seguridad pero mayor tiempo de ejecución)
  const navigate = useNavigate();
  
  const password1 = hashSync(password, saltRounds);
  const handleFileChange = (event) => {
    setImagen(event.target.files[0]);
  };

  
  
  const validateEmail = (email) => {
    // Expresión regular para validar la dirección de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  const val=useCallback(async (nombre) => {
      const response = await axios.get('http://localhost:3001/usuarios');
      const data = response.data
      const user = data.find(user => user.Nombre === nombre );
      

      return user
    })
  
  const add = () => {
    if (validateEmail(Email) ) {
      Axios.post('http://localhost:3001/create', {
        Nombre: Nombre,
        Apellido:Apellido,
        password: password1,
        Email: Email,
        
        
      })
        .then(() => {
          
          
          navigate('/Login');
        })
        .catch((error) => {
          console.log('Error al registrar:', error);
        });
    } else {
      alert('Dirección de correo electrónico inválida');
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('imagen', imagen);

    axios.post('http://localhost:3001/create', formData)
      .then((res) => {
        console.log(res.data+'res');
      })
      .catch(console.error);
  };
  return (
    <>
  <body class="vista2">
    <Header />
 
    <div class="container2">
      

      <div className="App">
      

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre
            </span>
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
            <span className="input-group-text" id="basic-addon1">
              Apellidos
            </span>
            <input
              type="text"
              onChange={(event) => {
                setApellido(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su Apellidos"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Contraseña
            </span>
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
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su Correo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
          
        </div>
          <button className="btn btn-success" onClick={add}>
            Registrar
          </button>
          
      </div>

      <div class="card-footer text-muted" id='id-company-text1'>© Azteca Comunicaciones Colombia-2023</div>
    </div>
    
    </body>
    </>
  );
}

export default App1;
