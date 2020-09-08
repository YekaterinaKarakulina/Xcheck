/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader } from 'antd';
import { Link } from 'react-router-dom';

import { getCrossCheckSessions } from '../../../store/actions/cross-check-session';

import CrossCheckSessionsTableCreation from '../../../components/cross-check-sessions-table/cross-check-sessions-table-creation';
import mapData from '../../../components/cross-check-sessions-table/map-data';

class CrossCheckSessionsTable extends React.Component {
  componentDidMount() {
    const { getCrossCheckSessions } = this.props;
    getCrossCheckSessions();
  }

  render() {
    const { crossCheckSessionsData } = this.props;
    const tableData = [];
    crossCheckSessionsData.forEach((session) => {
      tableData.push(mapData(session));
    });

    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="CrossCheck Sessions" />
        <Button type="primary">
          <Link to="/cross-check-sessions/cross-check-session-form">Add new session</Link>
        </Button>
        <CrossCheckSessionsTableCreation tableData={tableData} />
      </div>
    );
  }
}

const mapStateToProps = ({ crossCheckSessionsData }) => {
  return { crossCheckSessionsData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSessions: () => dispatch(getCrossCheckSessions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionsTable);
