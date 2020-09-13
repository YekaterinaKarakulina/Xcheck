import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PageHeader } from 'antd';
import CrossCheckSessionFormCreation from '../../../components/cross-check-session-form';
import { postCrossCheckSession } from '../../../store/actions/cross-check-session';
import transformFormValuesToCrossCheckSessionObject from '../../../utils/cross-check-sessions';

const CrossCheckSessionForm = (props) => {
  const { isRedirectToTableReady, postCrossCheckSession } = props;

  const onSubmit = (values) => {
    const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
    postCrossCheckSession(crossCheckSession);
  };

  if (isRedirectToTableReady) {
    return <Redirect to="/cross-check-sessions/" />;
  }

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Create CrossCheck session" button />
      <CrossCheckSessionFormCreation onSubmit={onSubmit} submitButtonName="Create" />
    </div>
  );
};

CrossCheckSessionForm.propTypes = {
  isRedirectToTableReady: PropTypes.bool.isRequired,
  postCrossCheckSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessions }) => ({
  isRedirectToTableReady: crossCheckSessions.isRedirectToTableReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postCrossCheckSession: (crossCheckSession) =>
      dispatch(postCrossCheckSession(crossCheckSession)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionForm);
