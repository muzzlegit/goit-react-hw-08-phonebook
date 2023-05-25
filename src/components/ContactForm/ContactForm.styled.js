import styled from '@emotion/styled';
import theme from 'theme';

export const Form = styled.form({
  marginBottom: '40px',
  padding: '20px',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '16px',
  borderRadius: '10px',
  color: theme.colors.acent,
  boxShadow: theme.shadows.formShadow,
});
export const Label = styled.label({
  color: theme.colors.black,
  fontSize: '28px',
});
export const Item = styled.li(
  {
    fontSize: '28px',
    display: 'flex',
    gap: '20px',
  },
  props => ({
    color: props.color,
  })
);
export const Input = styled.input({
  marginLeft: '10px',
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
export const Button = styled.button({
  padding: '10px 20px',
  height: '100%',
  border: 'none',
  borderRadius: '10px',
  background: 'transparent',
  boxShadow: theme.shadows.submitButtonShadow,
  fontSize: '16px',
  color: theme.colors.acent,
  cursor: 'pointer',
  '&:active': {
    boxShadow: theme.shadows.inputInletShadow,
  },
});
