import { Outlet } from 'react-router-dom';
//COMPONENTS
import NavBar from 'components/NavBar/NavBar';
//STYLES
import {
  Container,
  Section,
  GridContainer,
  GridCell,
  Title,
} from './Layout.styled';

const Layout = () => {
  return (
    <main>
      <Section>
        <Container>
          <Title> Книга контактів</Title>
          <GridContainer>
            <GridCell gridArea="placeholder"></GridCell>
            <GridCell gridArea="content">
              <Outlet />
            </GridCell>
            <GridCell gridArea="navbar">
              <NavBar />
            </GridCell>
          </GridContainer>
        </Container>
      </Section>
    </main>
  );
};

export default Layout;
