/* eslint-disable react/prop-types */
import React from 'react';
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

export default CrossCheckSessionLayout;
