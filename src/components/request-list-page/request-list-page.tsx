import React from 'react';
import { Table } from 'antd';

import './request-list-page.scss';
import request from './data';
import columns from './columns';

const RequestListPage = () => {
  return <Table dataSource={request} columns={columns} rowKey="id" />;
};

export default RequestListPage;
