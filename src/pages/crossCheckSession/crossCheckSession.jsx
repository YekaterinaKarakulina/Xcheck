import React from 'react';
import { CrossCheckSessionForm } from '../../components/forms';

import './crossCheckSession.scss';

const CrossCheckSession = () => {
  return (
    <div className="crossCheckSession">
      <h2>Create CrossCheck session</h2>
      <CrossCheckSessionForm />
    </div>
  );
};

export default CrossCheckSession;
