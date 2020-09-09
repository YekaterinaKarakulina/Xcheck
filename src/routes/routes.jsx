import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReviewRequest from '../pages/reviewRequest';
import Reviews from '../pages/reviews';
import {
  CrossCheckSessionsTable,
  Check,
  CrossCheckSessionForm,
  GithubLogin,
  Requests,
} from '../pages';
import TaskForm from '../pages/tasks/task-form/task-form';
import TaskFormEdit from '../pages/tasks/task-form/task-form-edit';
import TasksTable from '../pages/tasks/tasks-table/tasks-table';

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
          <Route path="/review-request" component={ReviewRequest} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/task-form" component={TaskForm} />
          <Route path="/task-edit-form" component={TaskFormEdit} />
          <Redirect to="/reviews" />
          <Route exact path="/cross-check-sessions" component={CrossCheckSessionsTable} />
          <Route
            path="/cross-check-sessions/cross-check-session-form"
            component={CrossCheckSessionForm}
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
