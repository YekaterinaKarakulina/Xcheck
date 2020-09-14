import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { logout } from '../../store/actions/login';
import { getLoginStatus, getUser, getUserRoles } from '../../store/selectors/login';
import Sidebar from '../sidebar';
import Routes from '../../routes';
import './app.scss';

interface Props {
  props?: any;
  state: any;
  isLoggedIn: Boolean;
  user: Object;
  roles: Array<String>;
  dispatch?: Dispatch;
  logout(): Object;
}

class App extends React.PureComponent<Props, {}> {
  render() {
    const { isLoggedIn, user, roles, logout } = this.props;
    let userInfo = {};
    if (user) {
      userInfo = {
        avatarUrl: user.avatar_url,
        name: user.name,
        roles,
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
  isLoggedIn: getLoginStatus(state),
  user: getUser(state),
  roles: getUserRoles(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
