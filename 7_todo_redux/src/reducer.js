import {List, Map} from 'immutable';

const init = List([])

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