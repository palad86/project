let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budjet: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};



for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ((typeof (a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null 
		&&  a !='' && b !='' && a.length < 50)	{
			console.log("done");
			appData.expenses[a]	= b;
	} else {
		i--;
	}
	
}

// let i = 0;
//  do  {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	i++;
// 	if ((typeof (a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null 
// 		&&  a !='' && b !='' && a.length < 50)	{
// 			console.log("done");
// 			appData.expenses[a]	= b;
// 	} else {
// 		i--;
// 	} 
	
//  } while (i < 2);

//  let i = 0;
//  while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	i++;
// 	if ((typeof (a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null 
// 		&&  a !='' && b !='' && a.length < 50)	{
// 			console.log("done");
// 			appData.expenses[a]	= b;
// 	} else {
// 		i--;
// 	} 
	
//  } 


appData.moneyPerDay = appData.budjet / 30;

 alert("Ежедневный бюджет:" + appData.moneyPerDay);

 if( appData.moneyPerDay < 100) {
	 console.log("Минимальный уровень достатка");
 } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log( "Средний уровень достатка");	
 } else if (appData.moneyPerDay > 2000) {
	 console.log ( "Высокий уровень достатка");
 } else {
	 console.log("Произошла ошибка");
 }

	












 // let a = +prompt("Введите число 1", ""),
// 	b = prompt("Введите + или  -", ""),
// 	c = +prompt("Введите число 2", "");
// switch (b) {
// 	case b='+':
// 		alert(a+c);
// 		break;
// 	case b='-':
// 		alert(a-c);
// 		break;
// 	default:
// 		alert("Error");
// 		break;
// }
 