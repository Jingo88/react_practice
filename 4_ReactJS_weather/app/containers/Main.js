var React = require('react');

var styles = {
	myNav: {
		backgroundColor: "grey",
	},
	myLogo:{
		backgroundImage: "url('./app/images/Snuffles.jpg')",
		backgroundSize: "cover",
		marginLeft: "1em",
		maxHeight: "100%"
	}
}

// this.props.children represent the nested routes inside of the routes.js file
// the nav bar will always stay on the page since it is in the main container

var Main = React.createClass({
	render: function(){
		return (
			<div> 
				<nav>
			    <div 
			    	className="nav-wrapper" 
			    	style={styles.myNav}>
			      <a href="/" className="brand-logo"> Some Fancy Logo
			      </a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="/">Home</a></li>
			        <li><a href="http://www.jasonng.nyc" target="_blank">Jingo's Portfolio</a></li>
			        <li><a href="https://github.com/Jingo88" target="_blank">Jingo's Github</a></li>
			      </ul>
			    </div>
			  </nav>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Main;
