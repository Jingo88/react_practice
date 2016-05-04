var React = require('react');
var Home = require('../components/Home');

var styles = require('../styles/styles');

var HomeContainer = React.createClass({
	render: function(){
		return (
			<div style={styles.container}>
				<h1> WE ARE IN THE HOME CONTAINER </h1>
				<Home />
			</div>
		)
	}
})



module.exports = HomeContainer;



