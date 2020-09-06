import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';

const Logo = ({ style }) => (
  <img
    src="../../../../assets/images/logo-rs-school.svg"
    alt="RS School Logo"
    className="logo"
    style={style}
  />
);

Logo.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

Logo.defaultProps = {
  style: null,
};

export default React.memo(Logo);
