import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import client from './services/client';
import GlobalStyle from './styles/global';
import Routes from './routes';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </ApolloProvider>
  );
}
