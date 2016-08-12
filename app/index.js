import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import { getNewCategory } from './utils/factory';

const firstCategory = getNewCategory('First category');

const persistedStore = {
  notes: {
    data: {[firstCategory.id]: firstCategory},
    activeCategory: firstCategory.id,
    activeNote: {},
  }
}

const store = configureStore(persistedStore);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
