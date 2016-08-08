import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addTodo, toggleTodo} from '../actions/actions';
import Main from '../components/Main';
// import * as actionCreators from '../actions/actions'

function mapStateToProps(state){
	return {todos: state}
};

function mapDispatchToProps(dispatch){
	return {
		addTodo: text=>dispatch(addTodo(text)),
		toggleTodo: id=>dispatch(toggleTodo(id))
	}
};

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators(actionCreators, dispatch);
// }

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ToDoListContainer;