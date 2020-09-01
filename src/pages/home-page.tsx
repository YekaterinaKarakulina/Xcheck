import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';

import { getUsers, postUser } from '../store/actions';
import { getLoginStatus, getUser } from '../store/selectors/login';

interface Props {
  props?: any;
  state: any;
  isLoggedIn: Boolean;
  users: Array<Object>;
  user: Object;
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
    const { users, isLoggedIn, user } = this.props;
    console.log(user);
    return (
      <div>
        {isLoggedIn ? (
          <>
            <img
              style={{ width: '50px', height: '50%', borderRadius: '50%' }}
              src={user.avatar_url}
              alt="Avatar"
            />
            <span>{user.login}</span>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
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

const mapStateToProps = (state) => ({
  users: state.users,
  isLoggedIn: getLoginStatus(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    postUser: (user) => dispatch(postUser(user)),
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
