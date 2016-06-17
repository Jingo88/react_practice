import React from 'react';
import BookContainer from '../containers/BookContainer'

function Home(props){
	return(
		<div className = 'row'>
			<h1> YOUR PERSONAL ORGANIZER</h1>
			<BookContainer/>
		</div>
	)
}

export default Home;