import React from 'react';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ReviewRequestsTableCreation from '../../../components/review-requests-table';

const ReviewRequestsTable = () => {
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Review requests" />
      <Button style={{ margin: '1rem' }} type="primary" icon={<PlusOutlined />} size="small">
        <Link style={{ color: 'white' }} to="/review-request-form">
          Add new request
        </Link>
      </Button>
      <ReviewRequestsTableCreation />
    </div>
  );
};

export default ReviewRequestsTable;
