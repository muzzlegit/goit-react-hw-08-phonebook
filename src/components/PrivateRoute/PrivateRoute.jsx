import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
//SELECTORS
import { getIsLogin } from 'redux/userSlice';
import { useSelector } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  isFetching,
}) => {
  const isLogin = useSelector(getIsLogin);
  const shouldRedirect = !isLogin && !isFetching;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  ccomponent: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
