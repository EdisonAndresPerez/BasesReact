import { useAuth } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Si no está autenticado, redirige a login, pasando la ruta actual en el state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado, muestra el contenido
  return children;
};
