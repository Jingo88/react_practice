// reducers takes in two things

// the action which is information about what just happened
// the copy of the current state

// function posts(state = [], action){
// 	console.log(state, action);

// 	return state;
// }

// export default posts;


function posts(state = [], action) {
  switch(action.type){
  	case 'INCREMENT_LIKES':
  		console.log("Incrementing Likes");
  		const i = action.index;
  		return [
  			...state.slice(0,i),
  			{...state[i], likes: state[i].likes + 1},
  			...state.slice(i + 1)
  		]

  	default: 
  		return state;
  }
}

export default posts;