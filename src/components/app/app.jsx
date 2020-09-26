/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { logout } from '../../store/actions/login';
import Sidebar from '../sidebar';
import Routes from '../../routes';
import './app.scss';

class App extends React.PureComponent {
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
  isLoggedIn: state.login.isLoggedIn,
  user: state.login.user,
  roles: state.login.roles,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
