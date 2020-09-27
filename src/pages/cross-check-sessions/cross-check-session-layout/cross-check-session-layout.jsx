import React from 'react';
import PropTypes from 'prop-types';
import { CrossCheckSessionForm, CrossCheckSessionEditForm } from '../cross-check-session-forms';
import CrossCheckSessionDescription from '../cross-check-session-description';

const CrossCheckSessionLayout = ({ match }) => {
  const { id } = match.params;
  switch (id) {
    case 'cross-check-session-form':
      return <CrossCheckSessionForm />;
    case 'cross-check-session-edit-form':
      return <CrossCheckSessionEditForm />;
    default:
      return <CrossCheckSessionDescription id={id} />;
  }
};

CrossCheckSessionLayout.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CrossCheckSessionLayout;
