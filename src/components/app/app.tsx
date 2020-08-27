import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';

import { HomePage, CartPage } from '../../pages';

import MainMenu from '../sidebar';

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
        </Switch>
      </>
    );
  }
}

export default App;
