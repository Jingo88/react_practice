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
	return Math.round(temp * (9/5) - 459.67)
}	

function meterToFeet(meter){
	var feetLen = meter * 3.28084
	return feetLen.toFixed(2)
}

function kelToCel(temp){
	return Math.round(temp -273.15)
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
	kelToCel : kelToCel,
	getDate : getDate,
	meterToFeet: meterToFeet,
}