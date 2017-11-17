var month = +prompt("Введите число");

function getMonth(month){
	try {
  		var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September' , 'October', 'November', 'December']
  		if (month>12||month<1){
  			throw new SyntaxError("Данные некорректны");
  		}
  		} catch (e) {
  			alert( "Извините, в данных ошибка" );
		}
		return monthName[month-1];
  	}

console.log(getMonth(month));