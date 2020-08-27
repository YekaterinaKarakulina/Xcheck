import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getUsers, postUser } from '../store/actions';

interface Props {
  props?: any;
  state: any;
  users: Array<Object>;
  dispatch?: Dispatch;
  getUsers(): Object;
  postUser({ id: Number, name: String }): Object;
}

class HomePage extends React.Component<Props, {}> {
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
    const { postUser } = this.props;
    postUser({ id: value, name: value });
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { users } = this.props;
    return (
      <div>
        <h1>Home page</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="name">
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
    postUser: (user) => dispatch(postUser(user)),
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
