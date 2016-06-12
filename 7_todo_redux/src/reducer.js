import {List, Map} from 'immutable',

const init = List([])

export default function(todos = init, action){
	switch(action.type){
		case 'ADD_TODO':
			//convert to immutable Map object before pushing to todos
			return todos.push(Map(action.payload));
		case 'TOGGLE_TODO':
			//
		default: 
			return todos;
	}
}