import React from 'react'

function MovieSearch(props){
	return (

		<div className="row">
	    <form className="col s10 offset-s2 m4 offset-m4"
	    	onSubmit = {props.onSubmitMovie}>
	    	<input 
	    		placeholder="Enter Movie or TV Show Title" 
	    		type="text"
	    		className="validate"
	    		onChange = {props.onUpdateMovie}/>

	    	<input 
	    		type="submit"
	    		hidden/>
	    </form>
	  </div>
	)	
} 

export default MovieSearch