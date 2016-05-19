// reducers takes in two things

// the action which is information about what just happened
// the copy of the current state

function posts(state = [], action){
	console.log(state, action);

	return state;
}

export default posts;