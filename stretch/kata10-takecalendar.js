var assert = require('assert');
// Check if first char is 0, if so do a slice

// 1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// 7th
// 8th
// 9th
// 10th
// 11th
// 12th
// ...
// 20th
// 21st
// 22nd
// 23rd
// 24th
// ...
// 30th
// 31st

const talkingCalendar = function(date) {
	const dateSplit = date.split("/");
	let day = dateSplit[2];
	let month = dateSplit[1];
	const year = dateSplit[0];
	
	if (day[0] === "1") {
		day += "th"
	} else if (day[day.length-1] === "1") {
		day += "st";
	} else if (day[day.length-1] === "2") {
		day += "nd";
	} else if (day[day.length-1] === "3") {
		day += "rd";
	} else {
		day += "th";
	};

	if (day.charAt(0) === "0") {
		day = day.slice(1);
	}

	switch (month){
		case '01':
			month = "January";
			break;
		case '02':
			month = "February";
			break;
		case '03':
			month = "March";
			break;
		case '04':
			month = "April";
			break;
		case '05':
			month = "May";
			break;
		case '06':
			month = "June";
			break;
		case '07':
			month = "July";
			break;
		case '08':
			month = "August";
			break;
		case '09':
			month = "September";
			break;
		case '10':
			month = "October";
			break;
		case '11':
			month = "November";
			break;
		case '12':
			month = "December";
			break;
	}

	return month + " " + day + ", " + year;
};

assert.equal(talkingCalendar("2017/12/02"), "December 2nd, 2017");
assert.equal(talkingCalendar("2007/11/11"), "November 11th, 2007");
assert.equal(talkingCalendar("1987/08/24"), "August 24th, 1987");