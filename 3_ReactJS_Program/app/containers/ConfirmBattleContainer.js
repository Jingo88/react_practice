//Require your shit
var React = require('react')
// This is the container file, we want to import our presentational components
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	//why the hell do we need contextTypes for the router
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return{
			isLoading: true,
			playerInfo: []
		}
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
		}.bind(this))//this is binding the "this" from earlier where the query is, because inside the anon CB "this" is different
	},
	render: function(){
		return(
			<ConfirmBattle 
				isLoading = {this.state.isLoading}
				playersInfo= {this.state.playersInfo} />
		)
	}
})

module.exports = ConfirmBattleContainer