import React from 'react';

import BookContainer from '../containers/BookContainer'
import NoteContainer from '../containers/NoteContainer'

function Home(props){
	return(
		<div className = 'row'>
			<h1> WELCOME TO SOME BULLSHIT TODO APP</h1>
			<BookContainer className="col s6"/>
			<NoteContainer className="col s6"/>
		</div>
	)
}


module.exports = Home;