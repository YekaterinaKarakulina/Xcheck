import React from 'react';
import { PageHeader } from 'antd';
import ReviewRequestsTableCreation from '../../../components/review-requests-table';

const ReviewRequestsTable = () => {
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Review requests" />
      <ReviewRequestsTableCreation />
    </div>
  );
};

export default ReviewRequestsTable;
