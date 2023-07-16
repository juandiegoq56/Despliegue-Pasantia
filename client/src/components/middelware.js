import { Navigate, Outlet } from "react-router-dom";
import useUser from './useUsers';

export const ProtectedRoute = ({ children, redirectTo }) => {
  const { isLogged } = useUser();

  if (isLogged) {
    return children || <Outlet />;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};
export const ProtectedRouteLogin = ({ children, redirectTo }) => {
    const { isLogged } = useUser();
  
    if (!isLogged) {
      return children || <Outlet />;
    } else {
      return <Navigate to={redirectTo} replace />;
    }
  };
export default {ProtectedRoute,ProtectedRouteLogin};