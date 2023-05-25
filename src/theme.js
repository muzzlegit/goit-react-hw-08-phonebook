import avatar from './assets/images/avatar.PNG';
const theme = {
  colors: {
    primary: '#3e4e55',
    primaryLight: '#4b5c63',
    primaryDark: '#36464d',
    acent: '#4169e1',
    text: '#202124',
    // acent: '#24c1e0',
    white: '#FFF',
    warm: '#DBC7C9',
    pink: '#ffa5a9',
    pGreen: '#88A795',
    grey: 'rgb(175, 164, 164)',
    red: '#DC2626',
    green: '#00ea00',
  },
  fontFamily: {
    caveat: '"Caveat", cursive',
  },
  img: {
    avatar: `url(${avatar})`,
  },
  shadows: {
    formShadow: '15px 15px 20px rgba(0, 0, 0, .1), -15px -15px 20px #fffb ',
    formShadowRed: '5px 5px 10px #DC2626',
    inputInletShadow:
      'inset 5px 5px 10px rgba(0, 0, 0, .1), inset -5px -5px 10px #fff',
    submitButtonShadow: '5px 5px 10px rgba(0, 0, 0, .1), -5px -5px 10px #fff',
    hoverButtonShadow: ' 5px 5px 10px #fff, -5px -5px 10px rgba(0, 0, 0, .1)',
  },
  gridTemplateColumns: {
    layout: '200px auto 200px',
  },
  gridTemplateRows: {
    layout: 'repeat(1, 1fr)',
  },
  gridTemplateAreas: {
    layout: "'placeholder content navbar'",
  },
};
export default theme;
