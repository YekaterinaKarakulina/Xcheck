/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { getCrossCheckSessions } from '../../store/actions';

import CrossCheckSessionsTable from './table';
import mapData from './mapData';

class CrossCheckSessions extends React.Component {
  componentDidMount() {
    const { getCrossCheckSessions } = this.props;
    getCrossCheckSessions();
  }

  render() {
    const { crossCheckSessions } = this.props;
    const tableData = [];
    crossCheckSessions.forEach((session) => {
      tableData.push(mapData(session));
    });

    return (
      <>
        <Button type="primary">Add new session</Button>
        <CrossCheckSessionsTable tableData={tableData} />
      </>
    );
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
