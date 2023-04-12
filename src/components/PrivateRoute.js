import { Navigate } from 'react-router-dom';
import { observer } from "mobx-react-lite"

import { StoreContext, useContext } from '../context';

export const PrivateRoute = observer(({
  component: Component,
  redirectTo = '/',
  guard,
}) => {
  const { authUser } = useContext(StoreContext);
  return guard.handlePermission(authUser) ? Component : <Navigate to={redirectTo} /> ;
});
