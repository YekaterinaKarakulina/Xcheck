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
  TaskFormEdit,
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
          <Route path="/cross-check-sessions" component={CrossCheckSessions} />
          <Route path="/review-request" component={ReviewRequest} />
          <Route path="/reviews" component={ReviewsListPage} />
          <Route path="/add-cross-check-sessions" component={CrossCheckSession} />
          <Route path="/task-form" component={TaskForm} />
          <Route path="/task-edit-form" component={TaskFormEdit} />
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
