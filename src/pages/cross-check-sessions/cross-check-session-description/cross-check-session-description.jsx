/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import { getCrossCheckSession } from '../../../store/actions/cross-check-session';

class CrossCheckSessionDescription extends React.Component {
  componentDidMount() {
    const { id, getCrossCheckSession } = this.props;
    console.log(id);
    getCrossCheckSession({ id, editMode: false });
  }

  render() {
    const { initialValues } = this.props;
    console.log(initialValues);
    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="CrossCheck Sessions" />
        <Button type="primary">
          <Link to="/cross-check-sessions/">Back</Link>
        </Button>
        <h1>Hi</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ crossCheckSessions }) => ({
  initialValues: crossCheckSessions.currentSessionInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: ({ id, editMode }) => dispatch(getCrossCheckSession({ id, editMode })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionDescription);
