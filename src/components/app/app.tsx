import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';

import { HomePage, CartPage } from '../../pages';
import RequestListPage from '../request-list-page';

import './app.scss';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <DatePicker />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/request" component={RequestListPage} />
        </Switch>
      </>
    );
  }
}

export default App;
