import React from 'react';
import './App.css';

import Main from './components/Main/'
import Artist from './components/Artist/'

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/artist" exact component={Artist} />
      </Switch>
  );
}

export default App;
