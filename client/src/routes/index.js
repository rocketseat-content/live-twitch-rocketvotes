import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import GithubCallback from '../pages/GithubCallback';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/github/callback" exact component={GithubCallback} />
    </Switch>
  );
}
