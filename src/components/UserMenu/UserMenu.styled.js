import styled from '@emotion/styled';
import theme from 'theme';

export const MenuBox = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  boxSizing: 'border-box',
  padding: '10px',
  borderRadius: '20px',
  boxShadow: theme.shadows.formShadow,
});
export const MenuTitle = styled.h2({
  fontSize: '24px',
  fontFamily: theme.fontFamily.caveat,
  color: theme.colors.acent,
});
export const Img = styled.div(
  {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    border: `1px solid white`,
    background: theme.img.avatar,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  props => ({
    scale: props.hover.scale,
    boxShadow: props.hover.shadow,
  })
);
export const Button = styled.button({
  marginTop: '24px',
  padding: '4px 10px',
  width: '100%',
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
export const ErrorBox = styled.div({
  color: theme.colors.red,
  fontSize: '24px',
  fontFamily: theme.fontFamily.caveat,
});
