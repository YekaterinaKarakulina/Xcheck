import React from 'react';
import { PageHeader } from 'antd';
import RequestsTable from '../../components/requests-table/requestsTable';

import './requests.scss';

const Requests = () => {
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Requests" />
      <RequestsTable />
    </div>
  );
};

export default Requests;
