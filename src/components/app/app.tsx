import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';

import { HomePage, CartPage, TasksTable } from '../../pages';

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
          <Route path="/tasks" component={TasksTable} />
        </Switch>
      </>
    );
  }
}

export default App;
