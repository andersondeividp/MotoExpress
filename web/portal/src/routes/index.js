import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Classes from '../pages/Class';

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/classes" exact component={Classes} />
      </Switch>
    );
  }