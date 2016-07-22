import React from 'react';

import HomeComponent from '../components/HomeComponent';

const HomeContainer = React.createClass({
	getInitialState(){
		return{
			initialItems:[
			"Apples",
			"Broccoli",
			"Chicken",
			"Duck",
			"Eggs",
			"Fish",
			"Granola",
			"Hash Browns",
			"milk",
			"Front end",
			"React",
			"Javascropt",
			"SuperList",
			"Jesus"
			]
		}
	},

	componentWillMount(){
		this.setState({items:this.state.initialItems})
	},

	filterList(event){
		let updatedList = this.state.initialItems
		updatedList = updatedList.filter(function(item){
			return item.toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
		})
		this.setState({items:updatedList})
	},
	render() {
		return (
			<div>
				<HomeComponent 
					data = {this.state.items}
					onHandle = {this.filterList}/>
			</div>
		)
	}
})

export default HomeContainer