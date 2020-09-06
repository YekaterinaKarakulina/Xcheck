import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { getUsers, postUser } from '../../store/actions';
import { logoutSuccess } from '../../store/actions/login';
import { getLoginStatus, getUser, getUserRoles } from '../../store/selectors/login';
import Sidebar from '../sidebar';
import Routes from '../../routes';
import './app.scss';

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

class App extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  componentDidUpdate(prevProps) {
    const { postUser, isLoggedIn, users, user, roles } = this.props;
    if (!prevProps.users.length && users.length) {
      if (isLoggedIn) {
        console.log(user);
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

  render() {
    const { isLoggedIn, users, user, logout } = this.props;
    const currentUser = users.filter(({ githubId }) => githubId === user.login)[0];
    let userInfo = {};
    if (currentUser) {
      userInfo = {
        avatarUrl: user.avatar_url,
        name: user.name,
        roles: currentUser.roles,
      };
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {isLoggedIn ? <Sidebar user={userInfo} logout={logout} /> : null}
        <main className="main">
          <Routes isLoggedIn={isLoggedIn} />
        </main>
      </Layout>
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
    getUsers: () => dispatch(getUsers()),
    postUser: (user) => dispatch(postUser(user)),
    logout: () => dispatch(logoutSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
