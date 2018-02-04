import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RouteLoader from './router/routeLoader';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <RouteLoader />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
