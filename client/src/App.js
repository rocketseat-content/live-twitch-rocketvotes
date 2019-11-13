import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './config/reactotron';

import client from './services/client';
import GlobalStyle from './styles/global';
import Routes from './routes';

import { store, persistor } from './store';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Routes />
            <GlobalStyle />
            <ToastContainer />
          </Router>
        </PersistGate>
      </StoreProvider>
    </ApolloProvider>
  );
}
