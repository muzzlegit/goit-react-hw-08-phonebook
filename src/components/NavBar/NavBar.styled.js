import styled from '@emotion/styled';

export const Nav = styled.nav({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  gridArea: 'navbar',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const LinksBox = styled.div({
  width: '100%',

  gridArea: 'navbar',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
});
export const LinkTitle = styled.span({
  fontSize: '20px',
});
