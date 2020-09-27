import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './loader.scss';

const Loader = ({ style }) => (
  <div role="complementary" className="loader-wrapper" style={style}>
    <Spin tip="Loading..." />
  </div>
);

Loader.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

Loader.defaultProps = {
  style: null,
};

export default React.memo(Loader);
