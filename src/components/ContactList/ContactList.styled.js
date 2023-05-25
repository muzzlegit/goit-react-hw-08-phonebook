import styled from '@emotion/styled';
import theme from 'theme';

export const List = styled.ul({
  padding: '20px',
  height: '600px',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  gap: '16px',
  overflowY: 'auto',
  borderRadius: '20px',

  boxShadow: theme.shadows.formShadow,
});
export const Item = styled.li({
  fontSize: '28px',
  display: 'flex',
  gap: '20px',
  fontFamily: theme.fontFamily.caveat,
  color: theme.colors.acent,
});
