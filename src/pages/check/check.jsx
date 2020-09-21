/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { getReviewRequest } from '../../store/actions/review-requests';
import { getTaskByTitle } from '../../store/actions/task';
import CheckForm from '../../components/check-form';
import './check.scss';

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailIds: {},
      commentFieldIds: {},
      commentIds: {},
    };
  }

  async componentDidMount() {
    const { location, getReviewRequest } = this.props;

    const url = location.pathname;
    const splitedUrl = url.split('/');
    const lastPath = splitedUrl[splitedUrl.length - 1];

    getReviewRequest(lastPath);
  }

  componentDidUpdate(prevProps) {
    const { getTaskByTitle, currentReviewRequest } = this.props;
    const { taskTitle } = currentReviewRequest;

    if (taskTitle !== prevProps.currentReviewRequest.taskTitle) {
      getTaskByTitle(taskTitle);
    }
  }

  toggleMore = (id) => {
    this.setState((prevState) => {
      const detailIds = { ...prevState.detailIds };
      detailIds[id] = !detailIds[id];

      return {
        detailIds,
      };
    });
  };

  toggleAdd = (id) => {
    this.setState((prevState) => {
      const commentFieldIds = { ...prevState.commentFieldIds };
      commentFieldIds[id] = !commentFieldIds[id];

      return {
        commentFieldIds,
      };
    });
  };

  toggleShow = (id) => {
    this.setState((prevState) => {
      const commentIds = { ...prevState.commentIds };
      commentIds[id] = !commentIds[id];

      return {
        commentIds,
      };
    });
  };

  render() {
    const { detailIds, commentFieldIds, commentIds } = this.state;
    const { currentReviewRequest, currentTask, login } = this.props;
    const { selfGrade } = currentReviewRequest;
    const items = currentTask ? currentTask.items : [];
    const basics = {
      id: 1,
      title: 'Basic Scope',
      items: [],
    };

    const extras = {
      id: 2,
      title: 'Extra Scope',
      items: [],
    };

    const fines = {
      id: 3,
      title: 'Fines',
      items: [],
    };

    items.forEach((listItem) => {
      switch (listItem.category) {
        case 'basic':
          basics.items.push(listItem);
          break;
        case 'extra':
          extras.items.push(listItem);
          break;
        case 'fines':
          fines.items.push(listItem);
          break;
        default:
      }
    });

    const groups = [basics, extras, fines];
    const initialValues = {};

    if (!isEmpty(selfGrade)) {
      // eslint-disable-next-line no-restricted-syntax

      for (const item of Object.keys(selfGrade)) {
        initialValues[item] = selfGrade[item].score;
      }
    } else {
      items.forEach((item) => {
        initialValues[item.id] = 0;
      });
    }

    return (
      <div className="wrapper">
        <PageHeader
          title={!isEmpty(selfGrade) ? 'Check Form' : 'Selfcheck Form'}
          className="site-page-header"
          style={{ display: 'flex', justifyContent: 'center' }}
        />

        <CheckForm
          initialValues={initialValues}
          scopes={groups || {}}
          reviewRequest={currentReviewRequest}
          detailIds={detailIds}
          commentFieldIds={commentFieldIds}
          commentIds={commentIds}
          toggleMore={this.toggleMore}
          toggleAdd={this.toggleAdd}
          toggleShow={this.toggleShow}
          user={login}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reviewRequests, tasks, login }) => ({
  currentReviewRequest: reviewRequests.currentReviewRequest,
  currentTask: tasks.currentTask[0],
  login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewRequest: (id) => dispatch(getReviewRequest(id)),
    getTaskByTitle: (title) => dispatch(getTaskByTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Check);
