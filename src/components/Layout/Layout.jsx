import { Outlet } from 'react-router-dom';
//COMPONENTS
import NavBar from 'components/NavBar/NavBar';
//STYLES
import { Section, Container, Content, Title } from './Layout.styled';

const Layout = ({ isLogin, setIsLogin }) => {
  return (
    <Section>
      <Container>
        <Content>
          <Title> Книга контактів</Title>
          <Outlet />
        </Content>
        <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
      </Container>
    </Section>
  );
};

export default Layout;
