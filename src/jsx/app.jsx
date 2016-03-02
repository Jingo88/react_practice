import React from "react"

var IndexPage = React.createClass({
	render: function(){
		return(
			<h1> Welcome Page</h1>
		)
	}
})

var App = React.createClass({
	render: function(){
		return(
			<div>
				<h1> THIS IS THE APP CLASS</h1>
				<IndexPage />
			</div>
		)
	}
})

module.exports = "App";