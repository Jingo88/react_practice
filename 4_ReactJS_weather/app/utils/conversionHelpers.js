var days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
]

function kelToFar(temp){
	return (temp * (9/5) - 459.67)
}

function iconProducer(description){

}

function getDate(unixTime){
	var date = new Date(unixTime * 1000);
	var dayIndex = date.getDay()
	var today = days[dayIndex]
	var month = date.getMonth()
	var dayDate = date.getDate()
	var fullYear = date.getFullYear()
	return today + " : " + " " + month + " / " + dayDate + " / " + fullYear
}

module.exports = {
	kelToFar : kelToFar,
	iconProducer : iconProducer,
	getDate : getDate
}