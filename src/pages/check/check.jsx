/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import CheckForm from '../../components/check-form';
import { tasks, reviewRequests } from './data';
import './check.scss';

const { Title } = Typography;

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
      reviewRequest: {},
      detailIds: {},
      commentFieldIds: {},
      commentIds: {},
    };
  }

  componentDidMount() {
    this.setState({
      task: tasks[0],
      reviewRequest: reviewRequests[0], // reviewRequests[0] || { selfGrade: {} }
    });
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
    const { task, reviewRequest, detailIds, commentFieldIds, commentIds } = this.state;
    const items = task.items || [];
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
        case 'Basic Scope':
          basics.items.push(listItem);
          break;
        case 'Extra Scope':
          extras.items.push(listItem);
          break;
        case 'Fines':
          fines.items.push(listItem);
          break;
        default:
      }
    });

    const groups = [basics, extras, fines];

    return (
      <>
        <div className="check">
          <div className="check__container">
            <Title level={1} className="check__title">
              Check Form
            </Title>
            <CheckForm
              scopes={groups || {}}
              reviewRequest={reviewRequest}
              detailIds={detailIds}
              commentFieldIds={commentFieldIds}
              commentIds={commentIds}
              toggleMore={this.toggleMore}
              toggleAdd={this.toggleAdd}
              toggleShow={this.toggleShow}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Check;
