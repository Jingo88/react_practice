
function rootReducer(state, action){
	switch(action.type){
		case 'CREATE_BOOK':
			return state[action.payload.title] = action.payload
	}
}

export default rootReducer