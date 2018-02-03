import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RouteLoader from './router/routeLoader';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteLoader />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
