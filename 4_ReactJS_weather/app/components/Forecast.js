var React = require('react');

function Forecast(props){
	return props.isLoading === true
		? <div> LOADING </div>
		: <div> Forecast Component is HURRRRR </div>
}

module.exports = Forecast;