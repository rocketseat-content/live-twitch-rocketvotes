import React from 'react';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';
import Header from './components/Header';
import SuggestTopic from './components/SuggestTopic';
import TopicList from './components/TopicList';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Header />

        <main>
          <SuggestTopic />
          <TopicList />
        </main>
      </Layout>
    </>
  );
}
