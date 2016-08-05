import React from 'react';

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {List, Map} from 'immutable';

import rootReducer from './reducers/reducer';

// const dummyTodos = List([
//   Map({ id: 0, isDone: true,  text: 'make components' }),
//   Map({ id: 1, isDone: false, text: 'design actions' }),
//   Map({ id: 2, isDone: false, text: 'implement reducer' }),
//   Map({ id: 3, isDone: false, text: 'connect components' })
// ]);

const dummyTodos = {todoReducer: [
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]}

const store = createStore(rootReducer, dummyTodos);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
