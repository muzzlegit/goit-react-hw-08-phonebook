import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

//SELECTORS
import { getIsLogin, getToken, refreshUser } from 'redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRefreshUserQuery } from 'redux/authSlice';
//COMPONENTS
import Layout from './Layout/Layout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFoundPage from './NotFoundPage/NotFoundPage';
//PAGES
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

export default function App() {
  const isLogin = useSelector(getIsLogin);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const { data, isFetching } = useRefreshUserQuery(token, {
    skip: token && !isLogin ? false : true,
  });

  useEffect(() => {
    if (data?.name) dispatch(refreshUser(data));
  }, [dispatch, data]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              component={Contacts}
              redirectTo="/login"
              isFetching={isFetching}
            />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
