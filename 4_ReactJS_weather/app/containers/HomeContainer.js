var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
	render: function(){
		return (
			<div>
				<h1> WE ARE IN THE HOME CONTAINER </h1>
				<Home />
			</div>
		)
	}
})

module.exports = HomeContainer;