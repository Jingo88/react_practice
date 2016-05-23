import React from 'react';
import ReactDOM from 'react-dom';

const Hello = React.createClass({
	render(){
		return(
			<h1>Hello World</h1>
		)
	}
})

ReactDOM.render(
	<h1>Hello World</h1>,
	document.getElementById('app')
)
