import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import {
  getLoadingStatus,
  getClientId,
  getRedirectUri,
  getProxyUrl,
  getLoginError,
} from '../../store/selectors/login';
import { loginStart, loginSuccess, loginFailure, setUserRoles } from '../../store/actions/login';
import LoginCover from './login-cover';
import LoginSelect from './login-select';
import LoginButton from './login-button';
import { Loader, Logo, ErrorMessage } from '../../components/ui';
import './github-login.scss';

class GithubLogin extends React.PureComponent {
  state = {
    roles: ['author', 'student', 'supervisor', 'course_manager'],
  };

  componentDidMount() {
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    if (hasCode) {
      const newUrl = url.split('?code=');
      const {
        clientId,
        redirectUri,
        proxyUrl,
        loginStart,
        loginSuccess,
        loginFailure,
      } = this.props;
      const requestData = {
        client_id: clientId,
        redirect_uri: redirectUri,
        code: newUrl[1],
      };
      window.history.pushState({}, null, newUrl[0]);
      loginStart();
      fetch(proxyUrl, {
        method: 'POST',
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          loginSuccess(true, data);
        })
        .catch((error) => {
          loginFailure(error.message);
        });
    }
  }

  handleChooseRoles = (value) => {
    const { setUserRoles } = this.props;
    setUserRoles(value);
  };

  renderLoginForm = () => {
    const { roles } = this.state;
    const { clientId, redirectUri, error } = this.props;
    return (
      <div role="main" className="login">
        <Logo />
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <Card
          style={{ width: '320px' }}
          cover={<LoginCover />}
          actions={[<LoginButton clientId={clientId} redirectUri={redirectUri} />]}
        >
          <Card.Meta
            title="Please login via GitHub"
            description="In order to access the XCheck App, you need to login with your GitHub account. If you login first time, please choose your role(s)."
          />
          <br />
          <LoginSelect roles={roles} change={this.handleChooseRoles} />
        </Card>
      </div>
    );
  };

  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loader style={{ width: '100%', height: '100vh' }} />;
    }
    return this.renderLoginForm();
  }
}

const mapStateToProps = (state) => ({
  loading: getLoadingStatus(state),
  clientId: getClientId(state),
  redirectUri: getRedirectUri(state),
  proxyUrl: getProxyUrl(state),
  error: getLoginError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginStart: () => dispatch(loginStart()),
  loginSuccess: (isLoggedIn, user) => dispatch(loginSuccess(isLoggedIn, user)),
  loginFailure: (error) => dispatch(loginFailure(error)),
  setUserRoles: (roles) => dispatch(setUserRoles(roles)),
});

GithubLogin.propTypes = {
  loading: PropTypes.bool.isRequired,
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired,
  proxyUrl: PropTypes.string.isRequired,
  error: PropTypes.string,
  loginStart: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginFailure: PropTypes.func.isRequired,
  setUserRoles: PropTypes.func.isRequired,
};

GithubLogin.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubLogin);
