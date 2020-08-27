/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { getCrossCheckSessions } from '../../store/actions';

class CrossCheckSessions extends React.Component {
  componentDidMount() {
    const { getCrossCheckSessions } = this.props;
    getCrossCheckSessions();
  }

  render() {
    const { crossCheckSessions } = this.props;
    console.log(crossCheckSessions);
    return <div>crossCheckSessions</div>;
  }
}

const mapStateToProps = ({ crossCheckSessions }) => {
  return { crossCheckSessions };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSessions: () => dispatch(getCrossCheckSessions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessions);
