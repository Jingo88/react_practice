import React from 'react';

function Todo(props){
	const {todo} = props;
	if (todo.isDone){
		return <strike>{todo.text} </strike>;
	} else{
		return <span> {todo.text} </span>;
	}
}

const ToDoListContainer = React.createClass({
	onSubmit(event){
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which === 13);
		const isLongEnough = text.length > 0;

		if (isEnterKey && isLongEnough){
			input.value = "";
			this.props.addTodo(text);
		}
	},
	render(){
		// const {todos, toggleTodo, addTodo} = this.props;
		const todos = this.props.todos.todoReducer;
		const toggleTodo = this.props.toggleTodo;
		const addTodo = this.props.addTodo;

		const toggleClick = id => event => toggleTodo(id);

		return (
			<div className='todo'>
				<input type='text' 
						placeholder='Add Todo Item' 
						className = 'todo__entry'
						onKeyDown = {this.onSubmit}/>

				<ul className='todo__list'>
					{todos.map(t => (
						<li key={t.get('id')} 
							className='todo__item'
							onClick = {toggleClick(t.get('id'))}>
							<Todo todo={t.toJS()} />
						</li>
					))}
				</ul>
			</div>
		)
	}
})

export default ToDoListContainer;


// export function Todo(props){
// 	const {todo} = props;
// 	if (todo.isDone){
// 		return <strike>{todo.text} </strike>;
// 	} else{
// 		return <span> {todo.text} </span>;
// 	}
// }

// export function TodoList(props){
// 	const {todos, toggleTodo, addTodo} = props;
	
// 	console.log(props)
// 	const onSubmit = (event) => {
// 		const input = event.target;
// 		const text = input.value;
// 		const isEnterKey = (event.which ===13 );
// 		const isLongEnough = text.length > 0

// 		if(isEnterKey && isLongEnough){
// 			input.value = "";
// 			addTodo(text);
// 		}
// 	};

// 	const toggleClick = id => event => toggleTodo(id);

// 	return (
// 		<div className='todo'>
// 			<input type='text' 
// 					placeholder='Add Todo Item' 
// 					className = 'todo__entry'
// 					onKeyDown = {onSubmit}/>
// 			<ul className='todo__list'>
// 				{todos.map(t => (
// 					<li key={t.get('id')} 
// 						className='todo__item'
// 						onClick = {toggleClick(t.get('id'))}>
// 						<Todo todo={t.toJS()} />
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }


