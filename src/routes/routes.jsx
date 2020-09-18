import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  CrossCheckSessionsTable,
  CrossCheckSessionLayout,
  TasksTable,
  TaskLayout,
  Check,
  Login,
  Reviews,
  ReviewRequestsTable,
  ReviewRequestForm,
} from '../pages';

const Routes = ({ isLoggedIn }) => {
  return (
    <Switch>
      {!isLoggedIn ? (
        <>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </>
      ) : (
        <>
          <Route exact path="/tasks/" component={TasksTable} />
          <Route path="/tasks/:id" component={TaskLayout} />
          <Route path="/check" component={Check} />
          <Route path="/review-requests" component={ReviewRequestsTable} />
          <Route path="/review-request-form" component={ReviewRequestForm} />
          <Route path="/reviews/" component={Reviews} />
          <Route exact path="/cross-check-sessions/" component={CrossCheckSessionsTable} />
          <Route path="/cross-check-sessions/:id" component={CrossCheckSessionLayout} />
          <Redirect to="/reviews/" />
        </>
      )}
    </Switch>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default React.memo(Routes);
