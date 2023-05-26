import { NavLink } from 'react-router-dom';
//SELECTORS
import { getIsLogin } from 'redux/userSlice';
import { useSelector } from 'react-redux';
//COMPONENTS
import UserMenu from 'components/UserMenu/UserMenu';
//STYLES
import theme from 'theme';
import { Nav, LinkTitle, LinksBox } from './NavBar.styled';

const NavBar = () => {
  const isLogin = useSelector(getIsLogin);

  return (
    <Nav>
      <LinksBox>
        {isLogin ? (
          <NavLink
            to="/contacts"
            style={({ isActive }) => {
              return {
                boxSizing: 'border-box',
                width: '100%',
                padding: '4px 10px 8px 10px',
                fontSize: '30px',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: isActive ? theme.colors.acent : theme.colors.grey,
                borderRadius: isActive ? '10px' : 'none',
                boxShadow: isActive ? theme.shadows.submitButtonShadow : 'none',
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
                  boxSizing: 'border-box',
                  width: '100%',
                  padding: '4px 10px 8px 10px',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: isActive ? theme.colors.acent : theme.colors.grey,
                  borderRadius: isActive ? '10px' : 'none',
                  boxShadow: isActive
                    ? theme.shadows.submitButtonShadow
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
                  boxSizing: 'border-box',
                  width: '100%',
                  padding: '4px 10px 8px 10px',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: isActive ? theme.colors.acent : theme.colors.grey,
                  borderRadius: isActive ? '10px' : 'none',
                  boxShadow: isActive
                    ? theme.shadows.submitButtonShadow
                    : 'none',
                };
              }}
            >
              <LinkTitle>Регістрація</LinkTitle>
            </NavLink>
          </>
        )}
      </LinksBox>
      {isLogin ? <UserMenu /> : null}
    </Nav>
  );
};

export default NavBar;
