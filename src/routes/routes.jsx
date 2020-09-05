import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReviewRequest from '../pages/reviewRequest';
import {
  CrossCheckSessions,
  TasksTable,
  ReviewsListPage,
  Check,
  CrossCheckSession,
  GithubLogin,
  TaskForm,
  Requests,
} from '../pages';

const Routes = ({ isLoggedIn }) => {
  return (
    <Switch>
      {!isLoggedIn ? (
        <>
          <Route path="/login" component={GithubLogin} />
          <Redirect to="/login" />
        </>
      ) : (
        <>
          <Route path="/tasks" component={TasksTable} />
          <Route path="/check" component={Check} />
          <Route path="/requests" component={Requests} />
          <Route path="/crossCheckSessions" component={CrossCheckSessions} />
          <Route path="/reviewRequest" component={ReviewRequest} />
          <Route path="/reviews" component={ReviewsListPage} />
          <Route path="/addCrossCheckSession" component={CrossCheckSession} />
          <Route path="/taskForm" component={TaskForm} />
          <Redirect to="/reviews" />
        </>
      )}
    </Switch>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default React.memo(Routes);
