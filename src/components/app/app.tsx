import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';
import { updateInitialState } from '../../store/actions';

import { HomePage, CartPage } from '../../pages';

import MainMenu from '../sidebar';

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
    const { testData, loading } = state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <MainMenu />
        <div>
          id: {testData.id}, someData: {testData.data}
        </div>
        <DatePicker />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
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
