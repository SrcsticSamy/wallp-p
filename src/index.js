import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//MUI imports
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from '@mui/material/darkScrollbar';

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      },
    },
  },

  palette:{
    mode:'dark',

    primary:{
      main: '#31CB53'
    },
    secondary:{
      main: '#F6FF81'
    },
    text:{
      primary: '#D6E3E4'
    },
    background:{
      default: ' #000000',
    },
    
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);