import React from 'react';
import { Link } from 'react-router';

import HomeContainer from '../containers/HomeContainer'

var Main = React.createClass({
	render(){
		return (
						<div>
				<nav>
				  <div 
				  	className="nav-wrapper"
				  	style = {styles.navBar}>
				  	<Link 
				  		to='/'
				  		style={styles.logo}> 
				  		Movie Lister
				  	</Link>
				    
				    <ul 
				    	id="nav-mobile" 
				    	className="right hide-on-med-and-down">

				      <li><a href="/" >Back To Search</a></li>
				    </ul>
				  </div>
				</nav>
	      <HomeContainer/>
			</div>
		)
	}
})

export default Main;