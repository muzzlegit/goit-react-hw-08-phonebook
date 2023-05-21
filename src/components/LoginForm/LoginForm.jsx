import { useState } from 'react';
import { useDispatch } from 'react-redux';
//API
import { useLoginUserMutation } from 'redux/authApi';
//SLICESS
import { setUser } from 'redux/userSlice';
//STYLES
import { Form, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const onInputChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (key) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    dispatch(setUser(data));
  };
  return (
    <>
      <h2>
        Тебе вітає книга контактів!
        <br />
        Будь ласка, авторизуйся або зареєструй нового користувача
      </h2>
      <Form onSubmit={onSubmit}>
        <Label>
          Пошта
          <Input
            type="tel"
            name="email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="...запиши номер"
            value={email}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Пароль
          <Input
            type="tel"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="...запиши номер"
            value={password}
            onChange={onInputChange}
          />
        </Label>

        <Button type="submit">Створити</Button>
      </Form>
    </>
  );
};
