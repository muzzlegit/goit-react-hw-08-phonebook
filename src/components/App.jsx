//COMPONENTS
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contactsSlice';
//STYLES
import { Section, Container, Content, Title } from './App.styled';

export default function App() {
  const { data: contacstList, isLoading } = useGetContactsQuery();

  return (
    <Section>
      <Container>
        <Content>
          <Title> Книга контактів</Title>
          <ContactForm contacstList={contacstList} />
          <Filter />
          <ContactList contacstList={contacstList} isLoading={isLoading} />
        </Content>
      </Container>
    </Section>
  );
}
