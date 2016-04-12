var React = require("react")
var PropTypes = React.PropTypes;

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

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle