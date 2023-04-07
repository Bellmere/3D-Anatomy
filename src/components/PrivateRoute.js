import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  guard,
}) => {
  const { user } = useAuth();
  return guard.handlePermission(user) ? Component : <Navigate to={redirectTo} /> ;
};
