var inputDate = prompt("Введитес дату");

function calculateDate(inputDate) {
	var arr = [];
	var userDate = new Date(inputDate);
	var regex = new RegExp(/[.: /]/,'g');
	var currentDate = Date.now();
	var x;
	var console; 
	arr = inputDate.match(regex);
	if (arr != null){
		userDate = userDate.valueOf();
	}
	
	else {
		userDate = +inputDate;
	}

	if (userDate < currentDate ) {
		x = (currentDate - userDate)/ 3600000;
		console = "Прошло " + x + " часов";
	}

	if (userDate > currentDate) {
		x = (userDate - currentDate)/ 3600000;
		console = "Осталось " + x + " часов";
	}
	
	if (Math.abs(userDate - currentDate) <= 7200000) {
		console = "Cейчас";
	}
	return console;
}

console.log(calculateDate(inputDate));