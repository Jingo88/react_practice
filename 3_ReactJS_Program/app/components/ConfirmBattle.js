var React = require("react")

function ConfirmBattle(props){
	return props.isLoading === true 
		? <p> LOADING!!!</p>
		: <p> CONFIRMED BATTLE </p>
}

module.exports = ConfirmBattle