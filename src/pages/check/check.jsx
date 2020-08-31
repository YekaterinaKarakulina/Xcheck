import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import CheckForm from './CheckForm';
import { tasks } from './data';

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
    };
  }

  componentDidMount() {
    this.setState({
      task: tasks[0],
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { task } = this.state;
    const items = task.items || [];
    const basics = {
        title: 'Basic Scope',
        items: [],
      },
      extras = {
        title: 'Extra Scope',
        items: [],
      },
      fines = {
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
            <CheckForm groups={[basics, extras, fines]} handleSubmit={handleSubmit} />
          </div>
        </div>
      </>
    );
  }
}

Check.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

Check = reduxForm({
  form: 'check',
})(Check);

export default Check;
