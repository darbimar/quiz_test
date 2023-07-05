import React from 'react';
import { App } from 'App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
