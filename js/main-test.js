let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN (money) || money =="" || money ==null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
	start ();

let appData = {
	budjet: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true 
};

function chooseExpenses () {
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
}
chooseExpenses();

function detectDayBudget () {
	appData.moneyPerDay = (appData.budjet / 30).toFixed();
	alert ("Бюджет на 1 день составляет:" + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel () {
	if( appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	   console.log( "Средний уровень достатка");	
	} else if (appData.moneyPerDay > 2000) {
		console.log ( "Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}

detectLevel ();


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

 function checkSavings() {
	 if (appData.savings == true){
		 let save = +prompt("Какова сумма накоплений?"),
			  persent = +prompt ("Под какой процент?");

			  appData.monthIncome = save/100/12*persent;
			  alert ("Доход в месяц с вашего депозита:" + appData.monthIncome);
	 }
 }

 checkSavings();

	












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
 
