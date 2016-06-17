import React from 'react';
import Book from '../components/BookComponent'
import NoteContainer from './NoteContainer'

const BookContainer = React.createClass({
	render(){
		return (
			<div>
				<div className='col s6'>
					<Book/>
				</div>
				<div className='col s6'>
					<NoteContainer/>
				</div>		
			</div>
		)
	}
})

export default BookContainer;
