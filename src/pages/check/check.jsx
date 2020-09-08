import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
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
    };
  }

  componentDidMount() {
    this.setState({
      task: tasks[0],
      reviewRequest: reviewRequests[0], // reviewRequests[0] || { selfGrade: {} }
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { task, reviewRequest } = this.state;
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

    return (
      <>
        <div className="check">
          <div className="check__container">
            <Title level={1} className="check__title">
              Check Form
            </Title>
            <CheckForm
              groups={[basics, extras, fines]}
              reviewRequest={reviewRequest || {}}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}

Check.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'check',
})(Check);
