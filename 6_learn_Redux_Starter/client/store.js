import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Pull in the posts and comments data from other files.
const defaultState = {
	posts,
	comments
};

console.log(defaultState)
console.log(rootReducer)
// Createstore is a method that connects the reducer to the default state
const store = createStore(rootReducer, defaultState);

// export const history
export const history = syncHistoryWithStore(browserHistory, store);

// Allows for hot reloading
if(module.hot){
	module.hot.accept('./reducers/', () =>{
		const nextRootReducer = require('./reducers/index').default;

		store.replaceReducer(nextRootReducer);
	});
}

export default store;