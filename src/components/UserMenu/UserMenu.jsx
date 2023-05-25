import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//API
import { useLogoutUserMutation } from 'redux/authSlice';
//SLICES
import { setUserStatus } from 'redux/userSlice';
import { getUser, removeUser } from 'redux/userSlice';
//SELECTORS

import { useSelector } from 'react-redux';
//STYLES
import theme from 'theme';
import { MenuBox, MenuTitle, Img, Button, ErrorBox } from './UserMenu.styled';
const hoverStyles = {
  isHover: {
    scale: '1.1',
    shadow: theme.shadows.submitButtonShadow,
  },
  notHover: {
    scale: '1',
    shadow: theme.shadows.inputInletShadow,
  },
};

const UserMenu = () => {
  const [isHover, setisHover] = useState(hoverStyles.notHover);
  const user = useSelector(getUser);
  const [logoutUser, { isError }] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogoutClick = async () => {
    let res = await logoutUser();
    if (res.data) {
      dispatch(removeUser());
      navigate('/login');
    }
  };

  return (
    <MenuBox>
      <MenuTitle>Вітаю, {user.name} !</MenuTitle>
      <Img hover={isHover} />
      <Button
        type="button"
        onMouseEnter={() => {
          setisHover(hoverStyles.isHover);
        }}
        onMouseLeave={() => {
          setisHover(hoverStyles.notHover);
        }}
        onClick={handleOnLogoutClick}
      >
        Вийти
      </Button>
      <ErrorBox>{isError ? 'Не вдалося вийти, спробуй ще раз!' : ''}</ErrorBox>
    </MenuBox>
  );
};

export default UserMenu;
