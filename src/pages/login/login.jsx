import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { login, setUserRoles } from '../../store/actions/login';
import LoginCover from './login-cover';
import LoginSelect from './login-select';
import LoginButton from './login-button';
import { Loader, Logo, ErrorMessage } from '../../components/ui';
import './login.scss';

class Login extends React.PureComponent {
  state = {
    roles: ['author', 'student', 'supervisor', 'course_manager'],
  };

  componentDidMount() {
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    if (hasCode) {
      const newUrl = url.split('?code=');
      const { clientId, redirectUri, login } = this.props;
      const requestData = {
        clientId,
        redirectUri,
        code: newUrl[1],
      };
      window.history.pushState({}, null, newUrl[0]);
      login(requestData);
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
  loading: state.login.loading,
  clientId: state.login.clientId,
  redirectUri: state.login.redirectUri,
  error: state.login.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  login: (requestData, proxyUrl) => dispatch(login(requestData, proxyUrl)),
  setUserRoles: (roles) => dispatch(setUserRoles(roles)),
});

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired,
  error: PropTypes.string,
  login: PropTypes.func.isRequired,
  setUserRoles: PropTypes.func.isRequired,
};

Login.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
