"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let x;
    let dis = Math.pow(b, 2) - 4 * a * c;
    if (dis < 0) 
      x = [];
    
    else if (dis == 0) 
      x = [((-b + Math.sqrt(dis)) / (2 * a))];
    
    else if (dis > 0) 
      x = [((-b + Math.sqrt(dis)) / (2 * a)), (-b - Math.sqrt(dis) / (2 * a))]
    
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    marks.splice(5, (marks.length-5));
    console.log(marks);
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    };
    averageMark = sum / marks.length;
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
  let result;


 
let today = new Date(); 
let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let todayDate = today.getDate();

   
let dob =  new Date(dateOfBirthday);
let dobYear = dob.getFullYear();
let dobMonth = dob.getMonth();
let dobDate = dob.getDate();
let yearsDiff = todayYear - dobYear;
let age;

if (todayMonth < dobMonth) 
  age = yearsDiff - 1; 
 
else if (todayMonth > dobMonth) 
  age = yearsDiff ; 
 

else if ( todayDate < dobDate ) 
    age = yearsDiff - 1;
else 
    age = yearsDiff;


if (age >= 18)
  result = `Не желаете ли олд-фэшн, ${name}?`;

else 
  result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  console.log(result)
  return result;
}