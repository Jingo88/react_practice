var React = require('react');
// var ReactDOM = require('react-dom');

var styles = {
	container: {
		width: "100%",
		height: "92%"
	}
}

var Main = React.createClass({
	render: function(){
		return (
			<div styles = {styles.container}> 
				<nav>
			    <div className="nav-wrapper">
			      <a href="#" className="brand-logo">Weather Logo</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="sass.html">Home</a></li>
			        <li><a href="badges.html">Something Else</a></li>
			        <li><a href="collapsible.html">Other Thing</a></li>
			      </ul>
			    </div>
			  </nav>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Main;

// ReactDOM.render(
// 	<HelloWorld/>,
// 	document.getElementById('app')
// )