console.log('hello world');

// what is JavaScript
// basic syntax and datatypes
// variables
// control flow (if-else, switch)
// loops

// WHAT IS JAVASCRIPT
// JavaScript is a frontend PROGRAMMING language that is used to add interactivity to websites. 
// it can also be used to create APIs using frameworks like nodejs and express


// BASIC SYNTAX
// python --> print('Hello world')
// c++ --> printf("")
// dart --> print('Hello world');
// javascript --> console.log('Hello world');


// VARIABLES
// A variable is a container that holds a value, A bottle of juice, the bottle is the container(variable) and the juice is its value.

// we can define variables in javascript with the let, const and var keywords

const name = 'Daniella' // string datatype (Strings are always written in quotation marks ["" or '', or ``])
let age = 20; // number datatype (int[-2, 3,], floats[3.12, 0.033])
let isFemale = false; // boolean (either true or false)
let favoriteMeals = ['Rice', 'Okok']; // array datatype
let grade = {
    'JavaScript': 30,
    'Flutter': 60
} // object datatype

// concatenation is the process of joining 2 strings
// we can concatenate with the plus operator, comma and template string

654490031


console.log('Hello ' + name + "! " + "Welcome to Caasitech"); // concatenation using the plus operator
console.log('Hello',name, ",", "Welcome to Caasitech again " + "Trying something out"); // concatenation using the comma operator (combined with the plus operator
console.log(`Hello  ${name}`) // concatenation using a template string

console.log(`${name} is a girl and ${name} is new in Caasitech. ${name} does JavaScript and eventually flutter and UI/UX`)


let student_grade = 90;
// =50 average, >50 <=70 GOOD, >70, Very Good
if (isFemale == true) {
    console.log('Mamita is a female')
} else {
    console.log('Mamita is a male');
}


if (student_grade < 50) { 
    console.log('You failed')

} else if (student_grade == 50) {
    console.log('You did average')
} else if (student_grade > 50 && student_grade <= 70) {
    console.log('You did well')

} else if (student_grade > 70) {
    console.log('You did very well')
}

function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both numbers are equal.";
    }
}
 // Example usage:
const number1 = 90;
const number2 = 30;

console.log(parseInt(number1) + number2)
 const greaterNumber = findGreaterNumber(number1, number2);
console.log("The greater number is:", greaterNumber);

const num1 = 10;
const num2 = 25;
  const result = (num1 + num2)
  console.log('your result is:', result)



// Write a function that takes a number and determines if it is even or odd

function isEvenorOdd(number){
  
    if (number % 2 == 0)
    console.log('number is even');
    else
    console.log('number is odd');
} 
isEvenorOdd(11)  


// function isNumberPrime(num) {
//     if(num % 2 != 0) {
//         if(num % 1 == 0 && num % num == 0){return num} 
//     } else {
//         console.log(num, 'is even')
//     }
    

//     // if the remainder of the number / 1 is 0 and the remainder of the number / number is also 0, then the number is prime
// }



// AI CODE

function isNumberPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    if (num <= 3) {
      return true;
    }
  
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
  
    return true;
  }
  
  function checkNumber(num) {
    if (num % 2 === 0) {
      console.log(num, 'is even');
    } else if (isNumberPrime(num)) {
      console.log(num, 'is prime');
    } else {
      console.log(num, 'is odd');
    }
  }
  
  // Example usage:
  checkNumber(13); // Output: 10 is even
//   checkNumber(7);  // Output: 7 is prime
//   checkNumber(9);  // Output: 9 is odd
let greatestNum;
varnum1 = prompt('enter the first number' (num1));
varnum2 = prompt('enter the second number'(num2));
if ( num1 > num2)
  greatestNum = num1;
else
greatestNum = Num2;
