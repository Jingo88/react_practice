import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/rootReducer'

const seedData = {
	1: {
		isDone: false,
		title: "Chores",
		notes: [
			{id: 0, complete: false, text: "Something Here"},
			{id: 1, complete: false, text: "Something Here"},
			{id: 2, complete: false, text: "Something Here"},
			{id: 3, complete: false, text: "Something Here"}
		]
	},
	2: {
		isDone: false,
		title: "Banks",
		notes: [
			{id: 0, complete: false, text: "book number 2"},
			{id: 1, complete: false, text: "book number 2"},
			{id: 2, complete: false, text: "book number 2"},
			{id: 3, complete: false, text: "book number 2"}
		]
	},
	3: {
		isDone: false,
		title: "Date Ideas",
		notes: [
			{id: 0, complete: false, text: "we're in book 3"},
			{id: 1, complete: false, text: "we're in book 3"},
			{id: 2, complete: false, text: "we're in book 3"},
			{id: 3, complete: false, text: "we're in book 3"}
		]
	}
}

const store = createStore(rootReducer, seedData);


export default store;