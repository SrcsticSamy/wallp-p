import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { QueryClient, QueryClientProvider } from 'react-query';

import ReactGA from 'react-ga';


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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactGA.initialize('UA-174306047-3');

ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(

  <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();