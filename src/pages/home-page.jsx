/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../store/actions';

class HomePage extends React.Component {
  state = { value: '' };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    // const { putUser } = this.props;
    console.log(`Отправленное имя: ${value}`);
    // putUser(value);
  }

  render() {
    const { value } = this.state;
    const { users } = this.props;
    return (
      <div>
        <h1>Home page</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Имя:
            <input id="name" onChange={(event) => this.handleChange(event)} value={value} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
        <ul>
          {users.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // putUser: (name) => dispatch(putUser(name)),
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
