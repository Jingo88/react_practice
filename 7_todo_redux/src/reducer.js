import {List, Map} from 'immutable';

const init = List([])

// if we had more reducers we would use "combineReducers()"

// view requests an action
// actions file adjusts the type and payload
// the action is either dispatched or sent back to the view for dispatch
// the store receives the action and sends it HERE to the reducer

export default function reducer(todos = init, action){
	switch(action.type){
		case 'ADD_TODO':
			//convert to immutable Map object before pushing to todos
			return todos.push(Map(action.payload));
		case 'TOGGLE_TODO':
			// map through all the todos
			return todos.map(t =>{
				// if the id matches you found the one you're looking for
				// change it's isDone boolean to true or false
				if (t.get('id') === action.payload){
					return t.update('isDone', isDone => !isDone);
				} else{
					return t;
				}
			})
		default: 
			return todos;
	}
}

// what is your previous state + what is the action should lead to a new state
// reducers should stay PURE
