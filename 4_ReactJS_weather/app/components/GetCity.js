var React = require('react')
// var styles = require('../styles/styles');

var styles = {

}

function Button(props){
	// why is the i tag material icons not working?!?!? wrong cdn? 
	return(
		<button
			className = "waves-effect waves-light btn"
			type='submit'
			name='action'
			onClick = {props.onSubmitCity}>
			<i className="material-icons right">
			{props.children} 
			</i>
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

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetCity(props){
	return (
		<div>
			
			<InputField style = {getStyles(props)}
				onUpdateCity = {props.onUpdateCity}
				city = {props.city}/>
			<Button
				onSubmitCity = {props.onSubmitCity}>
				Get Weather!
			</Button>
		</div>
	)
}

module.exports = GetCity;