import { useState } from 'react';
import { useDispatch } from 'react-redux';
//API
import { useSignupUserMutation } from 'redux/authApi';
//SLICESS
import { setUser } from 'redux/userSlice';
//STYLES
import { Form, Label, Input, Button } from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldLogin, setshouldLogin] = useState(false);
  const dispatch = useDispatch();
  const [signupUser, { isSuccess, error, isError }] = useSignupUserMutation();

  const onInputChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
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
    const data = await signupUser({ name, email, password });
    dispatch(setUser(data));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Ім'я
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="...запиши ім'я"
          value={name}
          onChange={onInputChange}
        />
      </Label>
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
      <Label>
        Авторизуватись після реєстрації
        <Input
          type="checkbox"
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onClick={e => {
            setshouldLogin(e.target.checked);
          }}
        />
      </Label>
      <Button type="submit">Створити</Button>
    </Form>
  );
};

export default RegisterForm;
