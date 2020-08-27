import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader } from 'antd';

import { getCrossCheckSessions } from '../../store/actions';

import CrossCheckSessionsTable from './table';
import mapData from './mapData';

interface Props {
  props?: any;
  getCrossCheckSessions(): Object;
  crossCheckSessions: any;
}

class CrossCheckSessions extends React.Component<Props, {}> {
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
      <div className="wrapper">
        <PageHeader className="site-page-header" title="CrossCheck Sessions" />
        <Button type="primary">Add new session</Button>
        <CrossCheckSessionsTable tableData={tableData} />
      </div>
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
