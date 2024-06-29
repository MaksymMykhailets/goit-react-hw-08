import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  ...routeProps
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isLoggedIn && !isRefreshing ? (
    <Component {...routeProps} />
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
