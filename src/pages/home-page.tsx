import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getUsers, postUser } from '../store/actions';
import { logout } from '../store/actions/login';
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
  logout(): Object;
  roles: Array<String>;
}

class HomePage extends React.Component<Props, {}> {
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

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { users, isLoggedIn, user } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <>
            <img
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              src={user.avatar_url}
              alt="Avatar"
            />
            <span>{user.login}</span>
            <button type="button" onClick={this.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Redirect to="/login" />
        )}
        <h1>Home page</h1>
        <Link to="/crossCheckSessions/">crossCheckSessions</Link>
        <ul>
          {users.map(({ githubId, roles }) => {
            return (
              <li key={githubId}>
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
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
