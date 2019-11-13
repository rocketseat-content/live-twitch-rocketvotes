import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import TopicList from '../../components/TopicList';

export default function Home({ history }) {
  return (
    <Layout>
      <Header />

      <main>
        <Sidebar />
        <TopicList history={history} />
      </main>
    </Layout>
  );
}
