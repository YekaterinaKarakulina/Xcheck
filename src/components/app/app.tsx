import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Switch, Route } from 'react-router-dom';
// import { DatePicker } from 'antd';
import { updateInitialState } from '../../store/actions';

import { HomePage, CartPage, Check } from '../../pages';

import './app.scss';

interface Props {
  props?: any;
  state: any;
  updateInitialState(): Object;
  dispatch?: Dispatch;
}

class App extends React.Component<Props, {}> {
  componentDidMount() {
    const { updateInitialState } = this.props;
    updateInitialState();
  }

  render() {
    const { state } = this.props;
    const { loading } = state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/check" component={Check} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateInitialState: () => dispatch(updateInitialState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
