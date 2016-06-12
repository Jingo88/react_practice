import {connect} from 'react-redux';
import * as components from './components';
import {addTodo, toggleTodo} from './actions';

export const TodoList = connect(
	// takes stores current state as argument. 
	// return value is an object that describes mapping from state to props 
	// looks like this <TodoList todos={state}/>
	function mapStateToProps(state){
		return {todos: state};
	},
	function mapDispatchToProps(dispatch){
		return {
			addTodo: text=> dispatch(addTodo(text)),
			toggleTodo: id=> dispatch(toggleTodo(id))
		};
	}

)(components.TodoList);


// Looks like this:
// <TodoList todos={state}
//           addTodo={text => dispatch(addTodo(text))}
//           toggleTodo={id => dispatch(toggleTodo(id))} />