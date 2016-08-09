import React from 'react';

import { Link } from 'react-router';

const Main=React.createClass({
	render(){
		return (
			<div>
				<h1>
					Organize Some Shit
				</h1>
				<nav>
					<ul>
						<li><Link to='/'>First Page</Link></li>
						<li><Link to='/testing'>Second Page</Link></li>
					</ul>
				</nav>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default Main;