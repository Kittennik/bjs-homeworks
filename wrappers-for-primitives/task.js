"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (percent > 0) {  
        percent = +percent;
    } 
    else {
        return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}.`);
    }
 
    if (contribution >= 0) {  
        contribution = +contribution;
    } 
    else {
        return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}.`); 
    }
   
    if (amount > 0) {  
        amount = +amount;
    } 
    else {
          return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}.`); 
    }
    
    let currentDate  = new Date();
    let dateOfReturn = new Date(date);
    let payPeriod = (0 - ((currentDate.getFullYear() -  dateOfReturn.getFullYear()) * 12) - (currentDate.getMonth() - dateOfReturn.getMonth()));
    let returnAmount = amount - contribution;
    let p = percent / 100 / 12;
    let monthlyPay = returnAmount*(p+p/(((1+p)**payPeriod)-1));
    let  totalAmount = monthlyPay * payPeriod;
    console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    
    if (name === "" || name === null || name === undefined) {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    }
    else {
        greeting = `Привет, мир! Меня зовут ${name}.`; 
    };

    return greeting;
}