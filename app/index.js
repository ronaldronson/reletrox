import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const notes = [{
  "id": 1,
  "category": "First category",
  "notes": []
}];

const persistedStore = {
  notes: {
    data: notes,
    activeCategory: notes[0].category,
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
