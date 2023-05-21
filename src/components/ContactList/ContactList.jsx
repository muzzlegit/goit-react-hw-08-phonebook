import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
//SELECTORS
import { getFilter } from 'redux/filterSlice';
//SLICES
import { useGetContactsQuery } from 'redux/contactsSlice';
//COMPONENTS
import ContactItem from 'components/ContactItem/ContactItem';
//STYLE
import { List, Item } from './ContactList.styled';

export default function ContactList() {
  const { data: contacstList, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const [visibleContacts, setVisibleContacts] = useState(contacstList);

  useEffect(() => {
    const visibleContact = contacstList?.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    setVisibleContacts(visibleContact);
  }, [contacstList, filter]);

  if (isLoading)
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    );
  return (
    <List>
      {!visibleContacts?.length && (
        <Item color="black">
          {visibleContacts?.length
            ? 'В тебе немає такого контакту'
            : 'Здається, в тебе немає жодного знайомого :('}
        </Item>
      )}
      {visibleContacts?.map((contact, index) => {
        return <ContactItem key={index} contact={contact} index={index} />;
      })}
    </List>
  );
}
