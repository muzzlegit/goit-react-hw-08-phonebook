import styled from '@emotion/styled';
import theme from 'theme';

export const FormBox = styled.div(
  {
    margin: '0 auto',
    padding: '30px',
    width: '400px',
    borderRadius: '20px',
    color: theme.colors.acent,
  },
  props => ({
    boxShadow: props.shadow,
  })
);
export const FormTitle = styled.h2({
  marginBottom: '32px',
  fontSize: '28px',
  fontWeight: '600',
});
export const FormSubTitle = styled.p({
  marginBottom: '32px',
  fontSize: '20px',
  fontWeight: '600',
  fontFamily: theme.fontFamily.caveat,
});
export const Form = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '32px',
});
export const InputBox = styled.div({
  position: 'relative',
  display: 'flex',
  width: '100%',
});

export const Input = styled.input({
  padding: '15px 20px 15px 40px',
  width: '100%',
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
  background: 'transparent',
  fontSize: '16px',
  color: theme.colors.acent,
  boxShadow: theme.shadows.inputInletShadow,
});

export const Button = styled.button({
  marginTop: '24px',
  padding: '15px 20px',
  width: '100%',
  border: 'none',
  borderRadius: '10px',
  background: 'transparent',
  boxShadow: theme.shadows.submitButtonShadow,
  fontSize: '20px',
  color: theme.colors.acent,
  cursor: 'pointer',
  '&:active': {
    boxShadow: theme.shadows.inputInletShadow,
  },
});
export const ErrorBox = styled.div({
  marginTop: '24px',
  height: '30px',
  color: theme.colors.red,
  fontSize: '24px',
  fontFamily: theme.fontFamily.caveat,
});
