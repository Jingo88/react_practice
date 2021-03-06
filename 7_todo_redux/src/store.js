import React from 'react';

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {List, Map} from 'immutable';

import rootReducer from './reducers/reducer';

const todoReducer = []

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
