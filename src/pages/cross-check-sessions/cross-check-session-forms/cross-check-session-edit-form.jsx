import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PageHeader } from 'antd';
import CrossCheckSessionFormCreation from '../../../components/cross-check-session-form';
import { updateCrossCheckSession } from '../../../store/actions/cross-check-session';
import transformFormValuesToCrossCheckSessionObject from '../../../utils/cross-check-sessions';

const CrossCheckSessionEditForm = (props) => {
  const { initialValues, isRedirectToTableReady, updateCrossCheckSession } = props;

  const onSubmit = (values) => {
    const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
    updateCrossCheckSession(crossCheckSession);
  };

  if (isRedirectToTableReady) {
    return <Redirect to="/cross-check-sessions/" />;
  }

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Edit CrossCheck session" />
      <CrossCheckSessionFormCreation
        onSubmit={onSubmit}
        initialValues={initialValues}
        submitButtonName="Edit"
      />
    </div>
  );
};

CrossCheckSessionEditForm.propTypes = {
  initialValues: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isRedirectToTableReady: PropTypes.bool.isRequired,
  updateCrossCheckSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessions }) => ({
  initialValues: crossCheckSessions.formValues,
  isRedirectToTableReady: crossCheckSessions.isRedirectToTableReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCrossCheckSession: (crossCheckSession) =>
      dispatch(updateCrossCheckSession(crossCheckSession)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionEditForm);
