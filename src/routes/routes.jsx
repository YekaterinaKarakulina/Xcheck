/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
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
  const { path, url } = useRouteMatch();
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
          <Route exact path="/cross-check-sessions" component={CrossCheckSessions} />
          <Route
            path="/cross-check-sessions/cross-check-session-form"
            component={CrossCheckSession}
          />
          <Route path="/review-request" component={ReviewRequest} />
          <Route path="/reviews" component={ReviewsListPage} />
          <Route path="/task-form" component={TaskForm} />
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
