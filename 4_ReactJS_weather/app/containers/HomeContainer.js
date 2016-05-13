var React = require('react');
var Home = require('../components/Home');

// IndexRoute in the router. First nested child going into the Main Container

const HomeContainer = React.createClass({
	render: function(){
		return (
			<div>
				<Home />
			</div>
		)
	}
})

module.exports = HomeContainer;
