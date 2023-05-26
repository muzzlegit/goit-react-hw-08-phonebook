import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Dna } from 'react-loader-spinner';
//TOASTS
import { addContactToast, doubleContactToast } from 'utils/toasts';
//SLICES
import { useAddContactMutation } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
//STYLES
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isSuccess, isLoading }] = useAddContactMutation();
  const { data: contacstList } = useGetContactsQuery();

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
      doubleContactToast();
      return;
    }
    addContact({ id: nanoid(), name, number });

    setName('');
    setNumber('');
  };
  useEffect(() => {
    if (isSuccess) addContactToast();
  }, [isSuccess]);

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Ім'я:
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
        Номер:
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
        {isLoading ? (
          <Dna
            visible={true}
            height="36"
            width="36"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
          />
        ) : (
          'Додати контакт'
        )}
      </Button>
    </Form>
  );
}
