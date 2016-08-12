import React from 'react';
// import getHeadlines from '../helpers/helpers'

var axios = require('axios');

function getHeadlines(){
	return axios.get('https://www.reddit.com/r/front.json')
							.then(function(response){
								return response
							})
							.catch(function(err){
								console.log(err)
								console.log('We broke inside getHeadlines helper')
							})
}


const GetReddit = React.createClass({
	componentDidMount(){
		this.getRedditHeadlines()
	},
	componentWillReceiveProps(){
		this.getRedditHeadlines()
	},
	getRedditHeadlines(){
		getHeadlines()
			.then(function(data){
				// console.log(data.data.data.children)
				let headlines = data.data.data.children

				headlines.map(headline=>{
					console.log(headline.data)
					this.props.addHeadline(headline.data)
				})
			}.bind(this))
	},
	render(){

		return (
			<h1>Hello World</h1>
		)
	}
})

export default GetReddit;

// function Todo(props){
// 	const {todo} = props;
// 	if (todo.isDone){
// 		return <strike>{todo.text} </strike>;
// 	} else{
// 		return <span> {todo.text} </span>;
// 	}
// }

// const PageTwo= React.createClass({
// 	onSubmit(event){
// 		const input = event.target;
// 		const text = input.value;
// 		const isEnterKey = (event.which === 13);
// 		const isLongEnough = text.length > 0;

// 		if (isEnterKey && isLongEnough){
// 			input.value = "";
// 			this.props.addTodo(text);
// 		}
// 	},
// 	render(){
// 		// const {todos, toggleTodo, addTodo} = this.props;
// 		const todos = this.props.todos.todoReducer;
// 		const toggleTodo = this.props.toggleTodo;
// 		const addTodo = this.props.addTodo;

// 		const toggleClick = id => event => toggleTodo(id);

// 		return (
// 			<div className='todo'>
// 				<input type='text' 
// 						placeholder='Add Todo Item' 
// 						className = 'todo__entry'
// 						onKeyDown = {this.onSubmit}/>

// 				<ul className='todo__list'>
// 					{todos.map(t => (
// 						<li key={t.get('id')} 
// 							className='todo__item'
// 							onClick = {toggleClick(t.get('id'))}>
// 							<Todo todo={t.toJS()} />
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		)
// 	}
// })

// module.exports = PageTwo;