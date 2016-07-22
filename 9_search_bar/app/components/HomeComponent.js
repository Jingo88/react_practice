import React from 'react';

var styles = {
	header: {
		color:'red'
	}
}


function ListItem(props){
	return(
		<li>{props.data}</li>
	)
}

function WholeList(props){
	return(
		<ul>
		{
			props.items.map(function(listItem){
				return <ListItem data={listItem}/>
			})
		}
		</ul>
	)
}

function HomeComponent(props){
	console.log(props.data)
	return (
		<div>
			<h1>Hello</h1>
			<input type="text" placeholder="Search" onChange={props.onHandle}/>
			<WholeList items={props.data}/>
		</div>
	)
};



module.exports = HomeComponent;
