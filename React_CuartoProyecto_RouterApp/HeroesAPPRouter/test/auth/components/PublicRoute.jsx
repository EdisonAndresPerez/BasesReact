import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    // Si está autenticado, redirige a la raíz
    return <Navigate to="/" replace />;
  }

  // Si NO está autenticado, muestra el contenido (por ejemplo, LoginPage)
  return children;
};
