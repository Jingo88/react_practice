import React from 'react';

import NoteContainer from '../containers/NoteContainer'

function Book(props){
	return (
		<div>
			<div className='col s6'>
				<h1> My Book List Goes Here</h1>
			</div>
			<div className='col s6'>
				<NoteContainer/>
			</div>		
		</div>
			
	)
} 

export default Book;
