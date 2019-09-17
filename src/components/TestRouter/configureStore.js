// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// import promiseMiddleware from '../middleware/promise';
import DevTools from './DevTools';

export default function configureStore(rootReducer, preloadedState) {
  const router = routerMiddleware(browserHistory);
  const enhancer = compose(
    applyMiddleware(
      thunk,
      // promiseMiddleware(),
      router
    ),
    DevTools.instrument()
  );
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  );

  // TODO reducers hot replace
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // module.hot.accept('../reducers', () => {
    //   const nextReducer = require('../reducers').default; // eslint-disable-line global-require
    //   store.replaceReducer(nextReducer);
    // });
  }

  return store;
}
