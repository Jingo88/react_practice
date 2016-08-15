import React from 'react'
var axios = require('axios');

import HomeComponent from '../components/HomeComponent'

function getHeadlinesFront(){
	return axios.get('https://www.reddit.com/r/front.json')
							.then(function(response){
								console.log('hmmmm will this work? ')
								console.log(response)
								return response
							})
							.catch(function(err){
								console.log(err)
								console.log('We broke inside getHeadlinesFront helper')
							})
}

function getHeadlinesNews(){
	return axios.get('https://www.reddit.com/r/news.json')
							.then(function(response){
								console.log('hmmmm will this work? ')
								console.log(response)
								return response
							})
							.catch(function(err){
								console.log(err)
								console.log('We broke inside getHeadlinesFront helper')
							})
}

const HomeContainer = React.createClass({
	componentDidMount(){
		this.getRedditHeadlines()
	}, 
	// componentWillReceiveProps(){
	// 	this.getRedditHeadlines()
	// },
	getRedditHeadlines(){
		getHeadlinesFront()
			.then(function(data){
				let headlines = data.data.data.children

				this.props.addHeadline(headlines)
				// headlines.map(headline=>{
				// 	// console.log(headline.data)
				// 	this.props.addHeadline(headline.data)
				// })
			}.bind(this))
	},
	handleNewsClick(){
		getHeadlinesNews()
			.then(function(data){
				let headlines = data.data.data.children
				console.log("we are in the handle news click function")
				console.log(headlines)
				this.props.addHeadline(headlines)
			}.bind(this))
	},
	render(){
		console.log("what the fuck")
		console.log(this.props.state)
		console.log(this.props.state.redditReducer)
		return(
			<div>
				{this.props.state.redditReducer.length >0 ? <HomeComponent data={this.props.state.redditReducer} onNewsClick = {this.handleNewsClick}/> : <h1>Loading</h1>}
			</div>
		)
	}
})

export default HomeContainer;

