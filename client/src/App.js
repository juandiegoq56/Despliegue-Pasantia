import React from 'react';
import { UserContextProvider } from './components/Usercontex';
import App1 from './Vistas/Register';
import App3 from './Vistas/login';
import Dashboard from './Vistas/Dashboard'
import App5 from './Vistas/Perfil'
import AppCard from './Vistas/AppCard';
import {ProtectedRoute} from "./components/middelware";
import {ProtectedRouteLogin} from "./components/middelware";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Header from './Vistas/headeraz';

function App() {
  return (
    <UserContextProvider>
     <Router>
      <Routes>
        
      <Route path="/home" element={<ProtectedRoute  redirectTo="/login"><Dashboard /></ProtectedRoute>} />
      <Route path="/login" element={<ProtectedRouteLogin  redirectTo="/Home"><App3 /></ProtectedRouteLogin>} />
      <Route path="/Register" element={<ProtectedRouteLogin  redirectTo="/Home"><App1 /></ProtectedRouteLogin>} />
      <Route path="/Perfil" element={<App5/>} />
      <Route path="/H" element={<ProtectedRouteLogin  redirectTo="/Home"><Header /></ProtectedRouteLogin>} />
        
        {/* Otras rutas */}
      </Routes>
    </Router>
    </UserContextProvider>
  );
}


export default App;