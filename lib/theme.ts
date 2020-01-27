import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    body1: {
      color: 'rgb(72, 72, 72)',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '28px',
    },
    body2: {
      color: '#333333',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '20px',
    },
    h3: {
      color: 'rgb(72, 72, 72)',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '1.375e',
    },
    h2: {
      fontSize: 46,
      color: '#333333',
      fontWeight: 800,
      lineHeight: '1.1304347826086956em',
      fontFamily: 'Circular Bold',
    },
    h1: {
      fontSize: 60,
      lineHeight: '64px',
      letterSpacing: '-2.5px',
      color: '#333333',
      fontWeight: 800,
      fontFamily: 'Circular Black',
    },
    h6: {
      fontSize: 12,
      fontWeight: 800,
      fontFamily: 'Circular Bold',
    },
    h4: {
      fontSize: 24,
      color: '#333333',
      fontWeight: 600,
      lineHeight: '1.25em',
    },
    h5: {
      fontSize: 24,
      fontWeight: 800,
      color: '#484848',
      lineHeight: '1.25em',
    },
    fontFamily: [
      'Circular Std Book',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
