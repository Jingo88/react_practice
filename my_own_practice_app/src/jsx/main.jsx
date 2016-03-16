import React from "react"
import ReactDOM from "react-dom"
import App from "./app"

var person = {
	name: "Jason",
	age: 27,
	height: "5 ft 9 in",
	favColor: "Red",
	eyes: "Black",
	vision: "20/20",
	favTurtle: "Raphael"
};

ReactDOM.render(
	<App person={person} />,
	document.getElementById('homePage')
)