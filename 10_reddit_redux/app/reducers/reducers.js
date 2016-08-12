import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const init = [];

function redditReducer(state=init, action){
	// console.log('we are in reddit reducer!!!!')
	// console.log(state)
	switch(action.type){
		case 'ADD_HEADLINE':
			// console.log('REDDIT REDUCER ADD HEADLINE CASE')
			// console.log(action.payload)
			let newState = [];
			let data = action.payload
			console.log(data)
			data.map(headline => {
				return newState.push(headline)
			})
			return newState
	default: 
		return state;
	}	
}

const rootReducer = combineReducers({redditReducer: redditReducer, routing: routerReducer})

export default rootReducer;
