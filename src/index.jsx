import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import Service from './services/service';
import { ServiceProvider } from './service-context';
import store from './store/store';

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ServiceProvider value={service}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>
  </Provider>,
  document.getElementById('root')
);
