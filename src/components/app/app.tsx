import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequestListPage from '../request-list-page';
import ReviewRequest from '../../pages/reviewRequest';
import {
  HomePage,
  CartPage,
  CrossCheckSessions,
  TasksTable,
  ReviewsListPage,
  CrossCheckSession,
  GithubLogin,
} from '../../pages';

// import MainMenu from '../sidebar';

import './app.scss';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        {/* <MainMenu /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/tasks" component={TasksTable} />
          <Route path="/request" component={RequestListPage} />
          <Route path="/crossCheckSessions" component={CrossCheckSessions} />
          <Route path="/reviewRequest" component={ReviewRequest} />
          <Route path="/reviews" component={ReviewsListPage} />
          <Route path="/addCrossCheckSession" component={CrossCheckSession} />
          <Route path="/login" component={GithubLogin} />
        </Switch>
      </>
    );
  }
}

export default App;
