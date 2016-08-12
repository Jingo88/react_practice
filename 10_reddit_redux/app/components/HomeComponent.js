import React from 'react'

function HomeComponent(props){
	console.log('WE ARE IN THE HOME COMPONENT NOW!!!!!!!')
	// console.log(props)
	// console.log(props.data[2])
	let headlines = props.data
	// console.log(headlines)
	// console.log(headlines[2])
	headlines.map(headline=>{
		console.log(headline.data)
	})
	return(
		<div>
			<h1>We are in the Home Component</h1>
			<ul>
				{headlines.map(headline=>{
					return <li>{headline.data.selftext}</li>
				})}
			</ul>
		</div>
	)
}

module.exports = HomeComponent;