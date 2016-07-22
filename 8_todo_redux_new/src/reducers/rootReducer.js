import store from '../store'

function rootReducer(state = store, action){
	switch(action.type){
		case 'CREATE_BOOK':
			return state[action.payload.title] = action.payload
	}
}

export default rootReducer