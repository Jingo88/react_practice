var React = require("react")

function puke(obj){
	return <pre>{JSON.stringify(obj, null, '')}</pre>
}

// When using return why can't I do the ( if else ) on multiple lines?
// BUT a ternary operator on multiple lines works?
function ConfirmBattle(props){
	return props.isLoading === true 
		? <p> LOADING!!!</p>
		: <div>CONFIRM BATTLE: {puke(props)}</div>
}

module.exports = ConfirmBattle