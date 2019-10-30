import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import SuggestTopic from '../../components/SuggestTopic';
import TopicList from '../../components/TopicList';

export default function Home() {
  return (
    <Layout>
      <Header />

      <main>
        <SuggestTopic />
        <TopicList />
      </main>
    </Layout>
  );
}
