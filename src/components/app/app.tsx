import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RequestListPage from '../request-list-page';
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
          <Route path="/request" component={RequestListPage} />
          <Route path="/crossCheckSessions" component={CrossCheckSessions} />
        </Switch>
      </>
    );
  }
}

export default App;
