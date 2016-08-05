import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addTodo, toggleTodo} from '../actions/actions';
import Main from '../components/Main';

function mapStateToProps(state){
	return {todos: state}
};

function mapDispatchToProps(dispatch){
	return {
		addTodo: text=>dispatch(addTodo(text)),
		toggleTodo: id=>dispatch(toggleTodo(id))
	}
};


const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default TodoListContainer;