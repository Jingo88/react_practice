import React from 'react';
import Note from '../components/NoteComponent';

const NoteContainer = React.createClass({
	render(){
		return (
			<div className="col s6">
				<Note/>
			</div>
		)
	}
})

export default NoteContainer;