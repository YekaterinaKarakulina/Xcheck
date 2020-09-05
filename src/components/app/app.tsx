import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../store/selectors/login';
import RequestListPage from '../request-list-page';
import ReviewRequest from '../../pages/reviewRequest';
import {
  HomePage,
  CartPage,
  CrossCheckSessions,
  TasksTable,
  ReviewsListPage,
  Check,
  CrossCheckSession,
  GithubLogin,
  TaskForm,
  Requests,
} from '../../pages';
import './app.scss';

interface Props {
  props?: any;
  isLoggedIn: Boolean;
}

class App extends React.PureComponent<Props, {}> {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/tasks" component={TasksTable} />
          <Route path="/check" component={Check} />
          <Route path="/requests/" component={Requests} />
          <Route path="/crossCheckSessions/" component={CrossCheckSessions} />
          <Route path="/reviewRequest" component={ReviewRequest} />
          <Route path="/reviews" component={ReviewsListPage} />
          {!isLoggedIn ? <Route path="/login" component={GithubLogin} /> : <Redirect to="/" />}
          <Route path="/addCrossCheckSession/" component={CrossCheckSession} />
          <Route path="/taskForm" component={TaskForm} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: getLoginStatus(state),
});

export default connect(mapStateToProps)(App);
