import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div({
  marginBottom: '40px',
  width: '100%',
  color: theme.colors.acent,
});
export const Label = styled.label({
  color: theme.colors.black,
  fontSize: '32px',
});
export const Input = styled.input({
  margin: '0 10px',
  padding: '4px 8px 0 8px',
  width: '200px',
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
  backgroundColor: 'transparent',
  fontFamily: theme.fontFamily.caveat,
  color: theme.colors.acent,
  boxShadow: theme.shadows.inputInletShadow,
  fontSize: '26px',
});
