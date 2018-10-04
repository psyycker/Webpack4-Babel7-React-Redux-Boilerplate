import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './containers/counter-display';
import NotFound from './containers/NotFound';
import CounterLayout from './containers/counter-incrementer';
import Header from './components/Header/Header';


export default function () {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" name="home" component={AppLayout} />
          <Route path="/counter" component={CounterLayout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
