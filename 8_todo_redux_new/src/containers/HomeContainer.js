import React from 'react';
import Home from '../components/HomeComponent';

const HomeContainer = React.createClass({
	render(){
		return (
			<div className="container">
				<Home/>
			</div>
		)
	}
})

export default HomeContainer;