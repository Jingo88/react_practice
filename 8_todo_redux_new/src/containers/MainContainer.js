import React from 'react';

const MainContainer = React.createClass({
	render(){
		// console.log("MAINCONTAINER")
		// console.log(this.props)
		return (
			<div>
				<nav>
				  <div>
				    <ul 
				    	id="nav-mobile" 
				    	className="right hide-on-med-and-down">
				      <li><a href="/">Home</a></li>
				      <li><a href="/">Login</a></li>
				      <li><a href="/">Register</a></li>
				    </ul>
				  </div>
				</nav>
	        
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default MainContainer;