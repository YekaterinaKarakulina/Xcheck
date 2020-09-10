import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  CrossCheckSessionsTable,
  CrossCheckSessionForm,
  CrossCheckSessionEditForm,
  TasksTable,
  TaskForm,
  TaskFormEdit,
  Check,
  GithubLogin,
  Reviews,
  ReviewRequestsTable,
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
          <Route path="/review-requests" component={ReviewRequestsTable} />
          {/* <Route path="/review-request" component={ReviewRequest} /> */}
          <Route path="/reviews" component={Reviews} />
          <Route path="/task-form" component={TaskForm} />
          <Route path="/task-edit-form" component={TaskFormEdit} />
          {/* <Redirect to="/reviews" /> */}
          <Route exact path="/cross-check-sessions" component={CrossCheckSessionsTable} />
          <Route
            path="/cross-check-sessions/cross-check-session-form"
            component={CrossCheckSessionForm}
          />
          <Route
            path="/cross-check-sessions/cross-check-session-edit-form"
            component={CrossCheckSessionEditForm}
          />
        </>
      )}
    </Switch>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default React.memo(Routes);
