import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      const { title, state } = initialValues;
      const color = checkStatus(state);
      return (
        <div className="wrapper">
          <PageHeader className="site-page-header" title={title}>
            <Tag color={color}>{state.toUpperCase()}</Tag>
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

CrossCheckSessionDescription.propTypes = {
  id: PropTypes.string.isRequired,
  initialValues: PropTypes.instanceOf(Object).isRequired,
  getCrossCheckSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessions }) => ({
  initialValues: crossCheckSessions.currentSessionInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: ({ id, editMode }) => dispatch(getCrossCheckSession({ id, editMode })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionDescription);
