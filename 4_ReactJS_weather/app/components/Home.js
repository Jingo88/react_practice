var React = require('react')
var styles = require('../styles/styles');
// var Home = React.createClass({
// 	return : function(){
// 		render (
// 			<h1> WE ARE HOME</h1>
// 		)
// 	}
// })

function Home(props){
	return(
		<div style={styles.container}>
			<h1> WE ARE HOME STATELESS FUNCTIONAL COMPONENT</h1>
		</div>
	)
}

module.exports = Home;