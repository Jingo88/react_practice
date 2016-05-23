import React from 'react';
import { Link } from 'react-router'

const Main = React.createClass({
	render(){
		return (
			<div>
				<nav>
				  <div className="nav-wrapper">
				  	<Link to='/'> LOGO </Link>
				    <ul id="nav-mobile" className="right hide-on-med-and-down">
				      <li><a href="sass.html">Sass</a></li>
				      <li><a href="badges.html">Components</a></li>
				      <li><a href="collapsible.html">JavaScript</a></li>
				    </ul>
				  </div>
				</nav>
	        
				<h1> Hello World Main Class Shit </h1>
			</div>
		)
	}
})

export default Main;