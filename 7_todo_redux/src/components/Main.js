import React from 'react';

export function Todo(props){
	const {todo} = props;
	if (todo.isDone){
		return <strike>{todo.text} </strike>;
	} else{
		return <span> {todo.text} </span>;
	}
}

export function TodoList(props){
	const {todos, toggleTodo, addTodo} = props;

	console.log(props)
	const onSubmit = (event) => {
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which ===13 );
		const isLongEnough = text.length > 0

		if(isEnterKey && isLongEnough){
			input.value = "";
			addTodo(text);
		}
	};

	const toggleClick = id => event => toggleTodo(id);

	return (
		<div className='todo'>
			<input type='text' 
					placeholder='Add Todo Item' 
					className = 'todo__entry'
					onKeyDown = {onSubmit}/>
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






// import React from 'react';

// import { Link } from 'react-router';

// const Main=React.createClass({
// 	render(){
// 		return (
// 			<div>
// 				<h1>
// 					<Link to='/'>
// 						Ello Warld
// 					</Link>
// 				</h1>
// 				{React.cloneElement(this.props.children, this.props)}
// 			</div>
// 		)
// 	}
// })

// export default Main;