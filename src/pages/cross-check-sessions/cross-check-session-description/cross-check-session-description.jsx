/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import { getCrossCheckSession } from '../../../store/actions/cross-check-session';
import CrossCheckSessionDescriptionCreation from '../../../components/cross-check-session-description';
import checkStatus from '../../../utils/status';

class CrossCheckSessionDescription extends React.Component {
  componentDidMount() {
    const { id, getCrossCheckSession } = this.props;
    getCrossCheckSession({ id, editMode: false });
  }

  render() {
    const { initialValues } = this.props;

    if (initialValues.title) {
      const color = checkStatus(initialValues.state);
      return (
        <div className="wrapper">
          <PageHeader className="site-page-header" title={initialValues.title}>
            <Tag color={color}>{initialValues.state.toUpperCase()}</Tag>
          </PageHeader>
          <Button type="primary">
            <Link to="/cross-check-sessions/">Back</Link>
          </Button>
          <CrossCheckSessionDescriptionCreation descriptionValues={initialValues} />
          <Space size="middle">
            <Button type="primary">Finish requests collection</Button>
            <Button type="primary">Assign reviewers</Button>
            <Button type="primary">Stop cross-check session</Button>
          </Space>
        </div>
      );
    }
    return null;
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
