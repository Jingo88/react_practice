import React from 'react'

function SearchBar(props){
	return (
		<div className="row">
	    <form className="col s6 offset-s3">
	    	<input 
	    		placeholder="Enter Movie Title" 
	    		type="text"
	    		className="validate"/>

	    	<input 
	    		type="submit"
	    		hidden/>
	    </form>
	  </div>
	)
}

function MovieSearch(props){
	return (

		<div className="row">
	    <form className="col s6 offset-s3"
	    	onSubmit = {props.onSubmitMovie}>
	    	<input 
	    		placeholder="Find Yourself A Movie" 
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