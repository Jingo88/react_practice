var React = require('react')

function Button(){
	return(
		<button>MY BUTTON </button>
	)
}

function InputField(){
	return(
		<input type="text" placeholder="city"/>
	)
}

function GetCity(){
	return (
		<div>
			<Button>

			</Button>
			<InputField />
		</div>
	)
}

module.exports = GetCity;