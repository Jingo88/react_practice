import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {List, Map} from 'immutable';

const init = List();

// if we had more reducers we would use "combineReducers()"

// view requests an action
// actions file adjusts the type and payload
// the action is either dispatched or sent back to the view for dispatch
// the store receives the action and sends it HERE to the reducer

function todoReducer(state = init, action){
	switch(action.type){
		case 'ADD_TODO':
			return state.push(Map(action.payload));

		case 'TOGGLE_TODO':
			return state.map(t =>{
				// if the id matches you found the one you're looking for
				// change it's isDone boolean to true or false
				if (t.get('id') === action.payload){
					return t.update('isDone', isDone => !isDone);
				} else{
					return t;
				}
			})
		default: 
			return state;
	}
}

const rootReducer = combineReducers({todoReducer, routing: routerReducer})

export default rootReducer;
// what is your previous state + what is the action should lead to a new state
// reducers should stay PURE

