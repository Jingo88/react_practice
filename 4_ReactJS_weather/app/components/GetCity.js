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

// Can we get enter press to work here?
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

// Search function checks to see if the "search" state is true or false
// Will render an error message if the user did not enter a city or state
function Search(props){
	if (props.search === false){
		return	<h6> Please enter a city or state below</h6>	
	} else {
		return <div></div>
	}
}

function GetCity(props){	
	return (
		<div>
			<Search search={props.search} />
			<InputField 
				onUpdateCity = {props.onUpdateCity}
				onSubmitCity = {props.onSubmitCity}
				city = {props.city}/>
			<Button
				onSubmitCity = {props.onSubmitCity}>
				Get Weather!
			</Button>
		</div>
	)
}

GetCity.PropTypes = {
	search : PropTypes.bool.isRequired,
	direction : PropTypes.string.isRequired,
	onSubmitCity : PropTypes.func.isRequired,
	onUpdateCity : PropTypes.func.isRequired,
	city : PropTypes.string.isRequired
}

module.exports = GetCity;