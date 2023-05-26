import { useState } from 'react';
import { useDispatch } from 'react-redux';
//API
import { useLoginUserMutation } from 'redux/authSlice';
//SLICESS
import { setUser } from 'redux/userSlice';
//ICONS
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
//STYLES
import theme from 'theme';
import {
  FormBox,
  FormTitle,
  FormSubTitle,
  Form,
  InputBox,
  Input,
  Button,
  ErrorBox,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInputChange, setisInputChange] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { isError }] = useLoginUserMutation();

  const onInputChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (key) {
      case 'email':
        setEmail(value);
        setisInputChange(true);
        break;
      case 'password':
        setPassword(value);
        setisInputChange(true);
        break;
      default:
        break;
    }
  };
  const onSubmit = async e => {
    try {
      e.preventDefault();
      const { data, error } = await loginUser({ email, password });
      if (data) {
        dispatch(setUser(data));
      }
      if (error) throw error;
    } catch (error) {
      setisInputChange(false);
    }
  };
  return (
    <FormBox
      shadow={
        isError && !isInputChange
          ? theme.shadows.formShadowRed
          : theme.shadows.formShadow
      }
    >
      <FormTitle>Авторизація</FormTitle>
      <FormSubTitle>Вітаю! Авторизуйся і почнемо працювати!</FormSubTitle>
      <Form onSubmit={onSubmit}>
        <InputBox>
          <Input
            type="email"
            name="email"
            required
            placeholder="вкажи електронну пошту"
            value={email}
            onChange={onInputChange}
          />
          <MdEmail
            size="24px"
            style={{ position: 'absolute', top: '25%', left: '8px' }}
            color={theme.colors.acent}
          />
        </InputBox>
        <InputBox>
          <Input
            type="tel"
            name="password"
            required
            placeholder="вкажи свій пароль"
            value={password}
            onChange={onInputChange}
          />
          <AiFillLock
            size="24px"
            style={{ position: 'absolute', top: '25%', left: '8px' }}
            color={theme.colors.acent}
          />
        </InputBox>

        <Button type="submit">Відкрити книгу контактів</Button>
      </Form>
      <ErrorBox>
        {isError &&
          !isInputChange &&
          'Щось пішло не так... Давай спробуємо знову!'}
      </ErrorBox>
    </FormBox>
  );
};
