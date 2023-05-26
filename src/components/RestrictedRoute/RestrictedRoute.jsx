import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
//SELECTORS
import { getIsLogin } from 'redux/userSlice';
import { useSelector } from 'react-redux';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(getIsLogin);

  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  ccomponent: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
