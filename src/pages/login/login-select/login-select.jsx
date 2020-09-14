import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const LoginSelect = ({ roles, change }) => (
  <Select
    mode="multiple"
    allowClear
    style={{ width: '100%' }}
    placeholder="Please select role(s)"
    onChange={change}
  >
    {roles.map((role) => (
      <Select.Option key={role}>{role}</Select.Option>
    ))}
  </Select>
);

LoginSelect.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  change: PropTypes.func.isRequired,
};

export default React.memo(LoginSelect);
