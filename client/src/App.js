import React from 'react';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Header />

        <main />
      </Layout>
    </>
  );
}
