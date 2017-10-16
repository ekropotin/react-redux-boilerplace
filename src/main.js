import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, browserHistory } from './store/createStore';
import { ConnectedRouter } from 'react-router-redux';

import './styles/main.scss';

const store = createStore(window.__INITIAL_STATE__);

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const PageLayout = require('./components/pageLayout/PageLayout').default;

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <PageLayout />
      </ConnectedRouter>
    </Provider>,

    MOUNT_NODE
  );
};

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    render = () => {
      try {
        renderApp();
      } catch (e) {
        console.error(e);
        renderError(e);
      }
    };

    // Setup hot module replacement
    module.hot.accept([
      './components/pageLayout/PageLayout'
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render();
