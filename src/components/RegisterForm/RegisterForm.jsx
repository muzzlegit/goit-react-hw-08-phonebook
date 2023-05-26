import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//TOASTS
import { successRegistrationToast } from 'utils/toasts';
//API
import { useSignupUserMutation } from 'redux/authSlice';
//SLICESS
import { setUser } from 'redux/userSlice';
//ICONS
import { FaUserTie } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
//STYLES
import {
  FormBox,
  FormTitle,
  FormSubTitle,
  Form,
  InputBox,
  Input,
  Button,
  ErrorBox,
} from './RegisterForm.styled';
import theme from 'theme';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInputChange, setisInputChange] = useState(false);
  const dispatch = useDispatch();
  const [signupUser, { isError, isSuccess }] = useSignupUserMutation();

  const onInputChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (key) {
      case 'name':
        setName(value);
        setisInputChange(true);
        break;
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
      const { data, error } = await signupUser({ name, email, password });
      if (data) {
        dispatch(setUser(data));
      }
      if (error) throw error;
    } catch (error) {
      setisInputChange(false);
    }
  };

  useEffect(() => {
    if (isSuccess) successRegistrationToast();
  }, [isSuccess]);

  return (
    <FormBox
      shadow={
        isError && !isInputChange
          ? theme.shadows.formShadowRed
          : theme.shadows.formShadow
      }
    >
      <FormTitle>Реєстрація</FormTitle>
      <FormSubTitle>Давай, зареєструємо твій профіль разом!</FormSubTitle>
      <Form onSubmit={onSubmit}>
        <InputBox>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="запиши своє ім'я"
            value={name}
            onChange={onInputChange}
          />
          <FaUserTie
            size="24px"
            style={{ position: 'absolute', top: '25%', left: '8px' }}
            color={theme.colors.acent}
          />
        </InputBox>
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
            placeholder="придумай надійний пароль"
            value={password}
            onChange={onInputChange}
          />
          <AiFillLock
            size="24px"
            style={{ position: 'absolute', top: '25%', left: '8px' }}
            color={theme.colors.acent}
          />
        </InputBox>

        <Button type="submit">Створити новий профіль</Button>
      </Form>
      <ErrorBox>
        {isError &&
          !isInputChange &&
          'Щось пішло не так... Давай спробуємо знову!'}
      </ErrorBox>
    </FormBox>
  );
};

export default RegisterForm;
