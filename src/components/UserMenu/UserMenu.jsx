import { useDispatch } from 'react-redux';
//API
import { useLogoutUserMutation } from 'redux/authApi';
//SLICES
import { setUserStatus } from 'redux/userSlice';
//SELECTORS
import { getUser } from 'redux/userSlice';
import { useSelector } from 'react-redux';
//STYLES
import { Img } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(getUser);
  const [logoutUser, { isError }] = useLogoutUserMutation();
  console.log('🚀 ~ error:', isError);
  const dispatch = useDispatch();

  const handleOnLogoutClick = async () => {
    let res = await logoutUser();
    if (!res.error?.status) dispatch(setUserStatus(false));
  };
  if (isError) return <h3>Ошибка</h3>;
  return (
    <div>
      <h2>Вітаю,</h2>
      <h2>{user.name}</h2>
      <Img src="" />
      <button type="button" onClick={handleOnLogoutClick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
