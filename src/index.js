import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configureStore from './store/configureStore';
import App from './components/app';

const store = configureStore();
// store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.querySelector('app'));

