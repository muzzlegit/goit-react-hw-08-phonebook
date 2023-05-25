import styled from '@emotion/styled';
import theme from 'theme';

export const Item = styled.li({
  fontSize: '28px',
  display: 'flex',
  gap: '20px',
  color: theme.colors.acent,
});
export const Button = styled.button(
  {
    border: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  props => ({
    color: props.color,
  })
);
