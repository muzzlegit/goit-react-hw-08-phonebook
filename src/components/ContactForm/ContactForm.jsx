import { useState } from 'react';
import { nanoid } from 'nanoid';
//SLICES
import { useAddContactMutation } from 'redux/contactsSlice';
//ICONS
import { BsPersonPlus } from 'react-icons/bs';
//STYLES
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm({ contacstList }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();

  const onInputChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (
      contacstList.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('В тебе вже є такий контакт!');
      return;
    }
    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Ім'я
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="...запиши ім'я"
          value={name}
          onChange={onInputChange}
        />
      </Label>
      <Label>
        Номер
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="...запиши номер"
          value={number}
          onChange={onInputChange}
        />
      </Label>
      <Button type="submit">
        <BsPersonPlus size="30px" />
      </Button>
    </Form>
  );
}
