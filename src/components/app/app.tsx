import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, CartPage, CrossCheckSessions } from '../../pages';

import MainMenu from '../sidebar';

import './app.scss';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/crossCheckSessions" component={CrossCheckSessions} />
        </Switch>
      </>
    );
  }
}

export default App;
