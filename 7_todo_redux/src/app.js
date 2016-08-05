import React from 'react';
import {render} from 'react-dom';
import router from './config/router';

render(
	router,
	document.getElementById('app')
);




// import React from 'react';
// import {render} from 'react-dom';
// import {List, Map} from 'immutable';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'; 
// import reducer from './reducers/reducer';
// import {TodoList} from './containers/containers.js';

// import store, {history} from './store';

// // const dummyTodos = List([
// //   Map({ id: 0, isDone: true,  text: 'make components' }),
// //   Map({ id: 1, isDone: false, text: 'design actions' }),
// //   Map({ id: 2, isDone: false, text: 'implement reducer' }),
// //   Map({ id: 3, isDone: false, text: 'connect components' })
// // ]);

// // // root component sents up the store
// // // reducer passed in is the root reducer
// // const store = createStore(reducer, dummyTodos);

// // console.log(store.getState())
// // Provider is from react-redux
// // Used to connect the store and the Provider (which wraps our sub components)
// render(
// 	<Provider store = {store}>
// 		<TodoList />
// 	</Provider>,
// 	document.getElementById('app')
// );
