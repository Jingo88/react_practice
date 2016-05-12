var React = require('react')
var PropTypes = React.PropTypes
var weatherHelpers = require('../utils/weatherHelpers')

var styles = {}

// You can make functions that return an object or declare a variable that is assigned an object
// Commented out below because this component is already inheriting the styles from Home Component

// function getStyles (props) {
//   return {
    // display: 'flex',
    // flexDirection: props.direction || 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // maxWidth: 300,
    // alignSelf: 'right'
//   }
// }

function Button(props){
	// why is the i tag material icons not working?!?!? wrong cdn? 
	console.log(props)
	return(
		<button
			className = "waves-effect waves-light btn"
			type='submit'
			name='action'
			onClick = {props.onSubmitCity}>
			<i className="material-icons right">
				cloud
			</i>
			{props.children} 
		</button>
	)
}

function InputField(props){
	return(
		<input 
			type="text" 
			className="input-field"
			onChange = {props.onUpdateCity}
			placeholder="Enter A City"
			value = {props.city}/>
	)
}


function GetCity(props){
	return (
		<div>
			<InputField 
				onUpdateCity = {props.onUpdateCity}
				city = {props.city}/>
			<Button
				onSubmitCity = {props.onSubmitCity}>
				Get Weather!
			</Button>
		</div>
	)
}

GetCity.PropTypes = {
	direction : PropTypes.string.isRequired,
	onSubmitCity : PropTypes.func.isRequired,
	onUpdateCity : PropTypes.func.isRequired,
	city : PropTypes.string.isRequired
}

module.exports = GetCity;