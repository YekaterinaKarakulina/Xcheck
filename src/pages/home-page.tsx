import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getUsers, postUser } from '../store/actions';
import { logoutSuccess } from '../store/actions/login';
import { getLoginStatus, getUser, getUserRoles } from '../store/selectors/login';

interface Props {
  props?: any;
  state: any;
  isLoggedIn: Boolean;
  users: Array<Object>;
  user: Object;
  dispatch?: Dispatch;
  getUsers(): Object;
  postUser({ id: String, githubId: String, roles: Array }): Object;
  logoutSuccess(): Object;
  roles: Array<String>;
}

class HomePage extends React.Component<Props, {}> {
  state = { githubId: '' };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  componentDidUpdate(prevProps) {
    const { postUser, isLoggedIn, users, user, roles } = this.props;
    if (!prevProps.users.length && users.length) {
      if (isLoggedIn) {
        const isUserExists = users.filter(({ githubId }) => githubId === user.login);
        if (isUserExists.length) {
          return;
        }
        const { login } = user;
        const id = uuidv4();
        postUser({ id, githubId: login, roles });
      }
    }
  }

  handleChange = (event) => {
    this.setState({ githubId: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const { githubId } = this.state;
    const { postUser } = this.props;
    const id = uuidv4();
    postUser({ id, githubId, roles: ['student'] });
    this.setState({ githubId: '' });
  }

  render() {
    const { githubId } = this.state;
    const { users, isLoggedIn, user, logoutSuccess } = this.props;
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
            <button type="button" onClick={logoutSuccess}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <h1>Home page</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="name">
            GithubId:
            <input id="name" onChange={(event) => this.handleChange(event)} value={githubId} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
        <ul>
          {users.map(({ id, githubId, roles }) => {
            return (
              <li key={id}>
                {githubId}: {roles.map((role) => `${role}, `)}
              </li>
            );
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
  roles: getUserRoles(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    postUser: (user) => dispatch(postUser(user)),
    getUsers: () => dispatch(getUsers()),
    logoutSuccess: () => dispatch(logoutSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
