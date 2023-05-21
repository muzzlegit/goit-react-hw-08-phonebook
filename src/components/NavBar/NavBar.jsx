import { NavLink } from 'react-router-dom';
//SELECTORS
import { getIsLogin } from 'redux/userSlice';
import { useSelector } from 'react-redux';
//COMPONENTS
import UserMenu from 'components/UserMenu/UserMenu';
//STYLES
import theme from 'theme';
import { Nav, LinkTitle } from './NavBar.styled';

const NavBar = () => {
  const isLogin = useSelector(getIsLogin);

  return (
    <Nav>
      {isLogin ? (
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              display: 'block',
              fontSize: '30px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: isActive ? theme.colors.green : theme.colors.blue,
            };
          }}
        >
          <LinkTitle>Контакти</LinkTitle>
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                display: 'block',
                fontSize: '30px',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: isActive ? theme.colors.green : theme.colors.blue,
                borderBottom: isActive
                  ? `2px solid ${theme.colors.green}`
                  : 'none',
              };
            }}
          >
            <LinkTitle>Авторизація</LinkTitle>
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) => {
              return {
                display: 'block',
                fontSize: '30px',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: isActive ? theme.colors.green : theme.colors.blue,
                borderBottom: isActive
                  ? `2px solid ${theme.colors.green}`
                  : 'none',
              };
            }}
          >
            <LinkTitle>Регістрація</LinkTitle>
          </NavLink>
        </>
      )}
      {isLogin ? <UserMenu /> : null}
    </Nav>
  );
};

export default NavBar;
