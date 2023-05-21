import styled from '@emotion/styled';

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
