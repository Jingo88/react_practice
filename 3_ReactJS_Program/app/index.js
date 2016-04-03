var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function(){
		return(
			<img src={this.props.imageUrl}/>
		)
	}
});

var ProfileLink = React.createClass({
	render: function(){
		return(
			<div>
				<a href={}>
					{this.props.username}
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function(){
		return(
			<div>{this.props.name}</div>
		)
	}
})

var Avatar = React.createClass({
	render: function(){
		return(
			<div>
				<ProfilePic imageUrl = {}/>
				<ProfileName name = {this.props.user.name}/>
				<PrifileLink username = {this.props.user.username}/>
			</div>
		)
	}
})

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);