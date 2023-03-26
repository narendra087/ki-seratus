import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Custom chakra theme
const theme = extendTheme({
  colors: {
    primary: {
      100: '#F9F7F7',
      200: '#DBE2EF',
      300: '#3F72AF',
      400: '#112D4E',
    },
    secondary: {
      100: '#F2E9D0',
      200: '#EACEB4',
      300: '#E79E85',
      400: '#BB5A5A',
    }
  },
  styles: {
    global: {
      body: {
        bg: '#FFFDFA',
        color: '#343434',
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ChakraProvider theme={theme}>
              <App />
          </ChakraProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
