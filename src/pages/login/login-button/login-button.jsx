import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const LoginButton = ({ clientId, redirectUri }) => (
  <Button
    htmlType="a"
    href={`https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`}
    type="primary"
    size="large"
    icon={<GithubOutlined />}
  >
    Sign up with GitHub
  </Button>
);

LoginButton.propTypes = {
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired,
};

export default React.memo(LoginButton);
