let money,
    income = 20000,
    addExpenses,
    deposit = false,
    mission = 100000,
    amount1,
    amount2,
    expenses1,
    expenses2,
    budgetMonth,
    numbersArr,
    budgetDay,
    period = 8;

money = +prompt('“Ваш месячный доход?”');
addExpenses = prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”');

deposit = confirm('“Есть ли у вас депозит в банке?”');
console.log(deposit);

expenses1 = prompt('“Введите обязательную статью расходов?”');
expenses2 = prompt('“Введите обязательную статью расходов?”');
console.log(expenses1, expenses2);

amount1 = +prompt('“Во сколько это обойдется?”');
amount2 = +prompt('“Во сколько это обойдется?”');
console.log(amount1, amount2);

budgetMonth = money - (amount1 + amount2);

console.log('budgetMonth: ' + budgetMonth);

mission = Math.ceil(mission / budgetMonth);

budgetDay = Math.floor(budgetMonth / 30);

console.log('budgetDay ' + budgetDay);

if (budgetDay >= 1200) {
  console.log('“У вас высокий уровень дохода”');
} else if (budgetDay >= 600) {
  console.log('“У вас средний уровень дохода”');
} else if (budgetDay < 600) {
  console.log('“К сожалению у вас уровень дохода ниже среднего”');
} else if (budgetDay < 0) {
  console.log('“Что то пошло не так”');
}

// console.log(typeof money, typeof income, typeof deposit);
// console.log('Длина строки - addExpenses: ' + addExpenses.length + ' символов');
console.log(`“Цель заработать 100000 рублей будет достигнута за ${mission} месяцев"`);

// let Expenses = addExpenses.toLowerCase();
// let ArrExpenses = Expenses.split(',');
// let Result = ArrExpenses.join()

// console.log(Result);

// let budgetDay = money / 30;

// console.log(`budgetDay: ${budgetDay}`);
