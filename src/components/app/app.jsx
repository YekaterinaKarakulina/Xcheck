import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';
import { updateInitialState } from '../../store/actions';

import { HomePage, CartPage } from '../../pages';

import './app.scss';

class App extends React.Component {
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
        <div>
          id: {testData[0].id}, someData: {testData[0].data}
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateInitialState: () => dispatch(updateInitialState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
