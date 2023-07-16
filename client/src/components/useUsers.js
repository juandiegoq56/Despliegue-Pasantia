import { useCallback, useContext } from "react";
import Context from "./Usercontex";
import axios from 'axios';
import { compareSync } from 'bcryptjs';
export default function useUser() {
  const { jwt, setJWT } = useContext(Context);

  const login = useCallback(async () => {
    try {
      // Realizar la solicitud para obtener los datos de la base de datos
      const response = await axios.get('http://localhost:3001/usuarios');
      const data = response.data
      const name = localStorage.getItem("Nombre");
      const contra = localStorage.getItem("Contra");
      // Comparar los datos con las credenciales proporcionadas
      const user = data.find(user => user.Nombre === name );
      if (user) {
      const match = compareSync(contra, user.password);
     if(match)
      {
        // Iniciar sesión actualizando el estado del JWT en el contexto 
        setJWT('test');
        localStorage.setItem('jwt', 'test');
      }
      else {
        alert('Credenciales inválidas');
      }
      } 
      else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }, [setJWT]);

  const logout = useCallback(() => {
    setJWT(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('Nombre');
    localStorage.removeItem('Contra');
  }, [setJWT]);
  
  

  return {
    isLogged: Boolean(localStorage.getItem("jwt")),
    login,
    logout,
    
  };
}