import React from 'react';
import CrossCheckSessionFormCreation from '../../../components/cross-check-session-form';

import './cross-check-session-form.scss';

const CrossCheckSessionForm = () => {
  return (
    <div className="crossCheckSession">
      <h2>Create CrossCheck session</h2>
      <CrossCheckSessionFormCreation />
    </div>
  );
};

export default CrossCheckSessionForm;
