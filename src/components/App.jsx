import { Route, Routes } from 'react-router-dom';
//PAGES
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
//COMPONENTS
import Layout from './Layout/Layout';
//SELECTORS
import { getIsLogin } from 'redux/userSlice';
import { useSelector } from 'react-redux';

export default function App() {
  const isLogin = useSelector(getIsLogin);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isLogin ? <Contacts /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
