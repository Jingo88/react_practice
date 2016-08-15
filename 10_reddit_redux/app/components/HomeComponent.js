import React from 'react'

function HomeComponent(props){
	console.log('WE ARE IN THE HOME COMPONENT NOW!!!!!!!')
	let headlines = props.data
	console.log(props)
	headlines.map(headline=>{
		console.log(headline.data)
	})
	return(
		<div>
			<button onClick = {props.onNewsClick}>Get News</button>
			<h1>We are in the Home Component</h1>
			<ul>
				{headlines.map(headline=>{
					return <li>{headline.data.domain}</li>
				})}
			</ul>
		</div>
	)
}

module.exports = HomeComponent;